import { Home, BookOpen, List, FilePenLine, Heart, FileQuestion, GalleryVerticalEnd, FormInput, Touchpad, AppWindow } from 'lucide-react'

/** @type {SidebarMenuItem[]} */
const adminSidebarMenu = [
	{ title: 'Dashboard', icon: Home, path: '/' },
	{ title: 'Another Page', icon: Heart, path: '/another-page' },

	{ title: 'Component Example', icon: FileQuestion, childrens: [
		{ title: 'Card', icon: GalleryVerticalEnd, path: '/component-example/card' },
		{ title: 'Input', icon: FormInput, path: '/component-example/input' },
		{ title: 'Button', icon: Touchpad, path: '/component-example/button' },
	] },

	{ title: 'Article CRUD', icon: BookOpen, childrens: [
		{ title: 'Article List', icon: List, path: '/article/list' },
		{ title: 'Article Form', icon: FilePenLine, path: '/article/form' },
	] },

	{ title: 'Public Form', icon: AppWindow, path: '/public-form/form-example' }
]

export default adminSidebarMenu