<script>
    import { ChevronLeft } from 'lucide-svelte';
    import { onMount } from 'svelte';
	import { Button, Card, LoadingDots, PageTitle } from '~/components';
    import { errorPopup } from '~/lib/swal';
    import { getArticleDetail } from '~/services/article-service';

	/**
	 * variable yang menerima object yang di-return dari fungsi load() pada +page.js
	 * @type {import('./$types').PageData}
	 */
	export let data

	/**
	 * variable yang nantinya menyimpan data detail artikel dari api
	 * @type {Article}
	 */
	let articleDetail

	/** variable yang menentukan apakah loading indikator dimunculkan atau tidak */
	let isFetching = true

	/** fungsi untuk mengambil detail artikel */
	async function fetchArticle () {
		try {
			const res = await getArticleDetail(data.detail_id)
			articleDetail = res.data
		}
		catch (err) {
			errorPopup(err)
		}
		finally {
			isFetching = false
		}
	}

	/** ambil detail artikel ketika component dirender */
	onMount(() => {
		fetchArticle()
	})
</script>

<PageTitle title="Article Detail" />

<Card title="Article Detail" innerClass="grid gap-4 lg:grid-cols-4">
	<Button
		slot="header-action"
		title="Back"
		icon={ChevronLeft}
		href="/crud-example/index"
	/>

	{#if isFetching}
		<LoadingDots label="Loading data" />
	{:else}
		<h6>ID</h6>
		<p class="lg:col-span-3">: {articleDetail.id}</p>

		<h6>Title</h6>
		<p class="lg:col-span-3">: {articleDetail.title}</p>

		<h6>Tags</h6>
		<p class="lg:col-span-3">: {articleDetail.tags.join(', ')}</p>

		<h6>User ID</h6>
		<p class="lg:col-span-3">: {articleDetail.userId}</p>

		<h6>Reactions</h6>
		<p class="lg:col-span-3">: {articleDetail.reactions}</p>

		<h6>Body / Content</h6>
		<p class="lg:col-span-3">: {articleDetail.body}</p>
	{/if}
</Card>