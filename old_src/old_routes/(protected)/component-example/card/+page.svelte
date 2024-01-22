<script>
	import { Button, Card, PageTitle } from "~/components"
	import { Plus } from "lucide-svelte"
</script>

<PageTitle title="Card Component" />

<main class="grid gap-8">

	<!-- blank card -->
	<Card>
		blank card
	</Card>

	<!-- Card With Title -->
	<Card title="Card With Title">
		This is card body
	</Card>

	<!-- Card With Header Action Button -->
	<Card title="Card With Header Action Button">
		<section slot="header-action">
			<Button
				title="Add Data"
				class="btn-primary"
				icon={Plus}
			/>
		</section>

		This is card body
	</Card>

	<!-- Card With Footer Action Button -->
	<Card title="Card With Footer Action Button">
		This is card body

		<section slot="footer-action" class="w-full flex justify-end gap-3">
			<Button title="Delete" class="btn-error" />
			<Button title="Submit" class="btn-primary" />
		</section>
	</Card>
</main>