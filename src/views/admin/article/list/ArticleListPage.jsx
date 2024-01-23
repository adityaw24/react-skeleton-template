import { useEffect, useState } from "react"
import { Card, PageTitle, DataTable, Button } from "~/components"
import { getArticleList } from "~/services/article-service"

import columns from "./_columnDefinition"
import { usePagination } from "~/lib/usePagination"
import { errorPopup } from "~/lib/popup"
import { Plus } from "lucide-react"


function ArticleListPage () {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [totalData, setTotalRecords] = useState(0)
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