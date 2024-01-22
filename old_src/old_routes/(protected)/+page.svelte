<script>
	import authStore from "~/stores/auth-store";
	import { Card, PageTitle } from "~/components";
</script>

<PageTitle title="Dashboard" />

<Card title={`Welcome to SvelteKit ` + $authStore.user.username}>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Card>
