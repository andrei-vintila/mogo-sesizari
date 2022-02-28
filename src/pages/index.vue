<script setup lang="ts">
	import { useStore } from '@/store';
	import { GoogleMap, Marker } from 'vue3-google-map';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'Mogo Sesizari',
	});
	const myAccessToken = 'AIzaSyArO3WvsVuSRFbHdLoXu5mtBsRHgrt8Gm4';
	const store = useStore();
	const { t } = useI18n();
	const center = {lat: 44.52671881092377, lng:26.00241580162973  }
	
</script>

<template>
	<GoogleMap
  api-key="AIzaSyArO3WvsVuSRFbHdLoXu5mtBsRHgrt8Gm4"
  style="width: 100%; height: 100vh"
  :center="center"
  :zoom="15"
	class="z-0"
	:disable-default-ui="true"
	:map-type-control="false"
  >
	</GoogleMap>

</template>

<route lang="yaml">
name: home
</route>
