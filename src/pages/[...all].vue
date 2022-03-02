<script setup lang="ts">
	useHead({
		title: '404. Not Found',
	});
	const { t } = useI18n();
</script>

<template>
  <div class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
		<p class="text-sm font-semibold text-emerald-600 uppercase tracking-wide">{{ t('404.404-error') }}</p>
    <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{{ t('404.uh-oh-i-think-youre-lost') }}</h1>
    <p class="mt-2 text-base text-gray-500">{{ t('404.it-looks-like-the-page-youre-looking-for-doesnt-exist') }}</p>
    <div class="mt-6">
			<router-link to="/" class="text-base font-medium text-emerald-600 hover:text-emerald-500">{{t('link.go_back_home')}}</router-link>
    </div>
  </div>
	<div class="flex-shrink-0 my-auto py-16 sm:py-32"></div>
</template>

<route lang="yaml">
name : not-found
meta:
    layout: 404
</route>
