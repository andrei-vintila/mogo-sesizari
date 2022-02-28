<script setup lang="ts">
	defineEmits(['toggleSidebar']);

	const { availableLocales } = useI18n();

	const preferedDark = usePreferredDark();
	const isDark = useStorage('isDark', preferedDark.value);
	const body = ref<HTMLBodyElement | null>(null);

	const toggleDarkMode = () => {
		if (body.value) {
			if (isDark.value) {
				body.value.classList.remove('dark');
			} else {
				body.value.classList.add('dark');
			}
		}
		isDark.value = !isDark.value;
	};

	onMounted(async () => {
		await nextTick();

		body.value = document.querySelector('body') as HTMLBodyElement;
		if (body.value) {
			if (isDark.value) body.value.classList.add('dark');
		}
	});
</script>

<template>
	<footer>
		<nav
			class="
				w-full
				bg-transparent
				text-gray-800
				dark:bg-gray-800 dark:text-white
				py-4
				px-8
				shadow-md
				dark:shadow-md
				flex
				items-center
				border-b border-gray-400/50
				fixed top-0 left-0 right-0
				z-10
			"
		>
			<div class="ml-auto flex items-center h-full">
				<!-- <select
					id="language"
					v-model="$i18n.locale"
					class="py-1 focus:outline-none rounded dark:text-gray-800"
				>
					<option
						v-for="locale in availableLocales"
						:key="locale"
						:value="locale"
					>
						{{ locale }}
					</option>
				</select> -->
				<button
					class="mx-5 cursor-pointer focus:outline-none"
					@click="toggleDarkMode"
				>
					<icon:bx:bx-moon class="w-6 h-6" v-if="!isDark" />
					<icon:bx:bxs-moon class="w-6 h-6" v-else />
				</button>
			</div>
		</nav>
	</footer>
</template>

<style scoped></style>
