export const ssr = false

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
	return {
		pathname: url.pathname,
	}
}
