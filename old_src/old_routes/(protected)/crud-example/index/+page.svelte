<script>
	import { Plus } from "lucide-svelte";
	import { Button, Card, PageTitle } from "~/components";
	import ArticleTable from "./_ArticleTable.svelte";
</script>

<PageTitle title="Datatable Serverside Example" />

<Card title="Article List">
	<Button
		slot="header-action"
		title="Create Article"
		icon={Plus}
		class="btn-primary"
		href="/crud-example/create"
	/>

	<ArticleTable />
</Card>
