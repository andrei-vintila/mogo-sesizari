import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
	state: () => ({
		sesizari: [
			{
				position: {
					lat: 42.21232,
					lng: 25.21321
				},
				type: 'default',
				
			}
		]
	}),
});
