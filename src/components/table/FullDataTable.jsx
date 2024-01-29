import {
	useEffect,
	useState
} from "react"

import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./BasicTable"

import Button from "../form/Button"

/**
 * Versi datatable yang memiliki paginasi, sort, dan search preconfigured
 *
 * @param {object} 		props
 * @param {object[]} 	props.data 				- data row yang akan dirender di datatable
 * @param {object[]} 	props.columns 			- definisi kolom untuk datatable
 * @param {boolean} 	props.isLoading 		- state yang menentukan sedang fetching data atau tidak
 * @param {number} 		props.totalData 		- total row data diluar batas paginasi
 * @param {any} 		[props.refreshTrigger] 	- state yang akan men-trigger refresh data ketika valuenya berubah
 * @param {GetTableData} props.getTableData 	- fungsi untuk mendapatkan
 */
function FullDataTable({
	data,
	columns,
	isLoading,
	totalData,
	refreshTrigger = undefined,
	getTableData,
}) {
	const [pagination, setPagination] = useState({
		pageSize: 10,
		pageIndex: 0,
	});

	const { pageSize, pageIndex } = pagination;

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),

		manualPagination: true,
		state: { pagination },
		pageCount: Math.round(totalData / pagination.pageSize),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
	})

	useEffect(() => {
		getTableData({
			pageSize,
			pageIndex,
			pageSkip: pageSize * pageIndex
		})
	}, [refreshTrigger, pageSize, pageIndex])

	return (
		<>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const receivedSize = header.column.getSize()
								const colWidth = receivedSize != 150 ? receivedSize : undefined // 150 default size
								return (
									<TableHead key={header.id} width={colWidth}>
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					// Icon={ChevronLeft}
					title="Prev"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage() || isLoading}
					className="btn-outline btn-sm"
				/>
				<Button
					// Icon={ChevronRight}
					title="Next"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage() || isLoading}
					className="btn-outline btn-sm"
				/>
			</div>
		</>
	)
}

export default FullDataTable