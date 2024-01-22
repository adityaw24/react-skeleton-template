<script>
	// @ts-nocheck
    import mergeClass from "~/lib/mergeClass";
	import iconConf from "~/lib/iconConf";

	/** @type {boolean} */ export let loading = false
	/** @type {boolean} */ export let disabled = false
	/** @type {string} */ export let title = ''

	/** @type {any} -- icon dari lucide icon */
	export let icon = null

	const { class: classProps, ...restProps } = $$restProps
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={restProps.href ? 'a' : 'button'}
	disabled={disabled || loading ? true : undefined}
	class={mergeClass("btn", classProps)}
	{...restProps}
	on:click
>
	{#if loading}
		<span class="loading loading-spinner"></span>
	{:else if !!icon}
		<svelte:component this={icon} {...iconConf} />
	{/if}

	{#if !!title}
		{title}
	{/if}
</svelte:element>