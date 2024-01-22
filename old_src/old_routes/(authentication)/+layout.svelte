<script>
    import { fade } from "svelte/transition"
</script>

<div
	in:fade={{ duration: 200, delay: 250 }}
	out:fade={{ duration: 200 }}
>
	<slot />
</div>