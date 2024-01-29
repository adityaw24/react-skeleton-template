import { Card, TextInput } from "~/components"

function TextInputExample () {
	return <Card className="lg:row-span-2">
		<Card.Header>
			<Card.Title title="Text Input Example" />
		</Card.Header>

		<TextInput label="Text input with label" />
		<TextInput label="Text input with error" error="Error example" />
		<TextInput label="Text input with placeholder" placeholder="Placeholder example" />
		<TextInput label="Colored text input" inputClass="input-success" />
		<TextInput label="Extra Small text input" inputClass="input-xs" />
		<TextInput label="Small text input" inputClass="input-sm" />
		<TextInput label="Large text input" inputClass="input-lg" />
	</Card>
}

export default TextInputExample