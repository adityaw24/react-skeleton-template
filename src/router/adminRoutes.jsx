import HomePage from "~/views/admin/home/HomePage"
import AnotherPage from "~/views/admin/another/AnotherPage"
import AdminLayout from "~/views/admin/_layout/AdminLayout"

import ArticleListPage from "~/views/admin/article/list/ArticleListPage"
import ArticleFormPage from "~/views/admin/article/form/ArticleFormPage"

const adminRouter = [
	{ element: <AdminLayout />, children: [
		{ path: '/', element: <HomePage /> },
		{ path: '/another-page', element: <AnotherPage /> },

		{ path: '/article/list', element: <ArticleListPage /> },
		{ path: '/article/form', element: <ArticleFormPage /> },
	]},
]

export default adminRouter