import { Button, Card, PageTitle } from "~/components";

function CardExamplePage () {
	return <>
		<PageTitle title="Card Example" />

		<main className="grid gap-8">
			<Card>
				Basic Usage
			</Card>


			<Card>
				<Card.Header>
					<Card.Title title="Title Example" />
				</Card.Header>

				Card with title
			</Card>


			<Card>
				<Card.Header>
					<Card.Title title="With Action" />

					<Button title="Some action!!!" className="btn-primary" />
				</Card.Header>

				Card with title & action button
			</Card>
		</main>

	</>
}

export default CardExamplePage