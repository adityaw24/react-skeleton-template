<script>
    import mergeClass from "~/lib/mergeClass";

	/**
	 * @typedef {Object} SelectOption
	 * @property {string} label -- yang akan tampil pada option select
	 * @property {string} value -- value yang akan diproses saat option dipilih
	*/

	/** @type {string} */ export let label = ''
	/** @type {string} */ export let helper = ''
	/** @type {string} */ export let value = ''
	/** @type {string} */ export let error = ''
	/** @type {string} */ export let placeholder = ''
	/** @type {string} */ export let inputClass = ''
	/** @type {SelectOption[]} */ export let options = []

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

	<select
		on:change
		bind:value
		class={mergeClass(
			"select select-bordered w-full",
			inputClass,
			!!error ? "select-error" : ""
		)}
		{...restProps}
	>
		{#if !!placeholder}
			<option value="">{placeholder}</option>
		{/if}
		{#each options as optionItem (optionItem.value)}
			<option value={optionItem.value}>
				{optionItem.label}
			</option>
		{/each}
	</select>

	{#if !!error}
		<div class="label">
			<span class="label-text-alt text-error">
				{error}
			</span>
		</div>
	{/if}
</label>