import { useEffect, useState } from "react"
import { Card, PageTitle, DataTable, Button } from "~/components"
import { deleteArticle, getArticleList } from "~/services/article-service"

import setupColumns from "./_setupColumns"
import { usePagination } from "~/lib/usePagination"
import { confirmDeletePopup, errorPopup } from "~/lib/popup"
import { Plus } from "lucide-react"


function ArticleListPage () {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [totalData, setTotalRecords] = useState(0)
	const { limit, skip, pagination, setPagination } = usePagination()

	// fetch inital data logic =============================
	const getData = async () => {
		try {
			setIsLoading(true)
			const articles = await getArticleList({
				pagination: { limit, skip }
			})

			setData(articles.posts)
			setTotalRecords(articles.total)
		}
		catch (err) {
			errorPopup(err?.response?.data?.message)
		}
		finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [limit, skip])


	// datatable columns logic =========================
	const handleDelete = (rowId) => () => {
		confirmDeletePopup({
			onConfirm: () => deleteArticle(rowId),
			onSuccess: () => getData()
		})
	}

	const columns = setupColumns({ handleDelete })

	return <>
		<PageTitle title="Article List" />
		<Card
			title="Article Table"
			HeaderAction={
				<Button
					title="New Article"
					to="/article/form"
					Icon={Plus}
					className="btn-primary"
				/>
			}
		>
			<DataTable
				columns={columns}
				data={data}
				totalData={totalData}
				pagination={pagination}
				onPaginationChange={setPagination}
				isLoading={isLoading}
			/>
		</Card>
	</>
}

export default ArticleListPage