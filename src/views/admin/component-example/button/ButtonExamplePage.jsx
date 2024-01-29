import { Heart } from "lucide-react";
import { Button, Card, PageTitle } from "~/components";

function ButtonExamplePage () {
	return <>
		<PageTitle title="Button Example" />

		<Card>
			<h3 className="text-lg font-bold">Button Color</h3>
			<section className="flex gap-3 flex-wrap">
				<Button title="Default" />
				<Button title="Primary" className="btn-primary" />
				<Button title="Secondary" className="btn-secondary" />
				<Button title="Accent" className="btn-accent" />
				<Button title="Success" className="btn-success" />
				<Button title="Info" className="btn-info" />
				<Button title="Warning" className="btn-warning" />
				<Button title="Error" className="btn-error" />
				<Button title="Ghost" className="btn-ghost" />
				<Button title="Link" className="btn-link" />
			</section>
			<hr className="my-6" />

			<h3 className="text-lg font-bold">Button Outline</h3>
			<section className="flex gap-3 flex-wrap">
				<Button title="Default" />
				<Button title="Primary" className="btn-primary btn-outline" />
				<Button title="Secondary" className="btn-secondary btn-outline" />
				<Button title="Accent" className="btn-accent btn-outline" />
				<Button title="Success" className="btn-success btn-outline" />
				<Button title="Info" className="btn-info btn-outline" />
				<Button title="Warning" className="btn-warning btn-outline" />
				<Button title="Error" className="btn-error btn-outline" />
				<Button title="Ghost" className="btn-ghost btn-outline" />
				<Button title="Link" className="btn-link btn-outline" />
			</section>
			<hr className="my-6" />

			<h3 className="text-lg font-bold">Button Size</h3>
			<section className="flex gap-3 flex-wrap">
				<Button title="Large" className="btn-lg" />
				<Button title="Default" />
				<Button title="Small" className="btn-sm" />
				<Button title="Extra Small" className="btn-xs" />
			</section>
			<hr className="my-6" />

			<h3 className="text-lg font-bold">Button Width</h3>
			<section className="flex gap-3 flex-wrap">
				<Button title="Default" />
				<Button title="Wide" className="btn-wide" />
				<Button title="Block" className="btn-block" />
			</section>
			<hr className="my-6" />

			<h3 className="text-lg font-bold">Button Icon</h3>
			<section className="flex gap-3 flex-wrap">
				<Button title="Icon and Title" Icon={Heart} />
				<Button Icon={Heart} />
			</section>
		</Card>
	</>
}

export default ButtonExamplePage