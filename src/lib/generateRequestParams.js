/**
 * fungsi untuk mapping parameter request sesuai dengan spec API
 *
 * @memberof Lib
 * @alias generateRequestParams
 *
 * @param {ListDataRequestOptions} requestParams
 * @returns {ListDataRequestParams}
 */
export default function generateRequestParams (requestParams) {
	let params = {}

	params.q = requestParams.search || ''

	if (requestParams.pagination) {
		params.skip = requestParams.pagination.skip
		params.limit = requestParams.pagination.limit
	}
	if (requestParams.sort) {
		params.field = requestParams.sort.field
		params.order = requestParams.sort.order
	}

	return params
}