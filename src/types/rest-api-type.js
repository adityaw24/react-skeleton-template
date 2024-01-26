/**
 * @typedef {object} 		ListDataRequestOptions
 *
 * @prop {object} 			[pagination]
 * @prop {number|string} 	pagination.skip
 * @prop {number|string} 	pagination.limit
 *
 * @prop {object} 			[sort]
 * @prop {number|string} 	sort.field
 * @prop {number|string} 	sort.order
 *
 * @prop {string} 			[search]
 */


/**
 * @typedef {object} 		ListDataRequestParams
 *
 * @prop {number|string} 	skip
 * @prop {number|string} 	limit
 *
 * @prop {number|string} 	field
 * @prop {number|string} 	order
 *
 * @prop {string} 			q		- text yang akan di-search
 */