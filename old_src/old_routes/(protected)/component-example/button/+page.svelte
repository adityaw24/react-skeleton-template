<script>
    import { Heart } from "lucide-svelte";
	import { Button, Card, PageTitle } from "~/components"
</script>

<PageTitle title="Button Component" />

<Card>
	<h3 class="text-lg font-bold">Button Color</h3>
	<section class="flex gap-3 flex-wrap">
		<Button title="Default" />
		<Button title="Primary" class="btn-primary" />
		<Button title="Secondary" class="btn-secondary" />
		<Button title="Accent" class="btn-accent" />
		<Button title="Success" class="btn-success" />
		<Button title="Info" class="btn-info" />
		<Button title="Warning" class="btn-warning" />
		<Button title="Error" class="btn-error" />
		<Button title="Ghost" class="btn-ghost" />
		<Button title="Link" class="btn-link" />
	</section>
	<hr class="my-6">

	<h3 class="text-lg font-bold">Button Outline</h3>
	<section class="flex gap-3 flex-wrap">
		<Button title="Default" />
		<Button title="Primary" class="btn-primary btn-outline" />
		<Button title="Secondary" class="btn-secondary btn-outline" />
		<Button title="Accent" class="btn-accent btn-outline" />
		<Button title="Success" class="btn-success btn-outline" />
		<Button title="Info" class="btn-info btn-outline" />
		<Button title="Warning" class="btn-warning btn-outline" />
		<Button title="Error" class="btn-error btn-outline" />
		<Button title="Ghost" class="btn-ghost btn-outline" />
		<Button title="Link" class="btn-link btn-outline" />
	</section>
	<hr class="my-6">

	<h3 class="text-lg font-bold">Button Size</h3>
	<section class="flex gap-3 flex-wrap">
		<Button title="Large" class="btn-lg" />
		<Button title="Default" />
		<Button title="Small" class="btn-sm" />
		<Button title="Extra Small" class="btn-xs" />
	</section>
	<hr class="my-6">

	<h3 class="text-lg font-bold">Button Width</h3>
	<section class="flex gap-3 flex-wrap">
		<Button title="Default" />
		<Button title="Wide" class="btn-wide" />
		<Button title="Block" class="btn-block" />
	</section>
	<hr class="my-6">

	<h3 class="text-lg font-bold">Button Icon</h3>
	<section class="flex gap-3 flex-wrap">
		<Button title="Icon and Title" icon={Heart} />
		<Button icon={Heart} />
	</section>
</Card>