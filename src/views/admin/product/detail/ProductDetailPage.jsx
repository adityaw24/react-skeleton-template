import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, LoadingDots, PageTitle } from "~/components";
import errorHandler from "~/lib/errorHandler";
import { getProductDetail } from "~/services/product-service";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [isFetching, setIsFetching] = useState(true);
  const [productDetail, setProductDetail] = useState(
    /** @type {Products} */ ({})
  );

  const fetchProduct = async () => {
    try {
      const detail = await getProductDetail(id);
      setProductDetail(detail);
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <PageTitle title="Product Detail" />

      <Card>
        <Card.Header>
          <Card.Title title="Product Form" />

          <LoadingDots label="Please wait..." isLoading={isFetching} />

          <Button title="Back" Icon={ChevronLeft} to="/article/list" />
        </Card.Header>

        <section className="grid gap-4 lg:grid-cols-4">
          {/* {productDetail?.thumbnail && (
            <div className="">
              <img
                className="h-full w-auto max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src={productDetail?.thumbnail}
                alt=""
              />
            </div>
          )} */}
          {/* <div
            className={`lg:col-span-${productDetail?.thumbnail ? "3" : "4"}`}
          > */}
          {/* <section className="grid gap-4 lg:grid-cols-4"> */}
          {/* <h6>ID</h6>
            <p className="lg:col-span-3">: {productDetail?.id}</p> */}
          <h6>Title</h6>
          <p className="lg:col-span-3">: {productDetail?.title}</p>
          <h6>Brand</h6>
          <p className="lg:col-span-3">: {productDetail?.brand}</p>
          <h6>Category</h6>
          <p className="lg:col-span-3">: {productDetail?.category}</p>
          <h6>Price</h6>
          <p className="lg:col-span-3">: {`USD ${productDetail?.price}`}</p>
          <h6>Rating</h6>
          <p className="lg:col-span-3">: {productDetail?.rating}</p>
          <h6>Stock</h6>
          <p className="lg:col-span-3">: {productDetail?.stock}</p>
          <h6>Discount</h6>
          <p className="lg:col-span-3">
            : {`${productDetail?.discountPercentage} %`}
          </p>
          <h6>Description</h6>
          <p className="lg:col-span-3">: {productDetail?.description}</p>

          <div className="col-span-4 mt-8">
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={productDetail?.thumbnail}
              alt=""
            />
          </div>
        </section>
        {/* </div> */}
        {/* </section> */}
        {productDetail?.images && (
          <>
            <hr className="divide-x my-4" />
            {/* <section className="grid gap-4 lg:grid-cols-8"></section>
            <div className="">Images</div>
            <div className="lg:col-span-7"> */}
            <div className="grid grid-cols-5 gap-4">
              {productDetail?.images.map((image) => {
                return (
                  <img
                    key={image}
                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                    src={image}
                    alt=""
                    onClick={() => {
                      setProductDetail({
                        ...productDetail,
                        thumbnail: image,
                      });
                    }}
                  />
                );
              })}
              {/* </div> */}
            </div>
          </>
        )}
      </Card>
    </>
  );
};

export default ProductDetailPage;
