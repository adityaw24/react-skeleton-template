<script>
    import { fade, fly } from "svelte/transition"
    import { afterNavigate } from "$app/navigation"

	import { clickOutside } from "~/lib/clickOutside.js"
	import SidebarMenu from "./SidebarMenu.svelte"

	/** @type {function(): void} */
	export let closeSideMenu

	afterNavigate(closeSideMenu)
</script>

<div
	transition:fade={{ duration: 200 }}
	class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
/>
<aside
	use:clickOutside
	on:click_outside={closeSideMenu}
	transition:fly={{ duration: 200, x: '-2rem' }}
	class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
>
	<div class="py-4 text-gray-500 dark:text-gray-400">
		<a href="/" class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
			Template
		</a>

		<SidebarMenu />

	</div>
</aside>