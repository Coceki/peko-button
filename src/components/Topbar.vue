<template>
  <v-app-bar
        absolute
        dark
        color=primary  
      >
        

        <v-toolbar-title>{{$t("ui.title")}}</v-toolbar-title>

        <v-spacer></v-spacer>
         <v-btn icon @click="See('https://github.com/Coceki/peko-button')"><v-icon>mdi-github-circle</v-icon></v-btn>
        <v-menu transition="slide-y-transition" bottom offset-y>
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
      { title: "日本語(近日公開)", src: "ja",isready:false }
    ],
  }),
  methods:{
    ChangeLang(e){
		this.$i18n.locale=e;
		this.$cookies.set("Lang",e);
    },
    See (e) {
        window.location.href = e
      }
    
  }
}
</script>

<style>

</style>