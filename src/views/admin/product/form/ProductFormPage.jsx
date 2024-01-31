import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import errorHandler from "~/lib/errorHandler";
import {
  createProduct,
  getProductDetail,
  updateProduct,
} from "~/services/product-service";
import useAuthStore from "~/stores/auth-store";
import {
  Button,
  Card,
  FileInput,
  LoadingDots,
  PageTitle,
  TextInput,
} from "~/components";
import { ChevronLeft } from "lucide-react";

const ProductFormPage = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  // const [multipleFile, setMultipleFile] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const authUserId = useAuthStore((state) => state.user.id);
  const navigate = useNavigate();

  const [isFetching, setIsFetching] = useState(false);
  // const [productDetail, setProductDetail] = useState(
  //   /** @type {Products} */ ({})
  // );

  // const regFloat = /[-+]?\d*[.]\d+|\d+/g;
  const regString = /[^\d.]/g;

  const replaceToFloat = (field, event) => {
    const { value } = event.target;
    setValue(field, value.replace(regString, ""));
  };

  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
  const imageType = [".jpg", ".png", ".jpeg"];

  /**@param {object} fileUpload */
  const handleUploadFile = (field, fileUpload) => {
    // console.log(fileUpload);
    let uploaded = [];

    switch (field) {
      case "thumbnail":
        uploaded = [];
        break;
      default:
        uploaded = [...images];
        break;
    }
    for (let i = 0; i < fileUpload.length; i++) {
      const file = fileUpload[i];
      if (!file.type.match(imageTypeRegex)) {
        errorHandler("images are not of valid type!");
        return;
      }

      const indexFile = uploaded.findIndex((f) => f == file.name);
      if (indexFile == -1) {
        uploaded.push(file.name);
      }

      switch (field) {
        case "thumbnail":
          setThumbnail(uploaded.toString());
          // setValue("thumbnail", uploaded.toString());
          break;
        default:
          setImages(uploaded);
          // setValue("images", uploaded);
          break;
      }
    }
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    brand: yup.string().required(),
    category: yup.string().required(),
    price: yup.string().required(),
    discountPercentage: yup.string().required(),
    stock: yup.string().required(),
    rating: yup.string().required(),
    thumbnail: yup.string().required(),
    // images: yup.array(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // defaultValues: validationSchema.cast(productDetail),
    resolver: yupResolver(validationSchema),
  });

  // /** @param {ProductFormObject} formData */
  const onSubmit = async (formData) => {
    console.log("images", images);
    console.log("thumbnail", thumbnail);

    // setValue("images", images);
    // setValue("thumbnail", thumbnail.toString());

    const payload = {
      ...formData,
      thumbnail: thumbnail,
      images: images,
      userId: authUserId,
    };

    try {
      setIsSubmitting(true);

      if (isEditing) await updateProduct(id, payload);
      else await createProduct(payload);

      toast.success(`Successfully ${isEditing ? "updated" : "created"}!`);
      // navigate('product/list');
      navigate(-1);
    } catch (err) {
      errorHandler(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchEditedData = async () => {
    try {
      setIsFetching(true);
      const fetchedData = await getProductDetail(id);
      // setProductDetail(fetchedData);
      setValue("title", fetchedData.title);
      setValue("brand", fetchedData.brand);
      setValue("category", fetchedData.category);
      setValue("description", fetchedData.description);
      setValue("discountPercentage", fetchedData.discountPercentage);
      setValue("rating", fetchedData.rating);
      setValue("price", fetchedData.price);
      setValue("stock", fetchedData.stock);
      // setValue("thumbnail", fetchedData.thumbnail);
      // setValue("images", fetchedData.images);

      setThumbnail(fetchedData.thumbnail);
      setImages(fetchedData.images);
    } catch (err) {
      errorHandler(err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (isEditing) fetchEditedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageTitle title={isEditing ? "Edit Product" : "Create Product"} />
      <Card>
        <Card.Header>
          <Card.Title title="Product Form" />

          <LoadingDots label="Please wait..." isLoading={isFetching} />

          <Button title="Back" Icon={ChevronLeft} to="/article/list" />
        </Card.Header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 w-[700px] max-w-full"
        >
          <TextInput
            {...register("title")}
            error={errors.title?.message}
            label="Article Title"
          />
          <TextInput
            {...register("brand")}
            error={errors.brand?.message}
            label="Brand"
          />
          <TextInput
            {...register("category")}
            error={errors.category?.message}
            label="Category"
          />
          <TextInput
            {...register("price")}
            error={errors.price?.message}
            label="Price"
            onChange={(e) => replaceToFloat("price", e)}
            // type="number"
            // min={0}
          />
          <TextInput
            {...register("discountPercentage")}
            error={errors.discountPercentage?.message}
            label="Discount Percentage"
            onChange={(e) => replaceToFloat("discountPercentage", e)}
          />
          <TextInput
            {...register("rating")}
            error={errors.rating?.message}
            label="Rating"
            onChange={(e) => replaceToFloat("rating", e)}
          />
          <TextInput
            {...register("stock")}
            error={errors.stock?.message}
            label="Stock"
            onChange={(e) => replaceToFloat("stock", e)}
          />
          <TextInput
            {...register("description")}
            error={errors.description?.message}
            label="Description"
          />
          <FileInput
            {...register("thumbnail")}
            error={errors.thumbnail?.message}
            label="Thumbnail"
            accept={imageType.join(", ")}
            // multiple
            onChange={(e) => {
              const { files } = e.target;
              handleUploadFile("thumbnail", files);
            }}
          />
          <FileInput
            // {...register("images")}
            // error={errors.images?.message}
            label="Images"
            accept={imageType.join(", ")}
            multiple
            onChange={(e) => {
              const { files } = e.target;
              handleUploadFile("images", files);
            }}
          />
          <Button
            title="Submit"
            loading={isSubmitting || isFetching}
            className="btn-primary btn-wide mt-4"
          />
        </form>
      </Card>
    </>
  );
};

export default ProductFormPage;
