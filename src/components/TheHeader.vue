<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'
import { useAuth } from '@vueuse/firebase/useAuth';
import { getAuth, signOut } from 'firebase/auth';
import defaultAvatar from '@/assets/abstract_avatar.png'

const navigation = [
  { name: 'Harta', to: '/'},
  { name: 'Team', to: '#' },
  { name: 'Projects', to: '#' },
  { name: 'Calendar', to: '#' },
]
const auth = getAuth()
const { isAuthenticated, user } = useAuth(auth)
const route = useRoute()
const loginRoute = ref(useRoute().path.startsWith('/auth/'))
console.log(loginRoute.value)
const handleSignOut = () => {
  signOut(getAuth()).then(() => {
    useRouter().push('/')
  })
}
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="@/assets/civis.svg" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="@/assets/civis_wide.svg" alt="Workflow" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-emerald-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[item.to === route.path ? 'border-emerald-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']"
              :aria-current="item.to === route.path ? 'page' : undefined"
            >{{ item.name }}</router-link>
          </div>
        </div>
        <div v-if="isAuthenticated" class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            type="button"
            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  :src="user?.photoURL ? user.photoURL : defaultAvatar"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    @click="handleSignOut"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div v-else class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="flex-shrink-0 space-x-2">
            <button
              type="button"
              v-if="route.path !== '/auth/login' && !isAuthenticated"
              @click="$router.push('/auth/login')"
              class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <span>Login</span>
            </button>
            <button
              type="button"
              v-if="route.path !== '/auth/register' && !isAuthenticated"
              @click="$router.push('/auth/register')"
              class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <span>Sign up</span>
            </button>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-emerald-50 border-emerald-500 text-emerald-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton
          as="router-link"
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          :class="[item.to === route.path ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']"
          :aria-current="item.to === route.path ? 'page' : undefined"
        >{{ item.name }}</DisclosureButton>
      </div>
      <div v-if="isAuthenticated" class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="user?.photoURL ? user.photoURL : defaultAvatar"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ user?.displayName }}</div>
            <div class="text-sm font-medium text-gray-500">{{ user?.email }}</div>
          </div>
          <button
            type="button"
            class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <DisclosureButton
            as="a"
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >Your Profile</DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >Settings</DisclosureButton>
          <DisclosureButton
            as="a"
            @click="handleSignOut"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >Sign out</DisclosureButton>
        </div>
      </div>
      <div v-else class="pt-4 pb-3 border-t border-gray-200">
        <div class="mt-3 space-y-1">
          <DisclosureButton
          as="a"
          @click="$router.push('/auth/login')"
          class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
        >Login</DisclosureButton>
        <DisclosureButton
          as="a"
          @click="$router.push('/auth/register')"
          class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
        >Sign up</DisclosureButton>
        </div>
        
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
