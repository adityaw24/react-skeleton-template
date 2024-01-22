import { forwardRef } from "react";
import mergeClass from "~/lib/mergeClass";

/**
 * @typedef {Object} RadioOption
 * @property {string} label -- yang akan tampil pada input radio
 * @property {string} value -- value yang akan diproses saat radio dipilih
*/

/**
 * @memberof Component.Form
 * @alias RadioInput
 *
 * @param {object} 			props
 * @param {string} 			props.name 			- name untuk radio input, wajib diisi
 * @param {string} 			[props.label] 		- text yang muncul di atas input
 * @param {string} 			[props.helper] 		- text bantuan yang muncul di atas kanan input
 * @param {string} 			[props.value] 		- value yang terpilih dari option yang tersedia
 * @param {string} 			[props.error] 		- text merah yang muncul di bawah input
 * @param {string} 			[props.inputClass] 	- html class untuk tag input
 * @param {string} 			[props.className] 	- html class untuk wrapper
 * @param {RadioOption[]} 	[props.options] 	- pilihan yang akan ditampilkan
 * @param {object} 			[props.restProps] 	- props selain yang diatas yang akan diteruskan ke input
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
					<label className="flex items-center gap-3 cursor-pointer">
						<input
							ref={ref}
							name={name}
							type="radio"
							className={mergeClass(
								"radio radio-bordered w-full",
								inputClass,
								!!error ? "radio-error" : ""
							)}
							checked={value === optionItem.value ? true : undefined}
							{...restProps}
						/>
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