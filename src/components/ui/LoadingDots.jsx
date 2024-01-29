/**
 * Component yang menampilkan animasi loading
 *
 * @memberof 	Component.UI
 * @alias 		LoadingDots
 *
 * @param {object} 	props
 * @param {string} 	[props.label] 		- Text yang muncul di kanan animasi loading
 * @param {boolean} [props.isLoading] 	- Untuk mengatur muncul atau tidaknya animasi loading
 *
 * @example
 * // Basic usage
 * <LoadingDots />
 *
 * // With usage
 * <LoadingDots label="Please wait..." />
 *
 * // With control
 * <LoadingDots isLoading={true} />
 */
function LoadingDots ({
	label = '',
	isLoading = true
}) {
	return isLoading
		? <section className="flex items-center gap-2">
			<span className="loading loading-dots loading-md"></span>
			{label}
		</section>
		: null
}

export default LoadingDots
