<script>
    import mergeClass from "~/lib/mergeClass"

	/** @type {string} */ export let title = ''
	/** @type {string} */ export let innerClass = ''
</script>

<div class={mergeClass("card bg-base-100 shadow-xl", $$restProps.class)}>
	<slot name="figure" />
	<div class="card-body gap-3">
		{#if !!title || $$slots["header-action"]}
			<section class="flex items-center justify-between">
				{#if !!title}
					<h2 class="card-title">
						{title}
					</h2>
				{/if}

				<slot name="header-action" />
			</section>

			<hr class="mt-1 mb-4 dark:border-gray-600">
		{/if}

		<section class={innerClass}>
			<slot />
		</section>

		{#if $$slots['footer-action']}
			<section class="card-actions">
				<slot name="footer-action" />
			</section>
		{/if}
	</div>
</div>