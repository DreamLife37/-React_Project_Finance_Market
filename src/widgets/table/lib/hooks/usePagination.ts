import {useMemo} from "react";
import {ModelReportDataType} from "widgets/table/model/types";

export const usePagination = (data: ModelReportDataType[], pageSize: number, currentPage: number) => {

    const totalPages = useMemo(() => Math.ceil(data.length / pageSize), [
        data.length,
        pageSize
    ]);

    const currentData = data.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize)

    return {currentData, currentPage, totalPages};
}

