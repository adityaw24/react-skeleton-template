// @ts-nocheck
import { writable } from "svelte/store"
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

function createAuthStore () {
	const { subscribe, set, update } = writable(getInitialState())

	/**
	 * @param {User} newUser -- data user dari response login
	 * @returns {void}
	 */
	const setUser = newUser => {
		localStorage.setItem('user', JSON.stringify(newUser))
		update(state => ({...state, user: newUser }))
	}

	/**
	 * @param {string} newToken -- token dari response login
	 * @returns {void}
	 */
	const setToken = newToken => {
		axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + newToken
		localStorage.setItem('token', newToken)
		update(state => ({ ...state, token: newToken }))
	}

	const resetState = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		delete axiosInstance.defaults.headers.common['Authorization']
		set({...initialState})
	}

	return {
		subscribe,
		setUser,
		setToken,
		resetState
	}
}

const authStore = createAuthStore()
export default authStore