<script setup lang="ts">
import TheHeader1 from '@/components/TheHeader.vue';</script>
<template>
	<div class="relative">
	<the-header1 class="fixed top-0 right-0 left-0 z-10"/>

	<main
		class="
			dark:bg-gray-800 dark:text-white
			bg-white
			text-gray-800
			min-h-screen
			z-0
		"
	>
		<router-view />
	</main>
	</div>
</template>
