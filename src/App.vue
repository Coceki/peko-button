<template>
  <v-app id="app">
    <v-dialog v-model="addtoscreendialog" persistent max-width=600>
      <v-card class="pa-1">
        <v-card-title>{{$t("ui.addtohomescreen")}}</v-card-title>
        <v-card-text>{{$t("ui.addtohomescreeninfo")}}</v-card-text>
        <v-row class="ma-0 pa-0" justify="center" align="center">
        <v-img src="img/icons/android-chrome-192x192.png" max-width="100">
        <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
        </template>
        </v-img>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="addtoscreendialog=false">{{$t("ui.dontneed")}}</v-btn>
          <v-btn color="primary" raised @click="addToHomescreen">{{$t("ui.add")}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Topbar></Topbar>
    <v-content app>
      <v-container fluid class="mt-10">
      <v-fab-transition>
        <v-btn
          class=" "
          v-show="gotop"
          color="primary"
          fab
          dark
          fixed
          bottom
          right
          @click="toTop"
        >
          <v-icon>mdi-arrow-up</v-icon>
          
        </v-btn>
      
      </v-fab-transition>
      <router-view></router-view>
      </v-container>
      </v-content>
        <v-footer style="postition:absolute;bottom:0;" class="py-4" dark height="auto">
          <v-container mx-auto>
            <v-layout wrap>
              <v-flex xs10>
                <v-container>
                  <v-row align="end">
                    {{$t("ui.developer")}}
                    <v-btn icon @click="See('https://github.com/Coceki/peko-button')"><v-icon>mdi-github</v-icon></v-btn>
                  </v-row>
                  <v-row>
                    {{$t("ui.credits")}}
                  </v-row>
                  <v-row>
                    {{$t("ui.translationCredits")}}
                  </v-row>
                  <v-row>
                    <p>{{$t("ui.friendlinks")}}</p>
                    <div class="ma-0 pa-0">
                    <v-btn class="ma-1" v-for="link in links" :key="link.name" depressed :color="link.color" @click="See(link.href)">{{link.name}}</v-btn>
                    </div>
                  </v-row>
                  <v-row>
                    {{$t("ui.developerinfo")}}
                  </v-row>
                </v-container>
              </v-flex>
              <v-spacer />
              <base-btn class="mr-0" square title="Go to top" @click="$vuetify.goTo(0)">
                <v-icon>mdi-chevron-up</v-icon>
              </base-btn>
            </v-layout>
          </v-container>
        </v-footer>
      
    
    
  </v-app>
</template>

<script>
import Topbar from "./components/Topbar.vue"
export default {
  name: 'App',

  components: {
    Topbar,
  },

  data: () => ({
    gotop:false,
    prompt:false,
    deferred:null,
    addtoscreendialog:false,
    links:[
      {
        name:"VTuber按钮合集/vtbBtn",
        href:"https://vtbbtn.org/",
        color:"orange lighten-1"
      },
      {
        name:"夸按钮/あくあボタン",
        href:"https://aquaminato.moe/",
        color:"purple lighten-2"
      },
      {
        name:"狐按钮/フブキボタン",
        href:"https://sfubuki.moe/",
        color:"blue lighten-2"
      },
      {
        name:"祭按钮/まつりボタン",
        href:"https://natsuiromatsuri.moe/",
        color:"orange darken-1"
      },
      {
        name:"狼按钮/ミオボタン",
        href:"https://ookamimio.org/",
        color:"black"
      },
      {
        name:"余按钮/なきりあやめボタン",
        href:"https://nakiriayame.moe/",
        color:"red darken-1"
      },
      {
        name:"狗按钮/ころねボタン",
        href:"https://korone.icu/",
        color:"brown darken-1"
      },
    ],
    //
  }),
  mounted(){
    let timeNow = new Date();
    let hours = timeNow.getHours();
    if (hours<6||hours>18){//自动触发夜间模式
      this.$store.commit("change_dark_mode");
      this.$vuetify.theme.dark = this.$store.state.dark_mode;
      window.console.log("success")
    }
    window.onbeforeinstallprompt = (e) => {     //当浏览器触发横幅显示事件
                window.console.log(e);
                this.prompt = true;
                this.deferred = e;
                //window.console.log(this.prompt);
                this.showAddToHomeScreen();
            }
    window.addEventListener("scroll", this.handleScroll, true);
    if (this.$cookies.isKey("Lang")){
      this.$i18n.locale=this.$cookies.get("Lang");
    
    }
  },
  methods: {
    showAddToHomeScreen(){
        window.console.log("success");
        this.addtoscreendialog=true;

    },
    addToHomescreen(){
        this.deferred.prompt();
        let _this=this
        this.deferred.userChoice
      .then(function (choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          window.console.log('User accepted the A2HS prompt');
          _this.addtoscreendialog=false;
        } else {
          window.console.log('User dismissed the A2HS prompt');
        }
        // 释放不再有用的deferredPrompt对象
      });
      
    },
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    See (e) {
        window.location.href = e
      }
    }
  
};
</script>
