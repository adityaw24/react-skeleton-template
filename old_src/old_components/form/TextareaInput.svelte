<script>
    import mergeClass from "~/lib/mergeClass";

	/** @type {string} */ export let label = ''
	/** @type {string} */ export let helper = ''
	/** @type {string} */ export let value = ''
	/** @type {string} */ export let error = ''
	/** @type {string} */ export let inputClass = ''

	const { class: classProps, ...restProps } = $$restProps
</script>

<label class={mergeClass("form-control max-w-full w-full", classProps)}>
	{#if !!label}
		<div class="label">
			<span class="label-text">
				{label}
			</span>
			<span class="label-text-alt">
				{helper}
			</span>
		</div>
	{/if}

	<textarea
		on:change
		bind:value
		class={mergeClass(
			"textarea textarea-bordered w-full",
			inputClass,
			!!error ? "textarea-error" : ""
		)}
		{...restProps}
	/>

	{#if !!error}
		<div class="label">
			<span class="label-text-alt text-error">
				{error}
			</span>
		</div>
	{/if}
</label>