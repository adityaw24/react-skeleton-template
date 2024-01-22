<script>
	import jQuery from 'jquery';
	import { onMount } from 'svelte';
	import initDatatable from '~/lib/initDatatable'

	/** @type {HTMLTableElement} */
	let tableElement;

	/** @type {*} */
	let datatableInstance;

	const tableColumns = [
		{ data: 'id' },
		{ data: 'title' },
	]

	async function createDatatable () {
		await initDatatable()

		datatableInstance = jQuery(tableElement).DataTable({
			serverSide: true,

			// property ajax digunakan untuk mengambil data dari server
			// @ts-ignore
			ajax: async (data, callback, settings) => {

				// mapping data dari datatable untuk penyesuaian dengan API dari backend
				const sortBy = tableColumns[data.order[0].column].data
				const sortDirection = data.order[0].dir
				const pageStartFrom = data.start
				const pageLength = data.length
				const search = data.search.value;

				// masukkan data yang sudah dimapping ke dalam querystring
				const queryString = new URLSearchParams({
					q: search,
					limit: pageLength.toString(),
					skip: pageStartFrom.toString()
				})

				// call API beserta dengan query string yang telah dibuat
				const result = await fetch(`https://dummyjson.com/products/search?` + queryString.toString())
				.then(r => r.json());

				// panggil callback function dari datatable beserta data dari api untuk merender ulang table
				callback({
					draw: data.draw,
					data: result.products, // masukkan data array dari API ke dalam property data
					recordsFiltered: result.total,
					recordsTotal: result.total,
				});
			},
			columns: tableColumns
		});
	}

	onMount(() => {
		createDatatable()
		return () => datatableInstance.destroy(true)
	})
</script>

<table id="table" bind:this={tableElement} class="w-full">
	<thead>
		<tr>
			<th>ID</th>
			<th>Title</th>
		</tr>
	</thead>
</table>