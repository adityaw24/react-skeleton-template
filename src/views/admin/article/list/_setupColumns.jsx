import { Button } from "~/components"

function setupColumns ({ handleDelete }) {

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
					to={'/article/detail/' + row.original.id}
					className="btn-accent btn-xs"
				/>
				<Button
					title="Edit"
					to={'/article/form/' + row.original.id}
					className="btn-warning btn-xs"
				/>
				<Button
					title="Delete"
					onClick={handleDelete(row.original.id)}
					className="btn-error btn-xs"
				/>
			</section>
		}
	]

	return columns
}


export default setupColumns