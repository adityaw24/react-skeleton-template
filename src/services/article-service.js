import axiosInstance from "~/lib/axiosInstance"
import generateRequestParams from "~/lib/generateRequestParams"

/**
 * fungsi untuk mendapatkan list artikel
 * @param {RequestParams} requestParams
 * @returns {Promise< ArticleList >}
 */
export async function getArticleList(requestParams) {
	let params = generateRequestParams(requestParams)

	const res = await axiosInstance.get('https://dummyjson.com/posts/search', { params })
	return res.data
}


/**
 * fungsi untuk mendapatkan single article
 * @param {string|number} articleId
 * @returns {Promise< Article >}
 */
export async function getArticleDetail (articleId) {
	const res = await axiosInstance.get('https://dummyjson.com/posts/' + articleId)
	return res.data
}


/**
 * fungsi untuk membuat artikel baru
 * @param {Article} formData
 * @returns {Promise< Article >}
 */
export async function createArticle (formData) {
	const res = await axiosInstance.post('https://dummyjson.com/posts/add', formData)
	return res.data
}

/**
 * fungsi untuk mengupdate artikel berdasarkan id
 * @param {Article} formData
 * @param {string|number} articleId
 * @returns {Promise< Article >}
 */
export async function updateArticle (formData, articleId) {
	const res = await axiosInstance.put('https://dummyjson.com/posts/' + articleId, formData)
	return res.data
}

/**
 * fungsi untuk mengupdate artikel berdasarkan id
 * @param {string|number} articleId
 * @returns {Promise< Article >}
 */
export async function deleteArticle (articleId) {
	const res = await axiosInstance.delete('https://dummyjson.com/posts/' + articleId)
	return res.data
}