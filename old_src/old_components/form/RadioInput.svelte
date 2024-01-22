<script>
    import mergeClass from "~/lib/mergeClass";

	/**
	 * @typedef {Object} RadioOption
	 * @property {string} label -- yang akan tampil pada input radio
	 * @property {string} value -- value yang akan diproses saat radio dipilih
	*/

	/** @type {string} */ export let name
	/** @type {string} */ export let label = ''
	/** @type {string} */ export let value = ''
	/** @type {string} */ export let error = ''
	/** @type {string} */ export let inputClass = ''
	/** @type {RadioOption[]} */ export let options = []

	const { class: classProps, ...restProps } = $$restProps

	/** @param {RadioOption} option */
	function handleInput (option) {
		value = option.value
	}
</script>

<label class={mergeClass("form-control max-w-full w-full", classProps)}>
	{#if !!label}
		<div class="label">
			<span class="label-text">
				{label}
			</span>
		</div>
	{/if}

	<section class="grid gap-3 mt-2">
		{#each options as optionItem (optionItem.value)}
			<label class="flex items-center gap-3 cursor-pointer">
				<input
					type="radio"
					{name}
					class={mergeClass(
						"radio checked:radio-primary",
						inputClass,
						!!error ? "radio-error" : ""
					)}
					value={optionItem.value}
					checked={value === optionItem.value ? true : undefined}
					on:input={() => handleInput(optionItem)}
					on:change
					{...restProps}
				/>
				<span class="label-text">
					{optionItem.label}
				</span>
			</label>
		{/each}
	</section>

	{#if !!error}
		<div class="label">
			<span class="label-text-alt text-error">
				{error}
			</span>
		</div>
	{/if}
</label>