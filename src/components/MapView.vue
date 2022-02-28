<script setup lang="ts">
import { MapboxMap } from "vue-mapbox-ts";

const myAccessToken = 'pk.eyJ1IjoiYW5kcmVpdmludGlsYSIsImEiOiJja3p2c3hrbG0xb2lkMndvOXVvdHY2a2ZlIn0.Fiiho8IHd9ctuZrsVNA_og';

</script>
<template>
  <mapbox-map :accessToken="myAccessToken"
    mapStyle="streets-v11"
  />
</template>