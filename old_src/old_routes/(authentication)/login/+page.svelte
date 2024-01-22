<script>
	import { createForm } from "svelte-forms-lib";
	import * as yup from 'yup';
    import { goto } from "$app/navigation";
    import { loginProcess } from "~/services/auth-service";
    import authStore from "~/stores/auth-store";
    import { Button, TextInput } from "~/components";
    import { errorPopup } from "~/lib/swal";

	let isSubmitting = false

	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			username: '',
			password: ''
		},

		validationSchema: yup.object().shape({
			username: yup.string().required(),
			password: yup.string().required()
		}),

		onSubmit: async values => {
			try {
				isSubmitting = true
				const loginRes = await loginProcess(values)
				const { token, ...user } = loginRes.data

				authStore.setUser(user)
				authStore.setToken(token || '')

				goto('/')
			} catch (err) {
				errorPopup(err)
			} finally {
				isSubmitting = false
			}
		}
	})
</script>

<div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
	<div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
		<div class="flex min-h-[70vh] flex-col overflow-y-auto md:flex-row">
			<div class="h-32 md:h-auto md:w-1/2">
				<img
					aria-hidden="true"
					class="object-cover w-full h-full"
					src="/login-office.jpg"
					alt="Office"
				/>
			</div>

			<div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
				<form on:submit={handleSubmit} class="w-full">
					<h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">
						SIRIUS APP
					</h2>

					<h1 class="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-200">
						Login Form
					</h1>

					<TextInput
						label="Username"
						name="username"
						on:change={handleChange}
						bind:value={$form.username}
						error={$errors.username}
						class="mt-4"
					/>

					<TextInput
						label="Password"
						name="password"
						type="password"
						on:change={handleChange}
						bind:value={$form.password}
						error={$errors.password}
						class="mt-4"
					/>

					<Button
						title="Login"
						loading={isSubmitting}
						class="btn-primary btn-block shadow-md mt-6"
					/>

					<ul class="mt-4">
						<li>username: kminchelle</li>
						<li>password: 0lelplR</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
</div>
