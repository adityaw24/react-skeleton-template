import { Card, RadioInput, SelectInput } from "~/components";

function OtherInputTypes () {
	return <Card>
		<Card.Header>
			<Card.Title title="Other Input Types" />
		</Card.Header>

		<SelectInput
			label="Select input example"
			placeholder="Select provided option"
			options={[
				{ label: "Option 1", value: "option1" },
				{ label: "Option 2", value: "option2" },
				{ label: "Option 3", value: "option3" },
			]}
		/>

		<RadioInput
			name="radio-input-example"
			label="Radio input example"
			options={[
				{ label: "Option 1", value: "option1" },
				{ label: "Option 2", value: "option2" },
				{ label: "Option 3", value: "option3" },
			]}
		/>
	</Card>
}

export default OtherInputTypes