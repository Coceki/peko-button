<template>
  <v-container class="ma-2">
      <v-row align="center" justify="center">
          <p class="text-center display-1 font-weight-bold">{{$t("ui.pekolanguage")}}</p>
      </v-row>
      <v-row>
          <v-textarea v-model="texts" outlined :label="this.$t('ui.entersomewords')"></v-textarea>
      </v-row>
      <v-row>
          <v-btn raised color="secondary">{{$t("ui.generate")}}</v-btn>
      </v-row>
      
  </v-container>
</template>

<script>
export default {
    data: () => ({
        texts:''
    }),
    methods:{
        
    }
}
</script>

<style>

</style>