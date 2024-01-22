<script>
	import { Card, RadioInput, SelectInput, TextInput } from "~/components"

	let textValue = ''
	let selectValue = ''
	let radioValue = ''
</script>

<Card title="Controlled Input">
	<TextInput
		label="Test text input"
		placeholder="write something..."
		bind:value={textValue}
	/>

	<SelectInput
		label="Test select input"
		placeholder="select one option"
		options={[
			{ label: 'Banana', value: 'banana' },
			{ label: 'Papaya', value: 'papaya' },
			{ label: 'Apple', value: 'apple' },
		]}
		bind:value={selectValue}
	/>

	<RadioInput
		name="test-radio-input"
		label="Test radio input"
		options={[
			{ label: 'Banana', value: 'banana' },
			{ label: 'Papaya', value: 'papaya' },
			{ label: 'Apple', value: 'apple' },
		]}
		bind:value={radioValue}
	/>

	<div class="divider" />

	<ul>
		<li>- text input value: {textValue}</li>
		<li>- select input value: {selectValue}</li>
		<li>- radio input value: {radioValue}</li>
	</ul>
</Card>