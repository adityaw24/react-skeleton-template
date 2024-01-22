/**
 * @typedef {object} 	LoadingDotsProps
 * @prop {string} 		[label] 			- Text yang muncul di kanan animasi loading
 */

/**
 * Component yang menampilkan animasi loading
 *
 * @memberof 	Component.UI
 * @alias 		LoadingDots
 *
 * @param {LoadingDotsProps} props
 *
 * @example
 * // Basic usage
 * <LoadingDots label="Please wait" />
 *
 * // Without label
 * <LoadingDots />
 */
function LoadingDots ({
	label = ''
}) {
	return <section className="flex items-center gap-2">
		<span className="loading loading-dots loading-md"></span>
		{label}
	</section>
}

export default LoadingDots
