import { Home, BookOpen, List, FilePenLine, Heart } from 'lucide-react'

/** @type {SidebarMenuItem[]} */
const adminSidebarMenu = [
	{ title: 'Dashboard', icon: Home, path: '/' },
	{ title: 'Another Page', icon: Heart, path: '/another-page' },

	{ title: 'Article CRUD', icon: BookOpen, childrens: [
		{ title: 'Article List', icon: List, path: '/article/list' },
		{ title: 'Article Form', icon: FilePenLine, path: '/article/form' },
	] },
]

export default adminSidebarMenu