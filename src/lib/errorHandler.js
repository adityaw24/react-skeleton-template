import toast from "react-hot-toast"

/**
 * fungsi untuk popup ketika terjadi error
 *
 * @memberof Lib
 * @alias errorHandler
 *
 * @param {Error | object | string} err
 */
export default function errorHandler(err) {
	if (import.meta.env.DEV) console.log(err)

	const msg = err?.response?.data?.message || err?.toString() || 'Something went wrong :('

	toast.error(msg, {
		duration: 4000
	})
}