import { useState } from "react"
import { Card, RadioInput, SelectInput, TextInput } from "~/components"

function ControlledInput () {
	const [textValue, setTextValue] = useState('')
	const [selectValue, setSelectValue] = useState('')
	const [radioValue, setRadioValue] = useState('')

	return <Card>
		<Card.Header>
			<Card.Title title="Controlled Input" />
		</Card.Header>

		<TextInput
			label="Test text input"
			placeholder="write something..."
			value={textValue}
			onChange={e => setTextValue(e.target.value)}
		/>

		<SelectInput
			label="Test select input"
			placeholder="select one option"
			options={[
				{ label: 'Banana', value: 'banana' },
				{ label: 'Papaya', value: 'papaya' },
				{ label: 'Apple', value: 'apple' },
			]}
			value={selectValue}
			onChange={e => setSelectValue(e.target.value)}
		/>

		<RadioInput
			name="test-radio-input"
			label="Test radio input"
			options={[
				{ label: 'Banana', value: 'banana' },
				{ label: 'Papaya', value: 'papaya' },
				{ label: 'Apple', value: 'apple' },
			]}
			value={radioValue}
			onChange={e => setRadioValue(e.target.value)}
		/>

		<div className="divider" />

		<ul>
			<li>- text input value: {textValue}</li>
			<li>- select input value: {selectValue}</li>
			<li>- radio input value: {radioValue}</li>
		</ul>
	</Card>
}

export default ControlledInput