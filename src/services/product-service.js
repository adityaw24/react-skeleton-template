import axiosInstance from "~/lib/axiosInstance";
import generateRequestParams from "~/lib/generateRequestParams";

/**
 * @memberof Service._Product
 * @alias getProductList
 *
 * @param {ListDataRequestOptions} requestParams
 * @returns {Promise<ProductList>}
 */
export const getProductList = async (requestParams) => {
  const params = generateRequestParams(requestParams);
  const res = await axiosInstance.get("https://dummyjson.com/products/search", {
    params,
  });
  return res.data;
};

/**
 * @memberof Service._Product
 * @alias getProductDetail
 *
 * @param {string|number} id
 * @returns {Promise<Products>}
 */
export const getProductDetail = async (id) => {
  const res = await axiosInstance.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};

/**
 * @memberof Service._Product
 * @alias createProduct
 *
 * @param {ProductFormObject} formData
 * @returns {Promise<Products>}
 */
export const createProduct = async (formData) => {
  const res = await axiosInstance.post(
    "https://dummyjson.com/products/add",
    formData
  );
  return res.data;
};

/**
 * @memberof Service._Product
 * @alias updateProduct
 *
 * @param {string|number} id
 * @param {ProductFormObject} formData
 * @returns {Promise<Products>}
 */
export const updateProduct = async (id, formData) => {
  const res = await axiosInstance.put(
    `https://dummyjson.com/products/${id}`,
    formData
  );
  return res.data;
};

/**
 * @memberof Service._Product
 * @alias deleteProduct
 *
 * @param {string|number} id
 * @returns {Promise<Products>}
 */
export const deleteProduct = async (id) => {
  const res = await axiosInstance.delete(
    `https://dummyjson.com/products/${id}`
  );
  return res.data;
};
