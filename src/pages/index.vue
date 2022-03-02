<script setup lang="ts">
	import { useStore } from '@/store';
	useHead({
		title: 'Mogo Sesizari',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
</template>

<route lang="yaml">
name: home
</route>
