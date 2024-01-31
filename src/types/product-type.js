/**
 * type single product
 * @typedef {object} Products
 * @property {string|number} id
 * @property {string} title
 * @property {string} description
 * @property {string} price
 * @property {string} discountPercentage
 * @property {string} rating
 * @property {string} stock
 * @property {string} brand
 * @property {string} category
 * @property {string} thumbnail
 * @property {string[]} images
 *
 */

/**
 * type list product
 * @typedef {object} ProductList
 * @property {Products[]} products
 * @property {number} total
 * @property {number} skip
 * @property {number} limit
 */

/**
 * type form create and update product
 * @typedef {object} ProductFormObject
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {number} discountPercentage
 * @property {number} rating
 * @property {number} stock
 * @property {string} brand
 * @property {string} category
 * @property {string} thumbnail
 * @property {string[]} images
 *
 */
