import { forwardRef } from "react";
import mergeClass from "~/lib/mergeClass";

/**
 * @typedef {object} FileInputProps
 *
 * @prop {string} [label] 		- text yang muncul di atas input
 * @prop {string} [helper] 		- text bantuan yang muncul di atas kanan input
 * @prop {string} [error] 		- text merah yang muncul di bawah input
 * @prop {string} [inputClass] 	- html class untuk tag input
 * @prop {string} [className] 	- html class untuk wrapper
 */

/**
 * @memberof 	Component._Form
 * @alias 		FileInput
 *
 * @param {FileInputProps & React.InputHTMLAttributes<HTMLInputElement>} props
 * @param {React.RefObject} ref
 */
function FileInput(
  {
    label = "",
    helper = "",
    error = "",
    inputClass = "",
    className = "",
    ...restProps
  },
  ref
) {
  return (
    <>
      <label
        className={mergeClass("form-control max-w-full w-full", className)}
      >
        {!!label && (
          <div className="label">
            <span className="label-text">{label}</span>
            <span className="label-text-alt">{helper}</span>
          </div>
        )}

        <input
          ref={ref}
          className={mergeClass(
            "file-input file-input-bordered w-full",
            inputClass,
            !!error && "input-error"
          )}
          type="file"
          {...restProps}
        />

        {!!error && (
          <div className="label">
            <span className="label-text-alt text-error">{error}</span>
          </div>
        )}
      </label>
    </>
  );
}

const refForwardedFileInput = forwardRef(FileInput);

export default refForwardedFileInput;
