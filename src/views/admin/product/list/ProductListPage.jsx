import { Plus } from "lucide-react";
import { useState } from "react";
import {
  Button,
  Card,
  FullDataTable,
  LoadingDots,
  PageTitle,
} from "~/components";
import errorHandler from "~/lib/errorHandler";
import { deleteProduct, getProductList } from "~/services/product-service";
import setupColumns from "./_setupColumn";
import { confirmDeletePopup } from "~/lib/popup";

const ProductListPage = () => {
  const [tableData, setTableData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleRefresh, setToggleRefresh] = useState(false);

  /**@type {GetTableData} */
  const getTableData = async ({ pageSize, pageSkip, searchValue }) => {
    try {
      const list = await getProductList({
        pagination: {
          limit: pageSize,
          skip: pageSkip,
        },
        search: searchValue,
      });
      setTableData(list.products);
      setTotalData(list.total);
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  /**@param {string|number} id */
  const handleDelete = (id) => () => {
    confirmDeletePopup({
      onConfirm: () => deleteProduct(id),
      onSuccess: () => setToggleRefresh(!toggleRefresh),
    });
  };

  const columns = setupColumns({ handleDelete });

  return (
    <>
      <PageTitle title="Product List" />
      <Card>
        <Card.Header>
          <Card.Title title="Product Table" />
          <LoadingDots label="Loading..." isLoading={isLoading} />
          <Button
            title="New Product"
            to="/product/form"
            Icon={Plus}
            className="btn-primary"
          />
        </Card.Header>
        <FullDataTable
          data={tableData}
          isLoading={isLoading}
          totalData={totalData}
          refreshTrigger={toggleRefresh}
          getTableData={getTableData}
          columns={columns}
        />
      </Card>
    </>
  );
};

export default ProductListPage;
