<script>
	import { Button, Card, PageTitle } from '~/components';
	import ArticleForm from '../_ArticleForm.svelte';
    import { ChevronLeft } from 'lucide-svelte';
</script>

<PageTitle title="Create Article" />

<Card title="Article Form">
	<Button
		slot="header-action"
		title="Back"
		icon={ChevronLeft}
		href="/crud-example/index"
	/>

	<ArticleForm />
</Card>
