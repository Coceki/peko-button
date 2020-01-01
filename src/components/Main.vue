<template>
  <v-container>
      <v-row v-for="group in voices" :key="group">
          <v-col cols=12>
          <v-card>
              <v-card-title>{{group.translation.Chinese}}</v-card-title>
              <v-container>
                  <v-col v-for="voice in group.voicelist" :key="voice.name">
                      <v-btn raised color=secondary @click="play(voice)">{{voice.translation.Chinese}}</v-btn>
                  </v-col>
              </v-container>
          </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import voicelist from "../assets/voices.json"
export default {
    data:()=>({
        voices:voicelist.groups,

    }),
    created(){
        window.console.log(this.voices);
    },
    methods:{
        play(item){
            let audio = new Audio("voices/" + item.path);
            this.voice = item;
            audio.play()
    },
    stopPlay(){
        let player = document.getElementById('player');
        player.pause();
        this.voiceEnd();
    }
    }
}
</script>

<style>

</style>