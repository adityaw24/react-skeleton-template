import { Button } from "~/components";

const setupColumns = ({ handleDelete }) => {
  const columns = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "brand", header: "Brand" },
    { accessorKey: "category", header: "Category" },
    // { accessorKey: "description", header: "Description" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "rating", header: "Rating" },
    // { accessorKey: "discountPercentage", header: "Discount Percentage" },
    { accessorKey: "stock", header: "Stock" },
    // { accessorKey: "thumbnail", header: "Thumbnail" },
    //   {
    //     accessorKey: "images",
    //     header: "Images",
    //     cell: ({ row }) => row.original.images.join(", "),
    //   },
    {
      id: "actions",
      header: "Actions",
      size: 190,
      cell: ({ row }) => (
        <section className="flex gap-3">
          <Button
            title="Detail"
            to={"/product/detail/" + row.original.id}
            className="btn-accent btn-xs"
          />
          <Button
            title="Edit"
            to={"/product/form/" + row.original.id}
            className="btn-warning btn-xs"
          />
          <Button
            title="Delete"
            onClick={handleDelete(row.original.id)}
            className="btn-error btn-xs"
          />
        </section>
      ),
    },
  ];
  return columns;
};

export default setupColumns;
