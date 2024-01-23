import { forwardRef } from "react";
import mergeClass from "~/lib/mergeClass";

/**
 * @typedef {object} TextInputProps
 *
 * @prop {string} [label] 		- text yang muncul di atas input
 * @prop {string} [helper] 		- text bantuan yang muncul di atas kanan input
 * @prop {string} [error] 		- text merah yang muncul di bawah input
 * @prop {string} [inputClass] 	- html class untuk tag input
 * @prop {string} [className] 	- html class untuk wrapper
 */

/**
 * @memberof 	Component.Form
 * @alias 		TextInput
 *
 * @param {TextInputProps & React.InputHTMLAttributes<HTMLInputElement>} props
 * @param {React.RefObject} ref
 *
 * @example
 * // Basic usage
 * <TextInput label="contoh text input" />
 *
 * // Controlled input
 * const [search, setSearch] = useState()
 *
 * <TextInput value={search} onChange={e => setSearch(e.target.value)} />
 *
 * // Input with error
 * <TextInput error="Max 30 character" />
 *
 * // Input with color
 * <TextInput inputClass="input-success" />
 *
 * // Untuk styling lebih lengkap bisa dilihat di [DaisyUI]{@link https://daisyui.com/components/input/}
 */
function TextInput ({
	label = '',
	helper = '',
	error = '',
	inputClass = '',
	className = '',
	...restProps
}, ref) {
	return <>
		<label className={mergeClass("form-control max-w-full w-full", className)}>
			{!!label
				? <div className="label">
					<span className="label-text">
						{label}
					</span>
					<span className="label-text-alt">
						{helper}
					</span>
				</div>
				: null}

			<input
				ref={ref}
				className={mergeClass(
					"input input-bordered w-full",
					inputClass,
					!!error ? "input-error" : ""
				)}
				{...restProps}
			/>

			{!!error
				? <div className="label">
					<span className="label-text-alt text-error">
						{error}
					</span>
				</div>
				: null}
		</label>
	</>
}

const refForwardedTextInput = forwardRef(TextInput)

export default refForwardedTextInput