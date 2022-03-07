<script setup lang="ts">
	import { useStore } from '@/store';
  import IconGoogle from '~icons/mdi/google'
  import IconFacebook from '~icons/mdi/facebook'
  import IconApple from '~icons/mdi/apple'
  import IconPasswordEye from '~icons/mdi/eye';
	import IconPasswordEyeCrossed from '~icons/mdi/eye-off';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
	useHead({
		title: 'Mogo Sesizari - Login',
	});
  const store = useStore();
	const { t } = useI18n();
  const email = ref("");
  const password = ref("");
  const router = useRouter();

  const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Sucesfully logged in")
      router.push('/')
    })
  }
  const [showPassword, togglePassword] = useToggle(false)
  const formError = ref({});
</script>
<template>
   <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ t('login.sign-in-to-your-account') }}</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="signIn">
          <BaseInput
            :label="t('login.email-address')"
            id="email"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            :error="formError.email"
            required
          >
          </BaseInput>
					<BaseInput
            :label="t('login.password')"
            id="current-password"
						name="password"
						:type="showPassword ? 'text' : 'password'"
						autocomplete="current-password"
						:error="formError.password"
						required
            v-model="password"
					>
						<template #righ-icon >
							<div @click="togglePassword()">
              <IconPasswordEye
								class="h-5 w-5 text-gray-500"
								aria-hidden="true"
                v-if="!showPassword"
							/>
							<IconPasswordEyeCrossed
								class="h-5 w-5 text-gray-500"
								aria-hidden="true"
                v-else
							/>
              </div>
						</template>
					</BaseInput>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">{{ t('login.remember-me') }}</label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-emerald-600 hover:text-emerald-500">{{ t('login.forgot-password')}}</a>
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">{{ t('login.sign-in')}}</button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500"> {{ t('login.or-continue-with')}}</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Sign in with Facebook</span>
                <IconFacebook class="w-5 h-5"/>
              </a>
            </div>

            <div>
              <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Sign in with Apple</span>
                <IconApple class="w-5 h-5"/>
              </a>
            </div>

            <div>
              <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Sign in with Google</span>
                <IconGoogle class="w-5 h-5"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: pre-auth
</route>