import { useState } from "react";

export function usePagination() {
	const [pagination, setPagination] = useState({
		pageSize: 10,
		pageIndex: 0,
	});

	const { pageSize, pageIndex } = pagination;

	return {
		pagination,
		setPagination,
		limit: pageSize,
		skip: pageSize * pageIndex,
	};
}