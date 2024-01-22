import axiosInstance from "~/lib/axiosInstance"

/**
 * @param {object} credentials -- object berisi email dan password
 * @param {string} credentials.username -- username dari user yang dipakai untuk login
 * @param {string} credentials.password -- password dari user yang dipakai untuk login
 * @returns {CommonResponse<User>}
 */
export function loginProcess (credentials) {
	return axiosInstance.post('/auth/login', credentials)
}