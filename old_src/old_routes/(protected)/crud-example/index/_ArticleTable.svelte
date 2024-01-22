<script>
	import { onMount } from "svelte";
	import jQuery from "jquery";
	import initDatatable from "~/lib/initDatatable";
	import { deleteArticle, getArticleList } from "~/services/article-service";
    import { confirmDeletePopup } from "~/lib/swal";

	/** @type {HTMLTableElement} */
	let tableElement;

	/** @type {*} */
	let datatableInstance;

	const tableColumns = [
		{ data: "id" },
		{ data: "title" },
		{ data: "userId" },
		{ data: "tags", render: renderTags },
		{ data: "reactions" },
		{ data: "id", render: renderActions },
	];

	/**
	 * fungsi untuk merender data tag dari array ke string
	 * @param {string[]} tags
	 */
	function renderTags(tags) {
		return tags.join(", ");
	}

	/**
	 * fungsi untuk merender tombol action untuk tiap row
	 * @param {string|number} id
	 */
	function renderActions(id) {
		return `<section class="flex items-center gap-3">
			<a class="btn btn-xs btn-accent" href="/crud-example/detail/${id}">
				Detail
			</a>
			<a class="btn btn-xs btn-warning" href="/crud-example/edit/${id}">
				Edit
			</a>
			<button class="btn btn-xs btn-error delete-button" delete-id="${id}">
				Delete
			</button>
		</section>`;
	}

	/**
	 * fungsi yang akan terpanggil saat tombol delete pada suatu row ditekan
	 * @param {*} event
	 */
	function handleDelete(event) {
		const deleteID = event.target.getAttribute("delete-id")

		confirmDeletePopup({
			onConfirm: async () => {
				await deleteArticle(deleteID)
			},
			onSuccess: () => {
				datatableInstance.ajax.reload()
			}
		})
	}

	async function createDatatable() {
		// bind datatable dengan jquery
		await initDatatable();

		// proses pembuatan instance datatable beserta konfigurasinya
		datatableInstance = jQuery(tableElement).DataTable({
			serverSide: true,
			processing: true,

			// property ajax digunakan untuk mengambil data dari server
			// @ts-ignore
			ajax: async (data, callback) => {
				// mapping data dari datatable untuk penyesuaian dengan API dari backend
				const sortBy = tableColumns[data.order[0].column].data;
				const sortDirection = data.order[0].dir;
				const pageStartFrom = data.start;
				const pageLength = data.length;
				const search = data.search.value;

				// masukkan data yang sudah dimapping ke dalam querystring, sesuaikan dengan property di API
				const queryString = new URLSearchParams({
					q: search,
					limit: pageLength.toString(),
					skip: pageStartFrom.toString(),
				});

				// call API beserta dengan query string yang telah dibuat
				const rawResult = await getArticleList(queryString);
				const result = rawResult.data;

				// panggil callback function dari datatable beserta data dari api untuk merender ulang table
				callback({
					draw: data.draw,
					data: result.posts, // masukkan data array dari API ke dalam property data
					recordsFiltered: result.total,
					recordsTotal: result.total,
				});
			},
			columns: tableColumns,
		});

		// bind event click tombol delete pada tiap row dengan fungsi handleDelete
		datatableInstance.on("click", ".delete-button", handleDelete);
	}

	onMount(() => {
		// jalankan proses pembuatan datatable saat mounting
		createDatatable();

		// hapus datatable ketika unmounting (ketika pindah halaman / ketika hot reload saat development)
		return () => datatableInstance.destroy(true);
	});
</script>

<table id="table" bind:this={tableElement} class="w-full">
	<thead>
		<tr>
			<th>ID</th>
			<th>Title</th>
			<th>User ID</th>
			<th>Tags</th>
			<th>Reactions</th>
			<th>Actions</th>
		</tr>
	</thead>
</table>
