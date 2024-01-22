<script>
	export let title = ''
</script>

<h2 class="mb-6 mt-10 text-2xl font-semibold text-gray-700 dark:text-gray-200">
	<slot>
		{title}
	</slot>
</h2>

<svelte:head>
	<title>{title} | Sirius App</title>
</svelte:head>
