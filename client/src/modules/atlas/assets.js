import models from "./models";
import textures from "./textures";

import {GLTFLoader} from 'https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js';

export default{
  textures:{},
  geometries:{},

  load:async function(){
    const that = this;
    async function loadModels(){
      const loader = new GLTFLoader();
      let modelIndex = -1;
      
      return new Promise(res => {
        function load(){ 
          modelIndex++;
          if(modelIndex < models.length){
            const modelData = models[modelIndex];
            const path = './assets/models/' + modelData.folder + modelData.file;
              loader.load(path,(model)=>{
                that.geometries[modelData.name] = model.scene.children[0].geometry;
                load();
              });
          }else{
            res(true);
          };
        }
        load();
      });
    };


    loadModels().then((res)=>{
      console.log(res)
    });
  }

};
