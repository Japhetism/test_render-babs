import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"
import { fetchVendors, addVendor, updateVendor, fetchVendorProducts } from "@/redux/vendor";
import { useRouter, useParams } from "next/navigation";
import { z } from "zod";
import { formatFormDataErrors } from "@/utils/formatter";
import { fetchProductCategories } from "@/redux/productCategory";

const vendorSchema = z.object({
  name: z.string({ required_error: "name is required" }).min(2, "name must be at least 2 characters long"),
  address: z.string({ required_error: "address is required" }).min(2, "address must be at least 2 characters long"),
  description: z
    .string({ required_error: "description is required" })
    .min(10, "description must be at least 10 characters long"),
  email: z.string({ required_error: "email is required" }).email("Email address must be valid"),
  longitude: z.string({ required_error: "longitude is required" }).min(1, "longitude is required"),
  latitude: z.string({ required_error: "latitude is required" }).min(1, "latitude is required"),
  noOfStaff: z
    .string({ required_error: "number of staff is required" })
    .min(1, "number of staffs is required")
    .regex(/^\d+$/, "number of staff must be a whole number")
});

const initialFormData = {
  name: "",
  address: "",
  logo: "",
  description: "",
  email: "",
  noOfStaff: "",
  longitude: "",
  latitude: "",
  geolocation: [],
  createdAt: "",
  updatedAt: "",
}

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { replace, push } = useRouter();
    const { isLoading, responseData, error, redirect } = useSelector((state: RootState) => state.vendor);
    const {
      isLoading: isProductCategoryLoading,
      responseData: productCategoryResponseData,
      error: productCategoryError
  } = useSelector((state: RootState) => state.productCategory);
    const [formData, setFormData] = useState(initialFormData);
    const [formDataError, setFormDataError] = useState(initialFormData);
    const [products, setProducts] = useState([]);
    const [isProductLoading, setIsProductLoading] = useState<boolean>(false);
    const [activeCategory, setActiveCategory] = useState<string>("");

    const [vendors, setVendors] = useState<any>([]);
    const [productCategories, setProductCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    const params = useParams();
    const { vendorId } = params;

    useEffect(() => {
      const fetchData = async () => {
        try {
            await dispatch(fetchVendors());
          } catch (error) {
            console.error('Failed to fetch vendors:', error);
          }
      };
  
      fetchData();
      handleGetVendorProducts(vendorId);
      handleGetProductCategories();
    }, [dispatch, vendorId]);


    useEffect(() => {
        if (responseData && responseData?.length > 0) {
            setVendors(responseData);
            if (vendorId) {
              const currentVendor = responseData?.find((vendor: any) => vendor._id === vendorId)
              setFormData({...currentVendor, latitude: currentVendor.geolocation[1], longitude: currentVendor.geolocation[0]});
            }
        }
        if (error) {
          setErrorMessage(error);
        }
    }, [responseData, error]);

    useEffect(() => {
      if (redirect) push("/vendors");
    }, [redirect]);

    const handleCreateVendor = async (e: React.FormEvent) => {
      e.preventDefault();
      setFormDataError(initialFormData);
      
      const validationResponse = vendorSchema.safeParse(formData);

      if (!validationResponse.success) {
        const formattedErrors = formatFormDataErrors(validationResponse.error, initialFormData);
        setFormDataError(formattedErrors);
        return;
      }
      await dispatch(addVendor({...formData, geolocation: `${formData.longitude},${formData.latitude}`})).unwrap();
    }

    const handleGetVendorProducts = (vendorId: string) => {
      setIsProductLoading(true);
      dispatch(fetchVendorProducts(vendorId)).then((action) => {
        if (fetchVendorProducts.fulfilled.match(action)) {
          setProducts(action.payload.data);
          setIsProductLoading(false);
        } else {
          setIsProductLoading(false);
        }
      })
    }

    const handleGetProductCategories = () => {
      setIsProductLoading(true);
      dispatch(fetchProductCategories()).then((action) => {
        if (fetchProductCategories.fulfilled.match(action)) {
          setProductCategories(action.payload.data);
          setActiveCategory(action.payload.data[0]._id);
          setIsProductLoading(false);
        } else {
          setIsProductLoading(false);
        }
      })
    }

    const handleUpdateVendor = async (e: React.FormEvent) => {
      e.preventDefault();
      setFormDataError(initialFormData);
      
      const validationResponse = vendorSchema.safeParse(formData);

      if (!validationResponse.success) {
        const formattedErrors = formatFormDataErrors(validationResponse.error, initialFormData);
        setFormDataError(formattedErrors);
        return;
      }
      await dispatch(updateVendor({...formData, geolocation: `${formData.longitude},${formData.latitude}`})).unwrap();
    }

    const navigateToVendorDetails = async (vendorId: string) => {
      replace(`/vendors/view/${vendorId}`);
    }

    const navigateToEditVendor = async () => {
      replace(`/vendors/edit/${vendorId}`);
    }

    const navigateToProductDetails = (productId: string) => {
      push(`/products/view/${productId}`);
    }

    return {
        isLoading: isLoading,
        isProductLoading: isProductLoading,
        errorMessage: errorMessage,
        vendors: vendors,
        formData: formData,
        formDataError: formDataError,
        products: products,
        productCategories: productCategories,
        activeCategory: activeCategory,
        setFormData: setFormData,
        setErrorMessage: setErrorMessage,
        setActiveCategory: setActiveCategory,
        handleCreateVendor: handleCreateVendor,
        handleUpdateVendor: handleUpdateVendor,
        navigateToVendorDetails: navigateToVendorDetails,
        navigateToEditVendor: navigateToEditVendor,
        navigateToProductDetails: navigateToProductDetails,
    }
}