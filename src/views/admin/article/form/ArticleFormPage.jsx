import { useEffect, useState } from "react"
import * as yup from 'yup'
import { ChevronLeft } from "lucide-react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"

import useAuthStore from "~/stores/auth-store"
import { createArticle, getArticleDetail, updateArticle } from "~/services/article-service"
import { Button, Card, LoadingDots, PageTitle, TextInput, TextareaInput } from "~/components"
import { errorPopup } from "~/lib/popup"

function ArticleFormPage () {
	const { editedId } = useParams()
	const isEditing = !!editedId

	// logic for form ==========================================
	const [isSubmitting, setIsSubmitting] = useState(false)
	const authUserId = useAuthStore(state => state.user.id)
	const navigate = useNavigate()

	const { register, handleSubmit, setValue, formState: { errors } } = useForm({
		resolver: yupResolver(yup.object().shape({
			title: yup.string().required(),
			body: yup.string().required(),
			tags: yup.string().required(),
			reactions: yup.number().required(),
		}))
	})

	const onSubmit = async (formData) => {
		const payload = {
			...formData,
			tags: formData.tags.split(','),
			userId: authUserId
		}

		try {
			setIsSubmitting(true)

			if (isEditing) await updateArticle(payload, editedId)
			else await createArticle(payload)

			toast.success(`Record successfully ${isEditing ? 'updated' : 'created'}!`)
			navigate('/article/list')
		} catch (error) {
			errorPopup(error)
		} finally {
			setIsSubmitting(false)
		}
	}


	// logic for edit mode ==============================
	const [isFetching, setIsFetching] = useState(false)

	const fetchEditedData = async () => {
		try {
			setIsFetching(true)
			const fetchedData = await getArticleDetail(editedId)
			setValue('title', fetchedData.title)
			setValue('body', fetchedData.body)
			setValue('tags', fetchedData.tags.join(', '))
			setValue('reactions', Number(fetchedData.reactions))
		} catch (err) {
			errorPopup(err)
		} finally {
			setIsFetching(false)
		}
	}

	useEffect(() => {
		if (isEditing) fetchEditedData()
	}, [])


	return <>
		<PageTitle title={isEditing ? "Edit Article" : "Create Article"} />
		<Card>
			<Card.Header>
				<Card.Title title="Article Form" />

				<LoadingDots
					label="Please wait..."
					isLoading={isFetching}
				/>

				<Button
					title="Back"
					Icon={ChevronLeft}
					to="/article/list"
				/>
			</Card.Header>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid gap-6 w-[700px] max-w-full"
			>
				<TextInput
					{...register('title')}
					error={errors.title?.message}
					label="Article Title"
				/>
				<TextareaInput
					{...register('body')}
					error={errors.body?.message}
					label="Content"
					rows={4}
				/>
				<TextInput
					{...register('tags')}
					error={errors.tags?.message}
					label="Tags"
					helper="Separate tags with comma ( , )"
				/>
				<TextInput
					{...register('reactions')}
					error={errors.reactions?.message}
					label="Reactions"
					type="number"
				/>
				<Button
					title="Submit"
					loading={isSubmitting || isFetching}
					className="btn-primary btn-wide mt-4"
				/>
			</form>
		</Card>
	</>
}

export default ArticleFormPage