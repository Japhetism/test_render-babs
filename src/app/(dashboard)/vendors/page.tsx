"use client"

import Main from './Main';
import { useViewModel } from './useViewmodel';

const Page = () => {

  const {
    isLoading,
    vendors,
    errorMessage,
    setErrorMessage,
    navigateToVendorDetails,
  } = useViewModel();

  console.log("vendors from page ", vendors)

  return <Main
    vendors={vendors as any}
    isLoading={isLoading}
    errorMessage={errorMessage}
    setErrorMessage={setErrorMessage}
    navigateToVendorDetails={(id: string) => navigateToVendorDetails(id)}
  />;
};

export default Page;
