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
export function getArticleDetail (articleId) {
	return axiosInstance.get('https://dummyjson.com/posts/' + articleId)
}


/**
 * fungsi untuk membuat artikel baru
 * @param {Article} formData
 * @returns {Promise< Article >}
 */
export function createArticle (formData) {
	return axiosInstance.post('https://dummyjson.com/posts/add', formData)
}

/**
 * fungsi untuk mengupdate artikel berdasarkan id
 * @param {Article} formData
 * @param {string|number} articleId
 * @returns {Promise< Article >}
 */
export function updateArticle (formData, articleId) {
	return axiosInstance.put('https://dummyjson.com/posts/' + articleId, formData)
}

/**
 * fungsi untuk mengupdate artikel berdasarkan id
 * @param {string|number} articleId
 * @returns {Promise< Article >}
 */
export function deleteArticle (articleId) {
	return axiosInstance.delete('https://dummyjson.com/posts/' + articleId)
}