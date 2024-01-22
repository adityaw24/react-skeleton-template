import axiosInstance from "~/lib/axiosInstance"

/**
 * fungsi untuk mendapatkan list artikel
 * @param {URLSearchParams} queryString
 * @returns {CommonResponse< ArticleList >}
 */
export function getArticleList (queryString) {
	return axiosInstance.get('https://dummyjson.com/posts/search', {
		params: queryString
	})
}

/**
 * fungsi untuk mendapatkan single article
 * @param {string|number} articleId
 * @returns {CommonResponse< Article >}
 */
export function getArticleDetail (articleId) {
	return axiosInstance.get('https://dummyjson.com/posts/' + articleId)
}

/**
 * fungsi untuk membuat artikel baru
 * @param {Article} formData
 * @returns {CommonResponse< Article >}
 */
export function createArticle (formData) {
	return axiosInstance.post('https://dummyjson.com/posts/add', formData)
}

/**
 * fungsi untuk mengupdate artikel berdasarkan id
 * @param {Article} formData
 * @param {string|number} articleId
 * @returns {CommonResponse< Article >}
 */
export function updateArticle (formData, articleId) {
	return axiosInstance.put('https://dummyjson.com/posts/' + articleId, formData)
}

/**
 * fungsi untuk mengupdate artikel berdasarkan id
 * @param {string|number} articleId
 * @returns {CommonResponse< Article >}
 */
export function deleteArticle (articleId) {
	return axiosInstance.delete('https://dummyjson.com/posts/' + articleId)
}