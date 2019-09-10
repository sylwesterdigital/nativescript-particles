<template>
    <Page class="page">


  <GridLayout columns="*" rows="80,*,80" @touch="onTouch">
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

    <ParticleEmitter ref="emiter3" row="1" col="0" rowSpan="2"
      :isEmitting="isEmitting" 
      showDebug="false"
      :emitOriginX="emitOriginX"
      :emitOriginY="emitOriginY" 
      emitOriginWidth="10"
      emitOriginHeight="10"
      particleDuration="5000"
      emitCount="150" 
      emitInterval="60"  
      emitDistance="400"  
      emitDistanceVariation="150"  
      emitAngle="-90"  
      emitAngleVariation="360" 
      colorPalette="black"/>
           
      <Button row="2" col="0" @tap="shareDemo" :text="shareButtonText"></Button>         
      <Label class="copy" text="Sylwester Technologies © 2019" row="2" col="0"></Label>
      
      <GridLayout columns="*,*" rows="*,*" row="0" col="0">
        <Switch checked="true" row="0" col="0" @checkedChange="switchChange" />
        <Label :text="'isEmitting: '+isEmitting" row="0" col="1"/>
      </GridLayout>
      
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
        shareButtonText: "Share",
        isEmitting: true
      }
    },

    mounted() {
      console.log('mounted');
    },
      
    methods: {
      
      switchChange() {
        
        console.log('switch change');
        if(this.isEmitting == false) {
          this.isEmitting = true;
        } else {
          this.isEmitting = false;
        }
        
      },
      
      onTouch(args) {
        //this.touchPoint = [parseInt(args.getX()), parseInt(args.getY())];
        
        //console.log('(args.action',args.action)
        
        if(args.action == 'move') {
          
          //console.log(parseInt(args.getX()),parseInt(args.getY()))
          
          this.emitOriginX = parseInt(args.getX()).toString();
          this.emitOriginY = parseInt(args.getY()).toString();
          

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
