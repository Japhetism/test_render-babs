import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store"
import { deleteProductCategory, fetchProductCategories } from "@/redux/productCategory";

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push } = useRouter();
    const {
        isLoading: isProductCategoryLoading,
        responseData: productCategoryResponseData,
        error: productCategoryError
    } = useSelector((state: RootState) => state.productCategory);

    const [productCategories, setProductCategories] = useState([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [categoryToDelete, setCategoryToDelete] = useState<any>({});
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
    
    useEffect(() => {
        const fetchProductCategoriesData = async () => {
            try {
                await dispatch(fetchProductCategories());
            } catch (error) {
                console.error('Failed to fetch product categories data:', error);
            }
        }

        fetchProductCategoriesData();
    }, [dispatch]);

    useEffect(() => {
        if (productCategoryResponseData?.length) {
            setProductCategories(productCategoryResponseData);
        }
    }, [productCategoryResponseData]);

    const navigateToCategoriesDetails = (categoryId: string) => {
        push(`/products/categories/view/${categoryId}`);
    }

    const handleShowDeleteModal = (productCategory: any) => {
        console.log("category to delet ", productCategory);
        setCategoryToDelete(productCategory);
        setShowModal(true);
    }

    const handleHideDeleteModal = () => {
        setCategoryToDelete({});
        setShowModal(false);
    }

    const handleDeleteProductCategory = async () => {
        console.log("Category id delete ", categoryToDelete?._id);
        setIsDeleteLoading(true);
        setErrorMessage("");
        setSuccessMessage("");
        try {
            const action = await dispatch(deleteProductCategory(categoryToDelete?._id));

            if (deleteProductCategory.fulfilled.match(action)) {
                if (action.payload?.hasError) {
                    setErrorMessage(action.payload.message || "Unable to delete product category. Please try again.");
                } else {
                    setSuccessMessage("Product category deleted successfully!");
                    setShowModal(false);
                    setIsDeleteLoading(false);
                    await dispatch(fetchProductCategories());
                    setTimeout(() => {
                        setErrorMessage("");
                        setSuccessMessage("");
                    }, 3000);
                }
            } else {
                setErrorMessage("Unable to delete product category. Please try again.");
            }
        } catch (error) {
            console.error('Error deleting product category:', error);
            setErrorMessage("Unable to delete product category. Please try again.");
        } finally {
            setIsDeleteLoading(false);
        }
    }

    return {
        isLoading: isProductCategoryLoading,
        isDeleteLoading: isDeleteLoading,
        errorMessage: productCategoryError || errorMessage,
        successMessage: successMessage,
        categories: productCategories,
        showModal: showModal,
        categoryToDelete: categoryToDelete,
        setSuccessMessage: setSuccessMessage,
        setErrorMessage: setErrorMessage,
        handleHideDeleteModal: handleHideDeleteModal,
        handleShowDeleteModal: handleShowDeleteModal,
        handleDeleteProductCategory: handleDeleteProductCategory,
        navigateToCategoriesDetails: navigateToCategoriesDetails,
    }
}