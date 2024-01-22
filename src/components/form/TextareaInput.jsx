import { forwardRef } from "react";
import mergeClass from "~/lib/mergeClass";

/**
 * @memberof Component.Form
 * @alias TextareaInput
 *
 * @param {object} props
 * @param {string} [props.label] 		- text yang muncul di atas input
 * @param {string} [props.helper] 		- text bantuan yang muncul di atas kanan input
 * @param {string} [props.error] 		- text merah yang muncul di bawah input
 * @param {string} [props.inputClass] 	- html class untuk tag input
 * @param {string} [props.className] 	- html class untuk wrapper
 * @param {object} [props.restProps] 	- props selain yang diatas yang akan diteruskan ke input
 * @param {React.RefObject} ref
 *
 *  @example
 * // Basic usage
 * <TextareaInput label="contoh textarea" />
 *
 * // Controlled Textarea
 * const [content, setContent] = useState()
 *
 * <TextareaInput value={content} onChange={e => setContent(e.target.value)} />
 *
 * // Textarea with error
 * <TextareaInput error="Max 30 character" />
 *
 * // Textarea with color
 * <TextareaInput inputClass="textarea-success" />
 *
 * // Untuk styling lebih lengkap bisa dilihat di [DaisyUI]{@link https://daisyui.com/components/textarea/}
 */
function TextareaInput ({
	label = '',
	helper = '',
	error = '',
	inputClass = '',
	className = '',
	...restProps
}, ref) {
	return <label className={mergeClass("form-control max-w-full w-full", className)}>
		{ !!label
			? <div className="label">
				<span className="label-text">
					{label}
				</span>
				<span className="label-text-alt">
					{helper}
				</span>
			</div>
		: null }

		<textarea
			ref={ref}
			className={mergeClass(
				"textarea textarea-bordered w-full",
				inputClass,
				!!error ? "textarea-error" : ""
			)}
			{...restProps}
		/>

		{ !!error
			? <div className="label">
				<span className="label-text-alt text-error">
					{error}
				</span>
			</div>
		: null }
	</label>
}

const refForwardedTextareaInput = forwardRef(TextareaInput)

export default refForwardedTextareaInput