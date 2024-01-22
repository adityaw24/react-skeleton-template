<script>
	import { Card, TextInput } from "~/components";
</script>

<Card title="Text Input Example" class="lg:row-span-2">
	<TextInput label="Text input with label" />
	<TextInput label="Text input with error" error="Error example" />
	<TextInput label="Text input with placeholder" placeholder="Placeholder example"  />
	<TextInput label="Colored text input" inputClass="input-success" />
	<TextInput label="Extra Small text input" inputClass="input-xs" />
	<TextInput label="Small text input" inputClass="input-sm" />
	<TextInput label="Large text input" inputClass="input-lg" />
</Card>