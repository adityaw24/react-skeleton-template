import mergeClass from "~/lib/mergeClass";
import iconConf from "~/lib/iconConf";

/**
 * Component button, dipakai seperti tag "button" atau "a".
 * Untuk styling lebih lengkap bisa dilihat di [DaisyUI]{@link https://daisyui.com/components/button/}
 *
 * @memberof Component.Form
 * @alias Button
 *
 * @param {object}		props
 * @param {string}		[props.title] 		- Text yang akan muncul pada button
 * @param {string} 		[props.className] 	- html class
 * @param {string} 		[props.href] 		- link yang akan dibuka ketika button ditekan
 * @param {boolean} 	[props.loading] 	- akan memunculkan animasi loading ketika true
 * @param {boolean} 	[props.disabled] 	- button tidak bisa ditekan ketika true
 * @param {React.FunctionComponent} [props.Icon] - icon dari [lucide icon]{@link https://lucide.dev/}
 * @param {object}		[props.restProps] 	- props selain yang diatas yang akan diteruskan ke button
 *
 * @example
 * // Basic usage
 * <Button title="Ini Button" />
 *
 * // With icon
 * import { Love } from "lucide-react"
 *
 * <Button title="With Icon" Icon={Love} />
 *
 * // Button dengan loading
 * <Button title="Please wait" loading={true} />
 *
 * // Button sebagai link
 * <Button title="Contoh Link" href="https://google.com" />
 *
 * // Different Color
 * <Button title="Success" className="btn-success" />
 *
 * // Untuk styling lebih lengkap bisa dilihat di [DaisyUI]{@link https://daisyui.com/components/button/}
 */
function Button({
	title = '',
	className = '',
	href = '',
	loading = false,
	disabled = false,
	Icon = null,
	...restProps
}) {
	const Tag = !href ? 'button' : 'a'

	return <>
		<Tag
			disabled={disabled || loading ? true : undefined}
			className={mergeClass("btn", className)}
			{...restProps}
		>
			{ loading
				? <span className="loading loading-spinner"></span>
			: !!Icon
				? <Icon {...iconConf} />
			: null }

			{title}
		</Tag>
	</>
}

export default Button