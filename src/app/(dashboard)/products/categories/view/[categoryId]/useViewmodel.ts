import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store"
import { fetchProductCategoryById, updateProductCategory } from "@/redux/productCategory";
import { initialProductCategoryFormData } from "@/utils/helper";
import { productCategorySchema } from "@/utils/validator";
import { formatFormDataErrors } from "@/utils/formatter";

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push } = useRouter();
    const {
        isLoading: isProductCategoryLoading,
        responseData: productCategoryResponseData,
        error: productCategoryError
    } = useSelector((state: RootState) => state.productCategory);

    const params = useParams();
    const { categoryId } = params;

    console.log("category id is ", categoryId)

    const [formData, setFormData] = useState<any>(initialProductCategoryFormData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formDataError, setFormDataError] = useState(initialProductCategoryFormData);
    const [productCategories, setProductCategories] = useState([]);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    useEffect(() => {
        const fetchProductCategoryByIdData = async () => {
            try {
                await dispatch(fetchProductCategoryById(categoryId));
            } catch (error) {
                console.error('Failed to fetch product categories data:', error);
            }
        }

        fetchProductCategoryByIdData();
    }, [dispatch, categoryId]);

    useEffect(() => {
        if (productCategoryResponseData?.name) {
            setFormData(productCategoryResponseData);
            setProductCategories(productCategoryResponseData);
        }
    }, [productCategoryResponseData]);

    const navigateToProductCategories = () => {
        push("/products/categories");
    }

    const handleUpdateProductCategory = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationResponse = productCategorySchema.safeParse(formData);
        if (!validationResponse.success) {
            const formattedErrors = formatFormDataErrors(validationResponse.error, initialProductCategoryFormData);
            setFormDataError(formattedErrors);
            return;
        }

        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const action = await dispatch(updateProductCategory(formData));

            if (updateProductCategory.fulfilled.match(action)) {
                if (action.payload?.hasError) {
                    setErrorMessage(action.payload.message || "Unable to update product category. Please try again.");
                } else {
                    setSuccessMessage("Product category updated successfully!");
                    setTimeout(() => {
                        navigateToProductCategories();
                    }, 2000);
                }
            } else {
                setErrorMessage("Unable to update product category. Please try again.");
            }
        } catch (error) {
            console.error('Error updating product category:', error);
            setErrorMessage("Unable to update product category. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading: isProductCategoryLoading || isLoading,
        errorMessage: errorMessage || productCategoryError,
        successMessage: successMessage,
        categories: productCategories,
        formData: formData,
        formDataError: formDataError,
        setSuccessMessage: setSuccessMessage,
        setErrorMessage: setErrorMessage,
        setFormData: setFormData,
        handleUpdateProductCategory: handleUpdateProductCategory,
    }
}