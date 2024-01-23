import { Button } from "~/components"

const columns = [
	{ accessorKey: "id", header: "ID" },
	{ accessorKey: "title", header: "Title" },
	{ accessorKey: "userId", header: "User ID" },
	{ accessorKey: "reactions", header: "Reactions" },
	{
		accessorKey: "tags",
		header: "Tags",
		cell: ({ row }) => row.original.tags.join(', ')
	},
	{
		id: 'actions',
		header: 'Actions',
		size: 190,
		cell: ({ row }) => <section className="flex gap-3">
			<Button
				title="Detail"
				onClick={() => alert('id: ' + row.original.id)}
				className="btn-accent btn-xs"
			/>
			<Button
				title="Edit"
				to={'/article/form/' + row.original.id}
				className="btn-warning btn-xs"
			/>
			<Button
				title="Delete"
				onClick={() => alert('id: ' + row.original.id)}
				className="btn-error btn-xs"
			/>
		</section>
	}
]

export default columns