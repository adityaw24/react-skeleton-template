// import { createForm } from "svelte-forms-lib";
// import { goto } from "$app/navigation";
// import authStore from "~/stores/auth-store";

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"

import { Button, TextInput } from "~/components"
import { loginProcess } from "~/services/auth-service"
import { errorPopup } from "~/lib/swal"
import useAuthStore from '~/stores/auth-store';
import { useNavigate } from 'react-router-dom';


function Login() {
	const navigate = useNavigate()
	const setUser = useAuthStore(state => state.setUser)
	const setToken = useAuthStore(state => state.setToken)

	const [isSubmitting, setIsSubmitting] = useState(false)

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(
			yup.object().shape({
				username: yup.string().required(),
				password: yup.string().required()
			})
		)
	})

	const onSubmit = async (values) => {
		try {
			setIsSubmitting(true)
			const { token, ...user } = await loginProcess(values)

			setUser(user)
			setToken(token || '')

			navigate('/')
		}
		catch (err) {
			if (err?.response?.data?.message) errorPopup(err?.response?.data?.message)
			else errorPopup('Something went wrong!')
			console.log(err)
		}
		finally {
			setIsSubmitting(false)
		}
	}

	return <>
		<div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
			<div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
				<div className="flex min-h-[70vh] flex-col overflow-y-auto md:flex-row">
					<div className="h-32 md:h-auto md:w-1/2">
						<img
							aria-hidden="true"
							className="object-cover w-full h-full"
							src="/login-office.jpg"
							alt="Office"
						/>
					</div>

					<div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
						<form onSubmit={handleSubmit(onSubmit)} className="w-full">
							<h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
								TEMPLATE APP
							</h2>

							<h1 className="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-200">
								Login Form
							</h1>

							<TextInput
								{...register('username')}
								error={errors.username?.message}
								label="Username"
								className="mt-4"
							/>

							<TextInput
								{...register('password')}
								error={errors.password?.message}
								label="Password"
								type="password"
								className="mt-4"
							/>

							<Button
								title="Login"
								loading={isSubmitting}
								className="btn-primary btn-block shadow-md mt-6"
							/>

							<ul className="mt-4">
								<li>username: kminchelle</li>
								<li>password: 0lelplR</li>
							</ul>
						</form>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Login