<script>
	import { PageTitle } from "~/components";
    import TextInputExample from "./_TextInputExample.svelte";
    import OtherInputTypes from "./_OtherInputTypes.svelte";
    import ControlledInput from "./_ControlledInput.svelte";
</script>

<PageTitle title="Input Component" />

<main class="grid lg:grid-cols-2 gap-6">
	<!-- Text Input Example -->
	<TextInputExample />

	<!-- Other Input Types -->
	<OtherInputTypes />

	<!-- Controlled Input -->
	<ControlledInput />
</main>
