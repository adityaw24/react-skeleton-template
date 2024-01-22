import { create } from "zustand"
import axiosInstance from "~/lib/axiosInstance"

/**
 * @typedef {Object} 	AuthState
 * @property {User} 	user 	-- menyimpan data user yang telah login
 * @property {string} 	token	-- menyimpan token yang didapatkan saat login
 */

/** @type {AuthState} */
const initialState = {
	user: {
		id: '',
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		gender: '',
		image: '',
	},
	token: ''
}

/** @returns {AuthState} */
function getInitialState () {
	const savedUser = localStorage.getItem('user') || ''
	const savedToken = localStorage.getItem('token')
	const initialStateCopy = {...initialState}

	if (savedToken) {
		initialStateCopy.user = JSON.parse(savedUser)
		initialStateCopy.token = savedToken
		return initialStateCopy
	} else {
		return initialStateCopy
	}
}

function createAuthStore (set) {
	return {
		...getInitialState(),

		/**
		 * @param {User} newUser -- data user dari response login
		 * @returns {void}
		 */
		setUser(newUser) {
			localStorage.setItem('user', JSON.stringify(newUser))
			set(() => ({ user: newUser }))
		},

		/**
		 * @param {string} newToken -- token dari response login
		 * @returns {void}
		 */
		setToken(newToken) {
			axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + newToken
			localStorage.setItem('token', newToken)
			set(() => ({ token: newToken }))
		},

		resetState() {
			localStorage.removeItem('user')
			localStorage.removeItem('token')
			delete axiosInstance.defaults.headers.common['Authorization']
			set({ ...initialState })
		}
	}
}

const useAuthStore = create(createAuthStore)

export default useAuthStore