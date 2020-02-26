<template>
  <v-container>
    <v-fab-transition>
      
      <v-btn
        class="mb-11"
        v-show="orderplaymode"
        color="primary"
        dark
        fixed
        bottom
        right
        fab
        @click="orderdialog=true"
      >
      <v-badge
          color="red"
          content="6"
        >
        <v-icon>mdi-reorder-horizontal</v-icon>
      </v-badge>
      </v-btn>
      
    </v-fab-transition>
    
    <!---标题--->
    <v-row class="mt-5" align="center" justify="center">
      <div class="text-center display-1 font-weight-bold">{{$t("ui.title")}}</div>
    </v-row>
    <v-row align="center" justify="center">
      <v-switch v-model="orderplaymode" inset color="secondary" :label="$t('ui.openorderplaymode')"></v-switch>
    </v-row>
    <!---帮助文本--->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <p class="headline font-weight-blod">
            <v-icon large color="primary">mdi-help-circle</v-icon>
            {{$t("ui.helptitle")}}
          </p>
          <p>{{$t("ui.helpcontent")}}</p>
          <p>{{$t("ui.additionalhelp")}}</p>
        </v-card>
      </v-col>
    </v-row>
    <!---展示按钮--->
    <v-row v-for="group in voices" :key="group">
      <v-col cols="12">
        <v-card>
          <v-card-title>{{group.translation.Chinese}}</v-card-title>
          <v-container>
            <v-row no-gutters>
              <v-btn
                class="ma-2 pa-1"
                v-for="voice in group.voicelist"
                :key="voice.name"
                raised
                color="secondary"
                @click="play(voice)"
              >{{voice.translation.Chinese}}</v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <!--序列播放-->
    <v-dialog v-model="orderdialog" persistent max-width=800>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="orderdialog = false,stopplay()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{$t("ui.orderplaymode")}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="pa-5">
        <p class="title font-weight-blod">{{$t("ui.orderlistnow")}}</p>
        <v-chip v-for="(selected,index) in orderlist" :key="selected" class="ma-2" close color="secondary" text-color="white" @click:close="deletelist(index)" @click="playOnly(selected)">{{selected.translation.Chinese}}</v-chip>
        <v-card-actions v-if="orderlist.length>0">
          <v-btn raised color="primary" @click="orderplay">{{$t("ui.playthislist")}}</v-btn>
          <v-btn text color="secondary" @click="stopplay">{{$t("ui.stopplay")}}</v-btn>
          <v-divider></v-divider>
          <v-switch v-model="repeatmode" inset color="secondary" :label="$t('ui.repeatmode')"></v-switch>
          <v-divider></v-divider>
          <v-btn text color="red" @click="resetorder">{{$t("ui.resetorder")}}</v-btn>
        </v-card-actions> 
        <p v-else>{{$t("ui.listempty")}}</p>     
      </v-card>
    </v-dialog>
    <!--序列播放说明-->
    <v-dialog v-model="helpdialog" persistent max-width=600>
      <v-toolbar dark color="primary">
        <v-toolbar-title>{{$t("ui.orderplaymodehelp")}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="pa-5">
        <p class="title">打开序列播放，点出你想要的片段（可以重复）</p>
        <img src="1.png" width=300>
        <p class="title">然后点击右下角的圆形按钮</p>
        <img src="2.png" width=300>
        <p class="title">在这里，你就可以让机器自动按顺序播放这些片段，形成一句话了peko</p>
        <img src="3.png" width=300>
      </v-card>
        <v-btn raised color="primary" @click="helpdialog=false">明白了</v-btn>
    </v-dialog>
  </v-container>
</template>

<script>
import voicelist from "../assets/voices.json";
var audio = new Audio(); 
var i = 0;
export default {
  data: () => ({
    voices: voicelist.groups,
    orderplaymode: false,
    orderdialog: false,
    orderlist:[],
    helpdialog:false,
    repeatmode:false,
  }),
  created() {
    window.console.log(this.voices); //装载语音包path
  },
  methods: {
    play(item) {
      if (this.orderplaymode) {
        //判断序列播放
        this.orderlist.push(item);
        window.console.log(this.orderlist);
      }
      let audio = new Audio("voices/" + item.path);
      this.voice = item;
      audio.play();
    },
    playOnly(item){
      let audio = new Audio("voices/" + item.path);
      this.voice = item;
      audio.play();
    },
    deletelist(i){//删除序列中的一个值
      this.orderlist.splice(i,1);
    },
    orderplay(){
      
      i=0;
      audio = new Audio();
      let arry = this.orderlist;
      let repeat = this.repeatmode;
      audio.preload = true;
      audio.loop = false;
      audio.src = "voices/"+arry[i].path;
      audio.play();
      audio.addEventListener('ended', playEndedHandler, false); 
      function playEndedHandler(){//序列播放实现
        i++;   
        if(i < arry.length){
          audio.src = "voices/"+arry[i].path;
          window.console.log(i);
          audio.play();
          
        }else{
          if(repeat==true){//不要停不下来啊
            i=0;
            audio.src = "voices/"+arry[i].path;
            audio.play();
          }
        }
      }
    },
    resetorder(){
      this.orderlist=[];
    },
    stopplay(){
      audio.pause();
      i=0;
    }
  },
  watch:{
    orderplaymode:function(){
       if(this.orderplaymode){
         this.helpdialog=true;
       }
    }
  }
};
</script>

<style>
</style>