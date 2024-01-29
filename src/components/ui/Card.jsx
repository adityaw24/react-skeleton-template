import mergeClass from "~/lib/mergeClass";

/**
 * Card yang berfungsi sebagai container/wrapper dari beberapa component
 *
 * @memberof 	Component._UI
 * @alias 		Card
 *
 * @param {object} 				props
 * @param {string} 				[props.className] 	- Class untuk wrapper/outer dari card
 * @param {React.ReactNode} 	[props.children] 	- Isi dari card
 *
 * @example
 * // Basic usage
 * <Card>
 * 	<p>this is card body</p>
 * </Card>
 *
 * // With title
 * <Card>
 * 	<Card.Header>
 * 		<Card.Title title="This is card title" />
 * 	</Card.Header>
 *
 * 	<p>this is card body</p>
 * </Card>
 *
 * // With title and action button
 * <Card>
 * 	<Card.Header>
 * 		<Card.Title title="This is card title" />
 * 		<Button title="Some action button" />
 * 	</Card.Header>
 *
 * 	<p>this is card body</p>
 * </Card>
 */
function Card({
	className = '',
	children = null,
}) {
	return <>
		<div className={mergeClass("card bg-base-100 shadow-xl", className)}>
			<div className="card-body gap-3">
				{children}
			</div>
		</div>
	</>
}


/**
 * @memberof Component._UI
 * @alias Card.Header
 *
 * @param {object} 				props
 * @param {string} 				[props.className] 	- Class untuk wrapper/outer dari card header
 * @param {React.ReactNode} 	[props.children] 	- Isi dari card header
 */
function CardHeader ({ children, className = '' }) {
	return <>
		<section className={mergeClass("flex items-center justify-between", className)}>
			{children}
		</section>

		<hr className="mt-1 mb-4 dark:border-gray-600" />
	</>
}


/**
 * @memberof Component._UI
 * @alias Card.Title
 *
 * @param {object} 	props
 * @param {string} 	[props.className] 	- Class untuk wrapper/outer dari card header
 * @param {string} 	[props.title] 		- Isi dari card header
 */
function CardTitle({ title, className = '' }) {
	return <h2 className={mergeClass("card-title", className)}>
		{title}
	</h2>
}


Card.Header = CardHeader
Card.Title = CardTitle

export default Card