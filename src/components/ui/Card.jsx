import mergeClass from "~/lib/mergeClass";

/**
 * Card yang berfungsi sebagai container/wrapper dari beberapa component
 *
 * @memberof Component.UI
 * @alias Card
 *
 * @param {object} 			props
 * @param {string} 			[props.title] 			- Judul cardnya, muncul di atas kiri
 * @param {string} 			[props.innerClass] 		- Class untuk body/daleman dari card
 * @param {string} 			[props.className] 		- Class untuk wrapper/outer dari card
 * @param {React.ReactNode} [props.children] 		- Isi dari card
 * @param {React.ReactNode} [props.HeaderAction] 	- Slot action, biasa diisi dengan button, muncul di atas kanan
 * @param {React.ReactNode} [props.FooterAction] 	- Slot action, biasa diisi dengan button, muncul di bawah kanan
 * @param {React.ReactNode} [props.Figure] 			- Gambar utama dari cardnya
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
					? <section className="flex items-center justify-between">
						{ !!title
							? <h2 className="card-title">
								{title}
							</h2>
						: null }

						{HeaderAction}
					</section>
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