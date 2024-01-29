import mergeClass from "~/lib/mergeClass";
import iconConf from "~/lib/iconConf";
import { Link } from "react-router-dom";

/**
 * @typedef {object} ButtonProps
 *
 * @prop {string}					[title] 	- Text yang akan muncul pada button
 * @prop {string} 					[className] - html class
 * @prop {string} 					[to] 		- link yang akan dibuka ketika button ditekan
 * @prop {boolean} 					[loading] 	- akan memunculkan animasi loading ketika true
 * @prop {boolean} 					[disabled] 	- button tidak bisa ditekan ketika true
 * @prop {React.FunctionComponent}	[Icon] 		- icon dari [lucide icon]{@link https://lucide.dev/}
 */

/**
 * Component button, dipakai seperti tag "button" atau "a".
 * Untuk styling lebih lengkap bisa dilihat di [DaisyUI]{@link https://daisyui.com/components/button/}
 *
 * @memberof 	Component._Form
 * @alias 		Button
 *
 * @param {ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>}	props
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
	to = '',
	loading = false,
	disabled = false,
	Icon = null,
	...restProps
}) {
	const Tag = !to ? 'button' : Link

	return <>
		<Tag
			disabled={disabled || loading ? true : undefined}
			className={mergeClass("btn", className)}
			to={to || undefined}
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