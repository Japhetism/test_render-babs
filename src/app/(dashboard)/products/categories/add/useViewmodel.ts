import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store"
import { addProductCategory } from "@/redux/productCategory";
import { formatFormDataErrors } from "@/utils/formatter";
import { productCategorySchema } from "@/utils/validator";
import { initialProductCategoryFormData } from "@/utils/helper";

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push } = useRouter();
    
    const [formData, setFormData] = useState(initialProductCategoryFormData)
    const [formDataError, setFormDataError] = useState(initialProductCategoryFormData);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigateToProductCategories = () => {
        push("/products/categories");
    }

    const handleCreateProductCategory = async (e: React.FormEvent) => {
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
            const formDataArray = [formData]
            const action = await dispatch(addProductCategory(formDataArray));

            if (addProductCategory.fulfilled.match(action)) {
                if (action.payload?.hasError) {
                    setErrorMessage(action.payload.message || "Unable to create product category. Please try again.");
                } else {
                    setSuccessMessage("Product category created successfully!");
                    setTimeout(() => {
                        navigateToProductCategories();
                    }, 2000);
                }
            } else {
                setErrorMessage("Unable to create product category. Please try again.");
            }
        } catch (error) {
            console.error('Error creating product category:', error);
            setErrorMessage("Unable to create product category. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading: isLoading,
        errorMessage: errorMessage,
        formData: formData,
        formDataError: formDataError,
        successMessage: successMessage,
        setFormData: setFormData,
        setSuccessMessage: setSuccessMessage,
        setErrorMessage: setErrorMessage,
        handleCreateProductCategory: handleCreateProductCategory
    }
}