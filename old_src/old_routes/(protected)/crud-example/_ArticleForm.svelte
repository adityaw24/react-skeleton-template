<script>
    import { goto } from "$app/navigation";
	import { createForm } from "svelte-forms-lib"
	import * as yup from 'yup'
	import { Button, TextInput, TextareaInput } from "~/components"
    import { errorPopup } from "~/lib/swal";
    import { createArticle, updateArticle } from "~/services/article-service";
    import authStore from "~/stores/auth-store";

	/** @type {ArticleFormObject} */
	export let formInitialValues = {
		title: '',
		body: '',
		tags: '',
		reactions: ''
	}

	/**
	 * ketika mengedit artikel, variable ini terisi dengan ID artikel yang diedit
	 * @type {string|number}
	 */
	export let editedId

	let isSubmitting = false

	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: formInitialValues,

		validationSchema: yup.object().shape({
			title: yup.string().required(),
			body: yup.string().required(),
			tags: yup.string().required(),
			reactions: yup.number().required()
		}),

		async onSubmit (formData) {
			const payload = {
				...formData,
				tags: formData.tags.split(','),
				userId: $authStore.user.id
			}

			try {
				isSubmitting = true

				if (!!editedId) await updateArticle(payload, editedId)
				else await createArticle(payload)

				goto('/crud-example/index')
			}
			catch (error) {
				errorPopup(error)
			}
			finally {
				isSubmitting = false
			}
		}
	})
</script>

<form
	class="grid gap-6 w-[700px] max-w-full"
	on:submit={handleSubmit}
>
	<TextInput
		label="Article Title"
		name="title"
		bind:value={$form.title}
		error={$errors.title}
		on:change={handleChange}
	/>
	<TextareaInput
		label="Content"
		rows="4"
		name="body"
		bind:value={$form.body}
		error={$errors.body}
		on:change={handleChange}
	/>
	<TextInput
		label="Tags"
		helper="Separate tags with comma ( , )"
		name="tags"
		bind:value={$form.tags}
		error={$errors.tags}
		on:change={handleChange}
	/>
	<TextInput
		label="Reactions"
		type="number"
		name="reactions"
		bind:value={$form.reactions}
		error={$errors.reactions}
		on:change={handleChange}
	/>
	<Button
		title="Submit"
		class="btn-primary btn-wide mt-4"
		loading={isSubmitting}
	/>
</form>