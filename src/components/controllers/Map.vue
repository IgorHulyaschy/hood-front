<template>
  <vue-google-maps
    style="width: 100%; height: 400px"
    :map-config="mapConfig"
    :api-key="apiKey"
  ></vue-google-maps>
</template>

<script>
import VueGoogleMaps from "@point-hub/vue-google-maps";
import env from 'dotenv'
env.config();
export default {
  components: {
    VueGoogleMaps
  },
  data() {
    return {
      apiKey: process.env.GOOGLE_MAP,
      mapConfig: {
        zoom: 8,
        center: {
          lat: 50.5,
          lng: 31
        }
      }
    };
  }
};
</script>

<style lang="scss">
</style>