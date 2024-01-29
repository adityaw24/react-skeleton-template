import { Button, Card, TextInput } from "~/components";

function FormExamplePage () {
	return <Card className="flex-1 max-w-xl w-full mx-auto">
		<Card.Header>
			<Card.Title title="Form Example" />
		</Card.Header>

		<form className="flex flex-col gap-4">
			<TextInput label="Input Example 1"/>
			<TextInput label="Input Example 2"/>
			<Button title="Selanjutnya" className="btn-primary mt-4"/>
		</form>
	</Card>
}

export default FormExamplePage