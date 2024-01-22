<script>
	import { onMount } from "svelte"
    import { get } from "svelte/store"
    import { fade, fly } from "svelte/transition"
    import { goto } from "$app/navigation"

    import authStore from "~/stores/auth-store"
	import SidebarModeDesktop from "~/components/layout-protected/SidebarModeDesktop.svelte"
	import SidebarModeMobile from "~/components/layout-protected/SidebarModeMobile.svelte"
	import Header from "~/components/layout-protected/Header.svelte"

	/** @type {import('./$types').PageData} */
	export let data

	let isSideMenuOpen = false
	const toggleSideMenu = () => (isSideMenuOpen = !isSideMenuOpen)
	const closeSideMenu = () => (isSideMenuOpen = false)

	let loggedIn = false
	$: loggedIn = !!$authStore.token

	onMount(() => {
		const userToken = get(authStore).token
		if (!userToken) goto('/login')
	})
</script>

{#if loggedIn}
	<div
		class="flex h-screen bg-gray-50 dark:bg-gray-900"
		class:overflow-hidden={isSideMenuOpen}
		in:fade={{ duration: 200, delay: 250 }}
		out:fade={{ duration: 200 }}
	>
		<SidebarModeDesktop />

		{#if isSideMenuOpen}
			<SidebarModeMobile {closeSideMenu} />
		{/if}

		<div class="flex flex-col flex-1">
			<Header {toggleSideMenu} />
			<main class="h-full pb-16 overflow-y-auto">
				{#key data.pathname}
					<div
						in:fly={{ y: 25, duration: 200, delay: 250 }}
						out:fly={{ y: 25, duration: 200 }}
						class="container px-6 mx-auto"
					>
						<slot />
					</div>
				{/key}
			</main>
		</div>
	</div>
{/if}
