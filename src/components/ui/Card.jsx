import mergeClass from "~/lib/mergeClass";

/**
 * @typedef {object} 		CardProps
 * @prop {string} 			[title] 			- Judul cardnya, muncul di atas kiri
 * @prop {string} 			[innerClass] 		- Class untuk body/daleman dari card
 * @prop {string} 			[className] 		- Class untuk wrapper/outer dari card
 * @prop {React.ReactNode} 	[children] 			- Isi dari card
 * @prop {React.ReactNode} 	[HeaderAction] 		- Slot action, biasa diisi dengan button, muncul di atas kanan
 * @prop {React.ReactNode} 	[FooterAction] 		- Slot action, biasa diisi dengan button, muncul di bawah kanan
 * @prop {React.ReactNode} 	[Figure] 			- Gambar utama dari cardnya
 */

/**
 * Card yang berfungsi sebagai container/wrapper dari beberapa component
 *
 * @memberof 	Component.UI
 * @alias 		Card
 *
 * @param {CardProps} props
 *
 * @example
 * // Basic usage
 * <Card title="Contoh Card">
 * 	<p>Hai Bambang<p>
 * </Card>
 */
function Card ({
	title = '',
	innerClass = '',
	className = '',
	children = null,
	HeaderAction = null,
	FooterAction = null,
	Figure = null
}) {
	return <>
		<div className={mergeClass("card bg-base-100 shadow-xl", className)}>
			{Figure}
			<div className="card-body gap-3">
				{ !!title || !!HeaderAction
					? <>
						<section className="flex items-center justify-between">
							{ !!title
								? <h2 className="card-title">
									{title}
								</h2>
							: null }

							{HeaderAction}
						</section>

						<hr className="mt-1 mb-4 dark:border-gray-600" />
					</>
				: null }

				<section className={innerClass}>
					{children}
				</section>

				{ !!FooterAction
					? <section className="card-actions">
						{FooterAction}
					</section>
				: null }
			</div>
		</div>
	</>
}

export default Card