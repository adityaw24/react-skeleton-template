<script>
	import { ChevronLeft } from 'lucide-svelte';
	import { Button, Card, PageTitle, LoadingDots } from '~/components';
	import ArticleForm from '../../_ArticleForm.svelte';
    import { onMount } from 'svelte';
    import { getArticleDetail } from '~/services/article-service';
    import { errorPopup } from '~/lib/swal';

	/**
	 * variable yang menerima object yang di-return dari fungsi load() pada +page.js
	 * @type {import('./$types').PageData}
	 */
	export let data

	/** @type {ArticleFormObject} */
	let formInitialValues

	let isFetching = true

	// function to pre-populate article form with edited article
	async function fetchArticle () {
		try {
			// getting article detail
			const res = await getArticleDetail(data.edit_id)

			// mapping article to match with article form format
			formInitialValues = {
				...res.data,
				tags: res.data.tags.join(', '),
				reactions: res.data.reactions.toString()
			}

		} catch (err) {
			errorPopup(err)
		} finally {
			isFetching = false
		}
	}

	onMount(() => {
		fetchArticle()
	})
</script>

<PageTitle title="Edit Article" />

<Card title="Article Form">
	<Button
		slot="header-action"
		title="Back"
		icon={ChevronLeft}
		href="/crud-example/index"
	/>

	{#if isFetching}
		<LoadingDots label="Loading data" />
	{:else}
		<ArticleForm
			formInitialValues={formInitialValues}
			editedId={data.edit_id}
		/>
	{/if}
</Card>
