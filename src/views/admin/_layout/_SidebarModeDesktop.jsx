import SidebarMenu from "./_SidebarMenu"

function SidebarModeDesktop () {
	return <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
		<div className="py-4 text-gray-500 dark:text-gray-400">
			<a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/">
				Template
			</a>
			<SidebarMenu />
		</div>
	</aside>
}

export default SidebarModeDesktop