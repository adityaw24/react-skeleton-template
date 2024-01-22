import axiosInstance from "~/lib/axiosInstance"

/**
 * @param {object} credentials -- object berisi email dan password
 * @param {string} credentials.username -- username dari user yang dipakai untuk login
 * @param {string} credentials.password -- password dari user yang dipakai untuk login
 * @returns {Promise<User>}
 */
export async function loginProcess (credentials) {
	const res = await axiosInstance.post('/auth/login', credentials)
	return res.data
}