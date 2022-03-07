<script setup lang="ts">
	import { ExclamationCircleIcon } from '@heroicons/vue/solid';
	const props = defineProps({
		label: {
			type: String,
			default: '',
		},
		error: String,
		type: String,
		modelValue: {
			type: [String, Number],
		},
		name: String,
    autocomplete: String,
    id: String,
	});
	const emit = defineEmits(['update:modelValue']);

	const data = useVModel(props, 'modelValue', emit);
</script>
<template>
	<div>
		<label for="password" class="block text-sm font-medium text-gray-700">{{
			label
		}}</label>
		<div class="relative mt-1">
			<input
        :id="id"
				v-model="data"
				:type="type"
        :autocompete="autocomplete"
				class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
			/>
			<div
				v-if="error"
				class="absolute inset-y-0 right-0 pr-3 flex items-center"
			>
				<ExclamationCircleIcon
					class="h-5 w-5 text-red-500"
					aria-hidden="true"
				/>
			</div>
			<div v-else
				class="absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer">
        <slot name="righ-icon">
			  </slot>
      </div>
			
		</div>
    <p
				v-if="error"
				class="mt-2 text-sm text-red-600"
				:id="`input-${name}-error-msg`"
			>
				{{ error }}
			</p>
	</div>
</template>
