<script setup>
import { CalendarIcon, LocationMarkerIcon, TagIcon } from '@heroicons/vue/solid'
import { useStore } from '@/store'
const sesizari = [
  {
    id: 1,
    title: 'Groapa pe Strada Tudor Arghezi',
    status: 'In evaluare',
    location: {lat:'45.1', lng:'25.1'},
    category: 'Rutier',
    creationDate: '2022-01-07',
    creationDateFull: 'January 7, 2022',
  },
  {
    id: 2,
    title: 'Presiune mica apa pe Strada Tudor Arghezi',
    status: 'In evaluare',
    location: {lat:'45.1', lng:'25.1'},
    category: 'Apa si Canal',
    creationDate: '2022-01-07',
    creationDateFull: 'January 7, 2022',
  },
  {
    id: 3,
    title: 'Groapa pe Strada Tudor Arghezi',
    status: 'In evaluare',
    location: {lat:'45.1', lng:'25.1'},
    category: 'Rutier',
    creationDate: '2022-01-07',
    creationDateFull: 'January 7, 2022',
  },
]
</script>
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="seziare in sesizari" :key="seziare.id">
        <a href="#" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-emerald-600 truncate">
                {{ seziare.title }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ seziare.status }}
                </p>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <p class="flex items-center text-sm text-gray-500">
                  <TagIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ seziare.category }}
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <LocationMarkerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ seziare.location }}
                </p>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <p>
                  Closing on
                  {{ ' ' }}
                  <time :datetime="seziare.creationDate">{{ seziare.creationDateFull }}</time>
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

