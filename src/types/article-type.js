/**
 * type untuk single article
 *
 * @typedef {object} Article
 * @property {string|number} [id]
 * @property {string} title
 * @property {string} body
 * @property {string[]} tags
 * @property {string|number} reactions
 * @property {string|number} userId
 */

/**
 * type untuk article list dari api, hasil gabungan antara type Article dengan CommonListObject
 *
 * @typedef {object} ArticleList
 * @property {Article[]} posts
 * @property {number} total total records
 * @property {number} skip number of skipped records, useful for pagination
 * @property {number} limit limit of records, useful for pagination
 */

/**
 * type untuk form buat atau edit artikel
 *
 * @typedef {object} ArticleFormObject
 * @property {string} title
 * @property {string} body
 * @property {string} tags
 * @property {string} reactions
 */