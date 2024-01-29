import { forwardRef } from "react";
import mergeClass from "~/lib/mergeClass";

/**
 * @typedef {Object} RadioOption
 * @property {string} label -- yang akan tampil pada input radio
 * @property {string} value -- value yang akan diproses saat radio dipilih
*/

/**
 * @typedef {object} RadioInputProps
 *
 * @prop {string} 			name 			- name untuk radio input, wajib diisi
 * @prop {string} 			[label] 		- text yang muncul di atas input
 * @prop {string} 			[helper] 		- text bantuan yang muncul di atas kanan input
 * @prop {string} 			[value] 		- value yang terpilih dari option yang tersedia
 * @prop {string} 			[error] 		- text merah yang muncul di bawah input
 * @prop {string} 			[inputClass] 	- html class untuk tag input
 * @prop {string} 			[className] 	- html class untuk wrapper
 * @prop {RadioOption[]} 	[options] 	- pilihan yang akan ditampilkan
 */

/**
 * @memberof 	Component._Form
 * @alias 		RadioInput
 *
 * @param {RadioInputProps & React.InputHTMLAttributes<HTMLInputElement>} props
 * @param {React.RefObject} ref
 *
 * @example
 * // radio option
 * const myOptions = [
 * 	{ value: "1", label: "Banana" },
 * 	{ value: "2", label: "Papaya" },
 * 	{ value: "3", label: "Apple" },
 * ]
 *
 * // basic usage
 * <RadioInput label="Pilih buah" options={myOptions} />
 *
 * // different color
 * <RadioInput label="Pilih buah" options={myOptions} className="radio-success" />
 *
 * // Untuk styling lebih lengkap bisa dilihat di [DaisyUI]{@link https://daisyui.com/components/radio/}
 */
function RadioInput ({
	name,
	label = '',
	helper = '',
	error = '',
	value = '',
	inputClass = '',
	className = '',
	options = [],
	...restProps
}, ref) {
	return <>
		<label className={mergeClass("form-control max-w-full w-full", className)}>
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

			<section className="grid gap-3 mt-2">
				{options.map(optionItem =>
					<label key={optionItem.value} className="flex items-center gap-3 cursor-pointer">
						<input
							ref={ref}
							name={name}
							type="radio"
							className={mergeClass(
								"radio checked:radio-primary",
								inputClass,
								!!error ? "radio-error" : ""
							)}
							value={optionItem.value}
							checked={value === optionItem.value ? true : undefined}
							{...restProps}
						/>

						<span className="label-text">
							{optionItem.label}
						</span>
					</label>
				)}
			</section>

			{ !!error
				? <div className="label">
					<span className="label-text-alt text-error">
						{error}
					</span>
				</div>
			: null }
		</label>
	</>
}

const refForwardedRadioInput = forwardRef(RadioInput)

export default refForwardedRadioInput