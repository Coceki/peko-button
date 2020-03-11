<template>
  <v-app-bar
        :collapse-on-scroll="$vuetify.breakpoint.smAndDown"
        fixed
        dark
        color=primary  
        :elevate-on-scroll="$vuetify.breakpoint.mdAndUp"
      >
      <v-menu  transition="slide-y-transition" bottom offset-y>
        <template v-slot:activator="{on:menu}">
      <v-app-bar-nav-icon v-on="menu" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
      </template>
      <v-list>
          <v-list-item @click="See('https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ')">
            <v-list-item-title>
              <v-icon left color="red">mdi-youtube</v-icon>Pekora Ch. 兎田ぺこら
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="See('https://twitter.com/usadapekora')">
            <v-list-item-title>
              <v-icon left color="blue">mdi-twitter</v-icon>@usadapekora
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="See('https://github.com/Coceki/peko-button')">
            <v-list-item-title>
              <v-icon left color="black">mdi-github</v-icon>{{$t("ui.helpdevelope")}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
        <v-toolbar-title>{{$t("ui.title")}}</v-toolbar-title>
          <v-btn v-if="$vuetify.breakpoint.mdAndUp" class="ml-4 text-capitalize" color="red" @click="See('https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ')"><v-icon left>mdi-youtube</v-icon>Pekora Ch. 兎田ぺこら</v-btn>
          <v-btn v-if="$vuetify.breakpoint.mdAndUp" class="ml-4 text-lowercase" color="blue" @click="See('https://twitter.com/usadapekora')"><v-icon left>mdi-twitter</v-icon>@usadapekora</v-btn>
        <v-spacer></v-spacer>
         <v-btn  v-if="$vuetify.breakpoint.mdAndUp" @click="See('https://github.com/Coceki/peko-button')"><v-icon left>mdi-github</v-icon>{{$t("ui.helpdevelope")}}</v-btn>
        <v-fab-transition>
            <v-btn v-on="on" fab icon @click="DarkMode()" >
              <v-icon>{{darkmodeicon}}</v-icon>
            </v-btn>
          </v-fab-transition>
        <v-menu  transition="slide-y-transition" bottom offset-y>
        <template v-slot:activator="{on:menu}">
              <v-fab-transition>
                <v-btn v-on="menu" fab icon>
                  <v-icon>mdi-earth</v-icon>
                </v-btn>
              </v-fab-transition>
        </template>
        <v-list>
          <v-list-item v-for="(lang, i) in langs" :key="i" :disabled="!lang.isready" @click="ChangeLang(lang.src)">
            <v-list-item-title>{{ lang.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
      </v-app-bar>
</template>

<script>
export default {
  data:()=>({
    langs: [
      { title: "简体中文", src: "zhHans",isready:true},
      { title: "English(Coming Soon)", src: "en",isready:false },
      { title: "日本語(ベータ版)", src: "ja",isready:true }
    ],
  }),
  methods:{
    ChangeLang(e){
		this.$i18n.locale=e;
		this.$cookies.set("Lang",e);
    },
    DarkMode(){
      this.$store.commit("change_dark_mode");
      this.$vuetify.theme.dark = this.$store.state.dark_mode;
    },
    See (e) {
        window.location.href = e
      }
  },
  computed: {
    darkmodeicon: {
      get: function() {
        return this.$store.state.dark_icon;
      },
      
      },
    }
}
</script>

<style>

</style>