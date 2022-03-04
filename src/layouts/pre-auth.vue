<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';</script>
<template>
	<the-header class="sticky top-0 right-0 left-0"/>
	<main
		class="
			dark:bg-gray-800 dark:text-white
			bg-white
			text-gray-800
		"
	>
		<router-view />
	</main>
</template>
