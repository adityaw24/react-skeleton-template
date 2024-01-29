import { forwardRef } from "react";
import mergeClass from "~/lib/mergeClass";

/**
 * @typedef {Object} SelectOption
 * @property {string} label -- yang akan tampil pada option select
 * @property {string} value -- value yang akan diproses saat option dipilih
*/

/**
 * @typedef {object} SelectInputProps
 *
 * @prop {string} 			[label] 		- text yang muncul di atas input
 * @prop {string} 			[helper] 		- text bantuan yang muncul di atas kanan input
 * @prop {string} 			[placeholder] 	- placeholder jika tidak ada option yang terpilih
 * @prop {string} 			[value] 		- value yang terpilih dari option yang tersedia
 * @prop {string} 			[error] 		- text merah yang muncul di bawah input
 * @prop {string} 			[inputClass] 	- html class untuk tag input
 * @prop {string} 			[className] 	- html class untuk wrapper
 * @prop {SelectOption[]} 	[options] 		- pilihan yang akan ditampilkan
 */

/**
 * @memberof 	Component._Form
 * @alias 		SelectInput
 *
 * @param {SelectInputProps & React.SelectHTMLAttributes<HTMLSelectElement>} props
 * @param {React.RefObject} ref
 *
 * @example
 * // select option
 * const myOptions = [
 * 	{ value: "1", label: "Banana" },
 * 	{ value: "2", label: "Papaya" },
 * 	{ value: "3", label: "Apple" },
 * ]
 *
 * // basic usage
 * <SelectInput label="Pilih buah" options={myOptions} />
 *
 * // different color
 * <SelectInput label="Pilih buah" options={myOptions} className="select-success" />
 *
 * // Untuk styling lebih lengkap bisa dilihat di [DaisyUI]{@link https://daisyui.com/components/select/}
 */
function SelectInput ({
	label = '',
	helper = '',
	placeholder = '',
	error = '',
	inputClass = '',
	className = '',
	options = [],
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

			<select
				ref={ref}
				className={mergeClass(
					"select select-bordered w-full",
					inputClass,
					!!error ? "select-error" : ""
				)}
				{...restProps}
			>
				{!!placeholder
					? <option value="">{placeholder}</option>
					: null}

				{options.map(optionItem =>
					<option key={optionItem.value} value={optionItem.value}>
						{optionItem.label}
					</option>
				)}
			</select>

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

const refForwardedSelectInput = forwardRef(SelectInput)

export default refForwardedSelectInput