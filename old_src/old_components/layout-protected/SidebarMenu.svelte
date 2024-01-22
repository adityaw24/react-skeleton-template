<script>
	import { slide } from "svelte/transition";
	import { ChevronDown } from "lucide-svelte";
    import { onMount } from "svelte";
	import { page } from "$app/stores";

	import { send, receive } from '~/lib/transition.js'
    import iconConf from "~/lib/iconConf.js";
	import protectedSidebarMenu from "~/menu/protected-sidebar-menu";

	/** @type {string[]} */
	let openMenus = [];

	/**
	 * @param {SidebarMenuItem} menu
	 * @returns {void}
	*/
	function toggleMenu(menu) {
		const isOpened = openMenus.includes(menu.title);
		if (isOpened) {
			openMenus = openMenus.filter((open) => open !== menu.title);
		} else {
			openMenus = [...openMenus, menu.title];
		}
	}

	onMount(() => {
		for (const menu of protectedSidebarMenu) {
			if (menu.hasOwnProperty('childrens')) {
				for (const submenu of menu.childrens || []) {
					if (submenu.path === $page.url.pathname) {
						openMenus = [...openMenus, menu.title]
					}
				}
			}
		}
	})
</script>

<ul class="mt-6">
	{#each protectedSidebarMenu as menu (menu.title)}
		<li class="relative px-6 py-3">
			{#if menu.hasOwnProperty("childrens")}
				{#if menu.childrens?.some(submenu => submenu.path === $page.url.pathname)}
					<span
						in:receive={{ key: 'active' }}
						out:send={{ key: 'active' }}
						class="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
						aria-hidden="true"
					></span>
				{/if}
				<button
					on:click={() => toggleMenu(menu)}
					aria-haspopup="true"
					class={`
						${menu.childrens?.some(submenu => submenu.path === $page.url.pathname) && 'text-gray-800 dark:text-gray-100'}
						inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200
					`}
				>
					<span class="inline-flex items-center">
						<svelte:component
							this={menu.icon}
							{...iconConf}
						/>
						<span class="ml-4">
							{menu.title}
						</span>
					</span>
					<ChevronDown size={18} strokeWidth={2.5} />
				</button>

				{#if openMenus.includes(menu.title)}
					<ul
						transition:slide={{ duration: 200 }}
						aria-label="submenu"
						class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
					>
						{#each (menu.childrens || []) as submenu (submenu.title)}
							<li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
								<a
									class={`
										${submenu.path === $page.url.pathname && 'text-gray-800 dark:text-gray-100'}
										w-full inline-flex items-center
									`}
									href={submenu.path}
								>
									<svelte:component
										this={submenu.icon}
										{...iconConf}
									/>
									<span class="ml-4">{submenu.title}</span>
								</a>
							</li>
						{/each}
					</ul>
				{/if}

			{:else}
				{#if menu.path === $page.url.pathname}
					<span
						in:receive={{ key: 'active' }}
						out:send={{ key: 'active' }}
						class="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
						aria-hidden="true"
					></span>
				{/if}
				<a
					class={`
						${menu.path === $page.url.pathname && 'text-gray-800 dark:text-gray-100'}
						inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200
					`}
					href={menu.path}
				>
					<svelte:component
						this={menu.icon}
						{...iconConf}
					/>
					<span class="ml-4">{menu.title}</span>
				</a>
			{/if}
		</li>
	{/each}
</ul>
