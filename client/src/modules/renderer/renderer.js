import MAIN from '../../index.js';
let THREE;
let mesh,grassPlane;

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
            console.log(light.shadow.bias = -0.0001);
            light.castShadow = true;
            mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(0.5,0.2),new THREE.MeshToonMaterial());
            MAIN.ASSETS.textures.gradient_map.magFilter = THREE.NearestFilter;
            MAIN.ASSETS.textures.gradient_map.minFilter = THREE.NearestFilter;
            mesh.material.gradientMap = MAIN.ASSETS.textures.gradient_map;
            light.position.set(10,10,-10);
            scene.add(light);
            const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
            scene.add( ambientLight );

            const plane =  new THREE.Mesh(new THREE.PlaneGeometry(),new THREE.MeshToonMaterial());
            plane.rotation.x = -90*Math.PI/180;
            plane.position.y -= 0.5;
            plane.scale.x = plane.scale.y = 5;
            plane.receiveShadow = true;
            scene.add(plane);
            
            const grassMaterial = new THREE.MeshToonMaterial();
            MAIN.ASSETS.textures.grass.magFilter = THREE.NearestFilter;
            MAIN.ASSETS.textures.grass.minFilter = THREE.NearestFilter;
            MAIN.ASSETS.textures.grass.flipY = true;
            grassMaterial.map = MAIN.ASSETS.textures.grass;
            grassMaterial.transparent = true;
            grassMaterial.alphaTest = 0.6;
            grassMaterial.onBeforeCompile = (shader) => {
                shader.uniforms.time = time;
                const token_vs = `#define TOON`;
                const vs = `
                    #define TOON
                    uniform float time;
                    varying vec3 vPosition;
                `;

                shader.vertexShader = shader.vertexShader.replace(token_vs,vs);
                
                const token_vs_2 = `#include <fog_vertex>`;
                const vs_2 = `
                    #include <fog_vertex>
                    vPosition = position;
                    vPosition.z += vPosition.y*sin(time)*0.05;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
                `
                shader.vertexShader = shader.vertexShader.replace(token_vs_2,vs_2);
            };

            const depthMaterial = new THREE.MeshDepthMaterial( {
                depthPacking: THREE.RGBADepthPacking,
                map:  MAIN.ASSETS.textures.grass,
                alphaTest: 0.2,
            } );
            
            depthMaterial.onBeforeCompile = (shader) => {
                shader.uniforms.time = time;
                const token_vs = `#include <common>`;
                const vs = `
                #include <common>
                uniform float time;
                uniform float random;
                varying vec3 vPosition;
                `;

                shader.vertexShader = shader.vertexShader.replace(token_vs,vs);

                const token_vs_2 = `vHighPrecisionZW = gl_Position.zw;`;
                const vs_2 = `
                    vHighPrecisionZW = gl_Position.zw;
                    vPosition = position;
                    vPosition.z += vPosition.y*sin(time)*0.05;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
                `
                shader.vertexShader = shader.vertexShader.replace(token_vs_2,vs_2);
            };


            for(let i =0; i<60;i++){
               const grassPlane = new THREE.Mesh(new THREE.PlaneGeometry(),grassMaterial);
                grassPlane.material.side = THREE.DoubleSide;

    
                grassPlane.castShadow = true;
                grassPlane.receiveShadow = true;

                grassPlane.customDepthMaterial = depthMaterial;

                grassPlane.rotation.y = (Math.random()-0.5)*4;
                grassPlane.position.x = (Math.random()-0.5)*2.5;
                grassPlane.position.z = (Math.random()-0.5)*2.5;

                scene.add(grassPlane);
            }




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
    },

    render:function(){
        time.value += 0.01;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(()=>{this.render()});
    },
};



function createScene(){



}