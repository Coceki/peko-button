<template>
  <v-app id="app">
    <Topbar></Topbar>
    <v-content app>
      <v-container fluid class="mt-10">
      <v-fab-transition>
        <v-btn
          class="mb-5 mr-5"
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
                    作者：Coceki
                    <v-btn icon @click="See('https://github.com/Coceki/peko-button')"><v-icon>mdi-github-circle</v-icon></v-btn>
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
    //
  }),
  methods: {
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
