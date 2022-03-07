<script setup lang="ts">
	import { useStore } from '@/store';
	import IconGoogle from '~icons/mdi/google';
	import IconFacebook from '~icons/mdi/facebook';
	import IconApple from '~icons/mdi/apple';
	import IconPasswordEye from '~icons/mdi/eye';
	import IconPasswordEyeCrossed from '~icons/mdi/eye-off';
	import { ExclamationCircleIcon } from '@heroicons/vue/solid';
	import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	useHead({
		title: 'Mogo Sesizari - Login',
	});
	const store = useStore();
	const { t } = useI18n();
	const email = ref('');
	const password = ref('');
	const router = useRouter();
	const register = () => {
		createUserWithEmailAndPassword(getAuth(), email.value, password.value)
			.then(data => {
				console.log('Succesfully registered');
				router.push('/');
			})
			.catch(error => {
				console.log(error.code);
        switch (error.code) {
          case "auth/email-already-exists":
          formError.value.email = t('register.account-with-email-already-exists')
          break
        } 
			});
	};
  const signInWithGoogle = () => {
    signInWithPopup(getAuth(), new GoogleAuthProvider())
      .then((result) => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code)
      })
  }
	const formError = ref({
		email: '',
    password: ''
	});
	const [showPassword, togglePassword] = useToggle(false)
</script>
<template>
	<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<h2 class="text-center text-3xl font-extrabold text-gray-900">
				{{ t('register.lets-create-an-account') }}
			</h2>
		</div>

		<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
				<form class="space-y-6" @submit.prevent="register">
          <BaseInput
            :label="t('register.email-address')"
            v-model="email"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            :error="formError.email"
            required
          >
          </BaseInput>
					<BaseInput
            :label="t('register.password')"
            id="new-password"
						name="password"
						:type="showPassword ? 'text' : 'password'"
						autocomplete="new-password"
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
					<div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
						>
							{{ t('register.create-account') }}
						</button>
					</div>
				</form>

				<div class="mt-6">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-sm">
							<span class="px-2 bg-white text-gray-500">{{
								t('register.or-continue-with')
							}}</span>
						</div>
					</div>

					<div class="mt-6 grid grid-cols-3 gap-3">
						<div>
							<a
								href="#"
								class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							>
								<span class="sr-only">Sign in with Facebook</span>
								<IconFacebook class="w-5 h-5" />
							</a>
						</div>

						<div>
							<a
								href="#"
								class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							>
								<span class="sr-only">Sign in with Apple</span>
								<IconApple class="w-5 h-5" />
							</a>
						</div>

						<div>
							<a
								@click="signInWithGoogle"
								class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							>
								<span class="sr-only">Sign in with Google</span>
								<IconGoogle class="w-5 h-5" />
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
