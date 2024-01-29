// import { onMount } from "svelte"
// import { get } from "svelte/store"
// import { fade, fly } from "svelte/transition"
// import { goto } from "$app/navigation"
// import authStore from "~/stores/auth-store"
import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

import SidebarModeDesktop from "./_SidebarModeDesktop"
import SidebarModeMobile from "./_SidebarModeMobile"
import Header from "./_Header"
import useAuthStore from "~/stores/auth-store"

function AdminLayout () {
	const isLoggedIn = useAuthStore(state => !!state.token)

	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen)
	const closeSideMenu = () => setIsSideMenuOpen(false)

	return isLoggedIn
		? <>
			<div
				className={`
					${isSideMenuOpen ? 'overflow-hidden' : ''}
					flex h-screen
				`}
				// class:overflow-hidden={isSideMenuOpen}
				// in:fade={{ duration: 200, delay: 250 }}
				// out:fade={{ duration: 200 }}
			>
				<SidebarModeDesktop />

				{isSideMenuOpen
					? <SidebarModeMobile closeSideMenu={closeSideMenu} />
				: null }

				<div className="flex flex-col flex-1">
					<Header toggleSideMenu={toggleSideMenu} />
					<main className="h-full pb-16 overflow-y-auto">
						<div
							// in:fly={{ y: 25, duration: 200, delay: 250 }}
							// out:fly={{ y: 25, duration: 200 }}
							// key={location.pathname}
							className="container px-6 mx-auto"
						>
							<Outlet />
						</div>
					</main>
				</div>
			</div>
		</>

		: <Navigate to="/login" />
}

export default AdminLayout