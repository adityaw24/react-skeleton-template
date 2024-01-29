import { PageTitle } from "~/components";
import TextInputExample from "./_TextInputExample";
import OtherInputTypes from "./_OtherInputTypes";
import ControlledInput from "./_ControlledInput";

function InputExamplePage () {
	return <>
		<PageTitle title="Input Example" />

		<main className="grid lg:grid-cols-2 gap-6">
			{/* Text Input Example */}
			<TextInputExample />

			{/* Other Input Types */}
			<OtherInputTypes />

			{/* Controlled Input */}
			<ControlledInput />
		</main>
	</>
}

export default InputExamplePage