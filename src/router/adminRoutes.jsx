import HomePage from "~/views/admin/home/HomePage"
import AnotherPage from "~/views/admin/another/AnotherPage"
import AdminLayout from "~/views/admin/_layout/AdminLayout"

import CardExamplePage from "~/views/admin/component-example/card/CardExamplePage"
import ButtonExamplePage from "~/views/admin/component-example/button/ButtonExamplePage"
import InputExamplePage from "~/views/admin/component-example/input/InputExamplePage"

import ArticleListPage from "~/views/admin/article/list/ArticleListPage"
import ArticleFormPage from "~/views/admin/article/form/ArticleFormPage"
import ArticleDetailPage from "~/views/admin/article/detail/ArticleDetailPage"

const adminRouter = [
	{ element: <AdminLayout />, children: [
		{ path: '/', element: <HomePage /> },
		{ path: '/another-page', element: <AnotherPage /> },

		{ path: '/component-example/card', element: <CardExamplePage /> },
		{ path: '/component-example/button', element: <ButtonExamplePage /> },
		{ path: '/component-example/input', element: <InputExamplePage /> },

		{ path: '/article/list', element: <ArticleListPage /> },
		{ path: '/article/form', element: <ArticleFormPage /> },
		{ path: '/article/form/:editedId', element: <ArticleFormPage /> },
		{ path: '/article/detail/:detailId', element: <ArticleDetailPage /> },
	]},
]

export default adminRouter