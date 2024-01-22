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
		cell: ({ row }) =>
			<Button
				title="test action"
				onClick={() => alert('id: ' + row.original.id)}
				className="btn-primary btn-xs"
			/>
	}
]

export default columns