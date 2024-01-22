// import { onMount } from "svelte";
// import { slide } from "svelte/transition";
// import { page } from "$app/stores";
// import { send, receive } from '~/lib/transition.js'

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import iconConf from "~/lib/iconConf.js";
import adminSidebarMenu from "~/menu/admin-sidebar-menu";

function SidebarMenu () {
	const location = useLocation()
	const [openMenus, setOpenMenus] = useState([])

	/**
	 * @param {SidebarMenuItem} menu
	 */
	function toggleMenu(menu) {
		const isOpened = openMenus.includes(menu.title);
		if (isOpened) {
			setOpenMenus(openMenus.filter((open) => open !== menu.title))
		} else {
			setOpenMenus([...openMenus, menu.title])
		}
	}

	useEffect(() => {
		for (const menu of adminSidebarMenu) {
			if (menu.hasOwnProperty('childrens')) {
				for (const submenu of menu.childrens || []) {
					if (submenu.path === location.pathname) {
						setOpenMenus([...openMenus, menu.title])
					}
				}
			}
		}
	}, [])

	return <>
		<ul className="mt-6">
			{adminSidebarMenu.map(menu => {
				const MenuIcon = menu.icon

				return (
					<li key={menu.title} className="relative px-6 py-3">
						{menu.hasOwnProperty('childrens')
							? <>

								{menu.childrens?.some(submenu => submenu.path === location.pathname)
									? <span
										className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
										aria-hidden="true"
									></span>
								: null }

								<button
									onClick={() => toggleMenu(menu)}
									aria-haspopup="true"
									className={`
										${menu.childrens?.some(submenu => submenu.path === location.pathname) && 'text-gray-800 dark:text-gray-100'}
										inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200
									`}
								>
									<span className="inline-flex items-center">
										<MenuIcon {...iconConf} />
										<span className="ml-4">
											{menu.title}
										</span>
									</span>
									<ChevronDown size={18} strokeWidth={2.5} />
								</button>

								{openMenus.includes(menu.title)
									? <>
										<ul
											aria-label="submenu"
											className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
										>
											{menu?.childrens?.map(submenu => {
												const SubmenuIcon = submenu.icon
												return (
													<li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
														<Link className={`
																${submenu.path === location.pathname && 'text-primary/75'}
																w-full inline-flex items-center
															`}
															to={submenu.path}
														>
															<SubmenuIcon {...iconConf} />
															<span className="ml-4">{submenu.title}</span>
														</Link>
													</li>
												)
											})}
										</ul>
									</>
									: null}
								</>

							: <>
								{menu.path === location.pathname
									? <span
										className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
										aria-hidden="true"
									></span>
								: null}

								<Link className={`
										${menu.path === location.pathname && 'text-gray-800 dark:text-gray-100'}
										inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200
									`}
									to={menu.path}
								>
									<MenuIcon {...iconConf} />
									<span className="ml-4">{menu.title}</span>
								</Link>
							</>
						}
					</li>
				)
			})}
		</ul>
	</>
}

export default SidebarMenu