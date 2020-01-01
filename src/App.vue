<template>
  <v-app>
    <Topbar></Topbar>
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
};
</script>
