import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import { Button, Card, PageTitle } from "~/components";
import { getArticleDetail } from "~/services/article-service";
import { errorPopup } from "~/lib/popup";


function ArticleDetailPage () {
	const { detailId } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	const [articleDetail, setArticleDetail] = useState(/** @type {Article} */ ({}))

	async function fetchArticle() {
		try {
			const res = await getArticleDetail(detailId)
			setArticleDetail(res)
		}
		catch (err) {
			errorPopup(err)
		}
		finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchArticle()
	}, [detailId])

	return <>
		<PageTitle title="Article Detail" />
		<Card
			title="Article Detail"
			innerClass="grid gap-4 lg:grid-cols-4"
			HeaderAction={
				<Button
					title="Back"
					Icon={ChevronLeft}
					to="/article/list"
				/>
			}
		>

			<h6>ID</h6>
			<p className="lg:col-span-3">: {articleDetail?.id}</p>

			<h6>Title</h6>
			<p className="lg:col-span-3">: {articleDetail?.title}</p>

			<h6>Tags</h6>
			<p className="lg:col-span-3">: {articleDetail?.tags?.join(', ')}</p>

			<h6>User ID</h6>
			<p className="lg:col-span-3">: {articleDetail?.userId}</p>

			<h6>Reactions</h6>
			<p className="lg:col-span-3">: {articleDetail?.reactions}</p>

			<h6>Body / Content</h6>
			<p className="lg:col-span-3">: {articleDetail?.body}</p>
		</Card>
	</>
}

export default ArticleDetailPage