import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'

/**
 * fungsi untuk konfirmasi sebelum hapus suatu data
 * @param {object} callbacks
 * @param {Function} callbacks.onConfirm - fungsi ketika tombol konfirmasi ditekan
 * @param {Function} [callbacks.onSuccess] - optional, fungsi ketika onConfirm() berhasil
 */
export function confirmDeletePopup(callbacks) {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#ff5861",
		cancelButtonColor: "#f2f2f2",
		confirmButtonText: "Yes, delete it!",
		reverseButtons: true,
		showLoaderOnConfirm: true,
		allowOutsideClick: () => !Swal.isLoading(),
		preConfirm: async () => {
			try {
				await callbacks.onConfirm()
			} catch (error) {
				errorPopup(error)
			}
		}
	})
	.then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: "Deleted!",
				text: "Record has been deleted.",
				icon: "success",
			})
			if (callbacks.onSuccess) callbacks?.onSuccess()
		}
	});
}

/**
 * fungsi untuk popup ketika terjadi error
 * @param {Error | object | string} err
 */
export function errorPopup(err) {
	if (import.meta.env.DEV) console.log(err)

	const msg = err?.response?.data?.message || err?.toString() || 'Something went wrong :('

	toast.error(msg, {
		duration: 4000
	})

	// Swal.fire({
	// 	icon: "error",
	// 	title: "Error",
	// 	text: err || 'Something went wrong :('
	// });
}