/**
 * @typedef {object} 	PageTitleProps
 * @prop {string} 		props.title 	- Text utama dari halaman
 */

/**
 * Component untuk judul utama pada sebuah halaman
 *
 * @memberof 	Component.UI
 * @alias 		PageTItle
 *
 * @param {PageTitleProps} props
 *
 * @example
 * // basic usage
 * <PageTitle title="Article List" />
 */
function PageTitle ({ title }) {
	return <h2 className="mb-6 mt-10 text-2xl font-semibold text-gray-700 dark:text-gray-200">
		<slot>
			{title}
		</slot>
	</h2>
}

export default PageTitle