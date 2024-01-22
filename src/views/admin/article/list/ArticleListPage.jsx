import { useEffect, useState } from "react"
import { Card, PageTitle, DataTable } from "~/components"
import { getArticleList } from "~/services/article-service"

import columns from "./_column_definition"
import { usePagination } from "~/lib/usePagination"
import { errorPopup } from "~/lib/swal"


function ArticleListPage () {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [totalRecords, setTotalRecords] = useState(0)
	const { limit, skip, pagination, setPagination } = usePagination()


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


	return <>
		<PageTitle title="Article List" />
		<Card>
			<DataTable
				columns={columns}
				data={data}
				totalRecords={totalRecords}
				pagination={pagination}
				onPaginationChange={setPagination}
				isLoading={isLoading}
			/>
		</Card>
	</>
}

export default ArticleListPage