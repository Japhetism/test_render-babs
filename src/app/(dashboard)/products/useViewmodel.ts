import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store"
import { fetchProductCategories } from "@/redux/productCategory";
import { fetchProducts, approveProduct, rejectProduct } from "@/redux/product";
import { fetchBrands } from "@/redux/brand";

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { push } = useRouter();
    const {
        isLoading: isProductCategoryLoading,
        responseData: productCategoryResponseData,
        error: productCategoryError
    } = useSelector((state: RootState) => state.productCategory);

    const {
        isLoading: isProductLoading,
        responseData: productResponseData,
        error: productError
    } = useSelector((state: RootState) => state.product);

    const {
        isLoading: isBrandLoading,
        responseData: brandResponseData,
        error: brandError
    } = useSelector((state: RootState) => state.brand);

    const params = useParams();
    const { productId } = params;

    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState<any>({});
    const [productCategories, setProductCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [formData, setFormData] = useState<any>({});
    const [showModal, setShowModal] = useState<boolean>(false);
    const [rejectionReason, setRejectionReason] = useState<string>("");
    const [modalMessage, setModalMessage] = useState<string>("");
    const [modalType, setModalType] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>("");
    
    const navigateToProductDetails = (productId: string) => {
        push(`/products/view/${productId}`);
    }

    const navigateToProductCategories = () => {
        push("/products/categories");
    }

    const handleUpdateProduct = () => {

    }

    const handleProductRejection = () => {
        setLoading(true);
        const rejectionData = {
            id: productId,
            rejectionReason: rejectionReason
        }
        dispatch(rejectProduct(rejectionData)).then((action) => {
            if (rejectProduct.fulfilled.match(action)) {
                setShowModal(false);
                setModalMessage("Product was rejected successfully!");
                setModalType("message");
                setTimeout(() => {
                    navigateToNextPendingProduct();
                }, 5000);
            }
        })
    }

    const handleProductApproval = () => {
        dispatch(approveProduct(productId)).then((action) => {
            if (approveProduct.fulfilled.match(action)) {
                setModalMessage("Product was approved successfully!");
                setModalType("message");
                setTimeout(() => {
                    navigateToNextPendingProduct();
                }, 5000);
            }
        })
    }

    const navigateToNextPendingProduct = () => {
        const allPendingProducts = products.products;
        if (allPendingProducts.length) {
            const currentIndex = allPendingProducts.findIndex((product: any) => product._id === productId);
            if (currentIndex + 1 < allPendingProducts.length) {
                const nextProductId = allPendingProducts[currentIndex + 1]._id;
                navigateToProductDetails(nextProductId);
            } else {
                push('/products');
            }
        }
    }

    useEffect(() => {
        const fetchProductCategoriesData = async () => {
            try {
                await dispatch(fetchProducts(`page=1&perPage=1000`));
                await dispatch(fetchProductCategories());
                await dispatch(fetchBrands());
            } catch (error) {
                console.error('Failed to fetch product categories data:', error);
            }
        }

        fetchProductCategoriesData();
    }, [dispatch, productId]);

    useEffect(() => {
        if(!isProductLoading && !isProductCategoryLoading && !isBrandLoading) {
            if (productCategoryResponseData && productCategoryResponseData?.length) {
                setProductCategories(productCategoryResponseData);
                setActiveCategory(productCategoryResponseData[0]?._id);
            }

            if (brandResponseData && brandResponseData?.length) {
                setBrands(brandResponseData);
            }
    
            if (productResponseData && productResponseData) {
                console.log("product res ", productResponseData);
                setProducts(productResponseData);
                if (productId) {
                    const currentProduct = productResponseData?.products?.find((product: any) => product._id === productId);
                    setFormData(currentProduct);
                }
            }
        }

        if (productCategoryError || productError || brandError) {
            setErrorMessage(productCategoryError || productError || brandError);
        }
    }, [productCategoryResponseData, productResponseData, brandResponseData, isProductLoading, isProductCategoryLoading, isBrandLoading, brandError, productError, productCategoryError]);

    return {
        formData: formData,
        brands: brands,
        products: products,
        productCategories: productCategories,
        activeCategory: activeCategory,
        isLoading: isProductLoading || isProductCategoryLoading,
        errorMessage: errorMessage,
        showModal: showModal,
        rejectionReason: rejectionReason,
        modalMessage: modalMessage,
        modalType: modalType,
        setErrorMessage: setErrorMessage,
        setModalType: setModalType,
        setModalMessage: setModalMessage,
        setShowModal: setShowModal,
        setRejectionReason: setRejectionReason,
        setActiveCategory: setActiveCategory,
        handleProductApproval: handleProductApproval,
        handleProductRejection: handleProductRejection,
        handleUpdateProduct : handleUpdateProduct,
        navigateToProductDetails: navigateToProductDetails,
        navigateToProductCategories: navigateToProductCategories,
    }
}