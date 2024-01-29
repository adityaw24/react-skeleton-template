import { useEffect, useState } from "react"
import { Plus } from "lucide-react"

import { PageTitle, Button, Card, FullDataTable, LoadingDots } from "~/components"
import { deleteArticle, getArticleList } from "~/services/article-service"
import { confirmDeletePopup, errorPopup } from "~/lib/popup"
import setupColumns from "./_setupColumns"


function ArticleListPage () {
	const [tableData, setTableData] = useState([])
	const [totalData, setTotalRecords] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	// fetch inital data logic =============================

	/** @type {GetTableData} */
	const getTableData = async ({ pageSize, pageSkip }) => {
		try {
			setIsLoading(true)
			const articles = await getArticleList({
				pagination: {
					limit: pageSize,
					skip: pageSkip
				}
			})

			setTableData(articles.posts)
			setTotalRecords(articles.total)
		} catch (err) {
			errorPopup(err?.response?.data?.message)
		} finally {
			setIsLoading(false)
		}
	}


	// datatable columns logic =========================
	const handleDelete = (rowId) => () => {
		confirmDeletePopup({
			onConfirm: () => deleteArticle(rowId),
			// onSuccess: () => getData()
		})
	}

	const tableColumns = setupColumns({ handleDelete })


	return <>
		<PageTitle title="Article List" />

		<Card>
			<Card.Header>
				<Card.Title title="Article Table" />

				<LoadingDots
					label="Please wait..."
					isLoading={isLoading}
				/>

				<Button
					title="New Article"
					to="/article/form"
					Icon={Plus}
					className="btn-primary"
				/>
			</Card.Header>

			<FullDataTable
				data={tableData}
				columns={tableColumns}
				getTableData={getTableData}
				totalData={totalData}
				isLoading={isLoading}
			/>
		</Card>
	</>
}

export default ArticleListPage