<template>
  <v-container>
    <!-- <v-row>
        <div class="text-center">
            <p>{{$t("ui.mediacontorl")}}</p>
            <v-btn raised @click="stopPlay">{{$t("ui.stopplay")}}</v-btn>
        </div>
    </v-row> -->
    <v-row v-for="group in voices" :key="group">
      <v-col cols="12">
        <v-card>
          <v-card-title>{{group.translation.Chinese}}</v-card-title>
          <v-container>
            <v-row no-gutters>
            
              <v-btn class="ma-2 pa-1" v-for="voice in group.voicelist" :key="voice.name" raised color="secondary" @click="play(voice)">{{voice.translation.Chinese}}</v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import voicelist from "../assets/voices.json";
export default {
  data: () => ({
    voices: voicelist.groups
  }),
  created() {
    window.console.log(this.voices);
  },
  methods: {
    play(item) {
      let audio = new Audio("voices/" + item.path);
      this.voice = item;
      audio.play();
    },
  }
};
</script>

<style>
</style>