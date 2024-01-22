<script>
	import SidebarMenu from "./SidebarMenu.svelte"
</script>

<aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
	<div class="py-4 text-gray-500 dark:text-gray-400">
		<a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/">
			Template
		</a>
		<SidebarMenu />
	</div>
</aside>