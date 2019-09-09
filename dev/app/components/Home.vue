<template>
    <Page class="page">

  <GridLayout columns="*" rows="*,80" @touch="onTouch">
<!--    <ParticleEmitter ref="emiter1" row="0" col="0"
      isEmitting="true" 
      showDebug="false"
      emitOriginX="200"
      emitOriginY="0" 
      emitOriginWidth="400"
      emitOriginHeight="1"
      particleDuration="1000"
      emitCount="40" 
      emitInterval="60"  
      emitDistance="320"  
      emitDistanceVariation="50"  
      emitAngle="-90"  
      emitAngleVariation="45" 
      colorPalette="black, gray"/>
      
    <ParticleEmitter ref="emiter2" row="1" col="0"
      isEmitting="true" 
      showDebug="false"
      emitOriginX="200"
      emitOriginY="100" 
      emitOriginWidth="10"
      emitOriginHeight="10"
      particleDuration="2000"
      emitCount="14" 
      emitInterval="60"  
      emitDistance="120"  
      emitDistanceVariation="50"  
      emitAngle="90"  
      emitAngleVariation="360" 
      colorPalette="black"/>-->

    <ParticleEmitter ref="emiter3" row="0" col="0" rowSpan="2"
      isEmitting="true" 
      showDebug="false"
      :emitOriginX="emitOriginX"
      :emitOriginY="emitOriginY" 
      emitOriginWidth="1"
      emitOriginHeight="1"
      particleDuration="3000"
      emitCount="10" 
      emitInterval="50"  
      emitDistance="100"  
      emitDistanceVariation="150"  
      emitAngle="-90"  
      emitAngleVariation="20" 
      colorPalette="#000000,#222222,#555555,#FF0000"/>
           
      <Button row="1" col="0" @tap="shareDemo" :text="shareButtonText"></Button>         
      <Label class="copy" text="Sylwester Technologies © 2019" row="1" col="0"></Label>
      
      
  </GridLayout>
        
    </Page>
</template>

<script>
  
const platformModule = require("tns-core-modules/platform");
  
export default {
      
    data() {
      return {
        touchPoint: null,
        info:"Hello",
        emitOriginX: platformModule.screen.mainScreen.widthDIPs/2,
        emitOriginY: platformModule.screen.mainScreen.heightDIPs/2,
        shareButtonText: "Share"
      }
    },

    mounted() {
      console.log('mounted');
    },
      
    methods: {
      
      onTouch(args) {
        //this.touchPoint = [parseInt(args.getX()), parseInt(args.getY())];
        
        //console.log('(args.action',args.action)
        
        if(args.action == 'move') {
          
          console.log(parseInt(args.getX()),parseInt(args.getY()))
          
          this.emitOriginX = parseInt(args.getX()).toString();
          this.emitOriginY = parseInt(args.getY()).toString();
          
//          let perc = parseInt(args.getY())/H
//          console.log('down',perc)
//          gravity = Number(((2*perc) - 1).toFixed(3));
//          this.grav = ((gravity*100)+100)/2
        }
      },
      
      shareDemo() {
        console.log('share demo');
//        this.demoState = "Stop";
//        let image = this.imgSrc;
//        SocialShare.shareImage(image);
      }      
      
      
    }
      
};
  
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables
  
  .copy {
    font-size: 8;
    color: #888888;
    padding: 0;
    margin-top: 40;
    text-align: center;
  }
  

</style>
