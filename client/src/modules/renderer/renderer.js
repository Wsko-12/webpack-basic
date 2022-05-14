import MAIN from '../../index.js';
let THREE;
let mesh,box;
let playerPos;

let time = {value:0};
export default {
    init(startRender){
        THREE = MAIN.THREE;
        const canvasRenderer = document.createElement('canvas');
        canvasRenderer.showContextMenu = function(e) {
            e.preventDefault();
        };
        document.body.append(canvasRenderer);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRenderer,
        });
        this.renderer = renderer;
        renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        // renderer.toneMapping = THREE.ACESFilmicToneMapping;


        const camera = new THREE.PerspectiveCamera(10, 2, 0.2, 500);
        this.camera = camera;
        camera.position.set(10, 10, 10);
        camera.lookAt(0, 0, 0);
        this.clock = new THREE.Clock;
        
        const scene = new THREE.Scene();
        this.scene = scene;

        window.addEventListener("resize", ()=>{this.setSize()});
        this.setSize();
        

        if(startRender){
            this.clock.start();


            const light = new THREE.DirectionalLight();
            light.shadow.bias = 0;
            light.castShadow = true;
            mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(0.5,0.2),new THREE.MeshToonMaterial());
            light.position.set(10,10,-10);
            light.color = new THREE.Color(0xfffcf2);
            scene.add(light);
            const ambientLight = new THREE.AmbientLight();
            ambientLight.color = new THREE.Color(0xf2fcff);
            ambientLight.intensity = 0.4;
            scene.add( ambientLight );

            const plane =  new THREE.Mesh(new THREE.PlaneGeometry(),new THREE.MeshPhongMaterial({color:0x232e1b}));
            plane.rotation.x = -90*Math.PI/180;
            // plane.position.y -= 0.5;
            plane.scale.x = plane.scale.y = 10;
            plane.receiveShadow = true;
            scene.add(plane);
            
            const grassMaterial = new THREE.MeshPhongMaterial();
            MAIN.ASSETS.textures.pxTexture.magFilter = THREE.NearestFilter;
            MAIN.ASSETS.textures.pxTexture.minFilter = THREE.NearestFilter;
            MAIN.ASSETS.textures.pxTexture.flipY = false;
            grassMaterial.map = MAIN.ASSETS.textures.pxTexture;
            grassMaterial.transparent = true;

            grassMaterial.side = THREE.DoubleSide;
            grassMaterial.alphaTest = 0.6;


            playerPos = new THREE.Uniform(new THREE.Vector2(0,0));
            grassMaterial.onBeforeCompile = (shader) => {
                shader.uniforms.time = time;
                
                shader.uniforms.playerPos = playerPos;
                const token_vs = `#define PHONG`;
                const vs = `
                    #define PHONG
                    uniform float time;
                    uniform vec2 playerPos;
                    varying vec3 vPosition;
                    varying vec4 xPosition;
                `;

                shader.vertexShader = shader.vertexShader.replace(token_vs,vs);
                
                const token_vs_2 = `#include <fog_vertex>`;
                const vs_2 = `
                    #include <fog_vertex>
                    vPosition = position;
                    vPosition.x += vPosition.y*cos(time)*0.05;
                    vPosition.z += vPosition.y*sin(time)*0.05;
                    xPosition = modelMatrix*vec4( vPosition, 1.0 );
                    if(vPosition.y > 0.2 && distance(xPosition.x,playerPos.x) < .5 && distance(xPosition.z,playerPos.y) < .5){
                        vPosition.y *= 0.3;
                        vPosition.x +=  xPosition.x - playerPos.x;
                        vPosition.z += xPosition.z - playerPos.y;
                    }
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
                `
                shader.vertexShader = shader.vertexShader.replace(token_vs_2,vs_2);
            };



            const depthMaterial = new THREE.MeshDepthMaterial( {
                depthPacking: THREE.RGBADepthPacking,
                map:  MAIN.ASSETS.textures.pxTexture,
                alphaTest: 0.2,
            } );
            
            depthMaterial.onBeforeCompile = (shader) => {
                shader.uniforms.time = time;
                shader.uniforms.playerPos = playerPos;
                const token_vs = `#include <common>`;
                const vs = `
                #include <common>
                uniform float time;
                uniform float random;
                uniform vec2 playerPos;
                varying vec3 vPosition;
                varying vec4 xPosition;
                
                `;

                shader.vertexShader = shader.vertexShader.replace(token_vs,vs);

                const token_vs_2 = `vHighPrecisionZW = gl_Position.zw;`;
                const vs_2 = `
                    vHighPrecisionZW = gl_Position.zw;
                    vPosition = position;
                    vPosition.x += vPosition.y*cos(time)*0.05;
                    vPosition.z += vPosition.y*sin(time)*0.05;
                    xPosition = modelMatrix*vec4( vPosition, 1.0 );
                    if(vPosition.y > 0.2 && distance(xPosition.x,playerPos.x) < .5 && distance(xPosition.z,playerPos.y) < .5){
                        vPosition.y *= 0.3;
                        vPosition.x +=  xPosition.x - playerPos.x;
                        vPosition.z += xPosition.z - playerPos.y;
                    }
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
                `
                shader.vertexShader = shader.vertexShader.replace(token_vs_2,vs_2);
            };

            const count = 3;

            for(let x = -count; x<count;x++){
                for(let y=-count;y<count;y++){
                    const grassPlane = new THREE.Mesh(MAIN.ASSETS.geometries.grass_1.clone(),grassMaterial);

                    grassPlane.castShadow = true;
                    grassPlane.receiveShadow = true;
                    
                    grassPlane.position.x = x;
                    grassPlane.position.y = -0.0;
                    grassPlane.position.z = y;

                    grassPlane.rotation.y = Math.PI/180 * Math.random()*180;

                    grassPlane.customDepthMaterial = depthMaterial;
                    scene.add(grassPlane);
                }
            }
            
            for(let x = -count; x<count;x++){
                for(let y=-count;y<count;y++){
                    const grassPlane = new THREE.Mesh(MAIN.ASSETS.geometries.grass_2.clone(),grassMaterial);    
        
                    grassPlane.castShadow = true;
                    grassPlane.receiveShadow = true;
                    
                    grassPlane.position.x = x;
                    grassPlane.position.z = y;

                    grassPlane.rotation.y = Math.PI/180 * Math.random()*180;


                    grassPlane.customDepthMaterial = depthMaterial;
                    scene.add(grassPlane);
                }
            }

            for(let x = -count; x<count;x++){
                for(let y=-count;y<count;y++){
                    const grassPlane = new THREE.Mesh(MAIN.ASSETS.geometries.grass_3.clone(),grassMaterial);
        
                    grassPlane.castShadow = true;
                    grassPlane.receiveShadow = true;
                    
                    grassPlane.position.x = x;
                    grassPlane.position.z = y;

                    grassPlane.rotation.y = Math.PI/180 * Math.random()*180;


                    grassPlane.customDepthMaterial = depthMaterial;
                    scene.add(grassPlane);
                }
            }



            box = new THREE.Mesh(new THREE.BoxBufferGeometry(0.2,1,0.2),new THREE.MeshPhongMaterial());
            box.material.gradientMap = MAIN.ASSETS.textures.gradient_map;
            box.castShadow = true;
            box.receiveShadow = true;
            box.position.y = 0.5;

            scene.add(box)
            
            this.render();
        }
    },

    setSize(){
        const windowWidth = window.outerWidth;
        const windowHeight = window.outerHeight;
        const windowPixelRatio = Math.min(window.devicePixelRatio, 2);

        this.renderer.setSize(windowWidth/8, windowHeight/8);
        // this.renderer.setSize(windowWidth, windowHeight);

        this.renderer.setPixelRatio(1);
        this.renderer.domElement.style.width = window.innerWidth + 'px';
        this.renderer.domElement.style.height = window.innerHeight  + 'px';

        this.camera.aspect = windowWidth / windowHeight;
        this.camera.updateProjectionMatrix();
        console.log( this.renderer.info.render.triangles );
    },

    render:function(){

        time.value += 0.01;

        // box.rotation.y = time.value;
        this.renderer.render(this.scene, this.camera);


        if(playerPos){
            box.position.x = playerPos.value.x;
            box.position.z = playerPos.value.y;
            this.camera.position.x = playerPos.value.x + 10;
            this.camera.position.z = playerPos.value.y + 10;
            this.camera.lookAt(playerPos.value.x,0,playerPos.value.y);

        }

        requestAnimationFrame(()=>{this.render()});
    },
};



document.addEventListener('keydown',(e)=>{
    let speed = 0.1;
    if(e.code === 'ArrowUp'){
        playerPos.value.x -= speed;
    }
    if(e.code === 'ArrowDown'){
        playerPos.value.x += speed;
    }
    if(e.code === 'ArrowLeft'){
        playerPos.value.y += speed;
    }
    if(e.code === 'ArrowRight'){
        playerPos.value.y -= speed;
    }
})