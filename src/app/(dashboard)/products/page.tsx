"use client"

import Main from './Main';
import { useViewModel } from './useViewmodel';

interface PageProps {
  searchParams: {
    page?: string;
  };
}

const Page: React.FC<PageProps> = ({ searchParams }) => {

  const {
    isLoading,
    products,
    productCategories,
    activeCategory,
    errorMessage,
    setErrorMessage,
    setActiveCategory,
    navigateToProductDetails,
    navigateToProductCategories,
  } = useViewModel();

  return <Main
    navigateToProductDetails={navigateToProductDetails}
    navigateToProductCategories={navigateToProductCategories}
    setActiveCategory={setActiveCategory}
    activeCategory={activeCategory}
    isLoading={isLoading}
    categories={productCategories}
    productsData={products}
    errorMessage={errorMessage}
    setErrorMessage={setErrorMessage}
  />;
};

export default Page;
