"use client";

import FormDataLoader from "@/components/loader/form-data";
import ImageFetcher from "@/components/imageFetcher";
import { formatDateTime } from "@/utils/formatter";
import { useViewModel } from "../../useViewmodel";
import { Button, CategoryList, ProductsRunningOut } from "@/components";

export default function page() {

  const {
    isLoading,
    isProductLoading,
    formData,
    products,
    activeCategory,
    productCategories,
    setActiveCategory,
    navigateToEditVendor,
    navigateToProductDetails,
  } = useViewModel();

  console.log("vendor product ", products);

  return (
    <main>
      <div>
        <div className="flex md:flex-row flex-col md:items-center md:justify-between items-start justify-start w-full md:gap-0 gap-4 mb-10">
          <h2 className="xl:text-2xl lg:text-xl text-lg font-semibold text-[#464255]">
            Vendor's Information
          </h2>
          <Button
            type="button"
            loading={false}
            className="bg-primary_100 hover:bg-opacity-80 p-2 px-4 xl:gap-9 lg:gap-5 md:gap-4 gap-3 mt-auto"
            onClick={navigateToEditVendor}
          >
            <span className="text-white font-barlow text-sm font-medium">
              Edit Vendor
            </span>
          </Button>
        </div>
        <div className="flex flex-col bg-white w-full rounded-2xl shadow-sm font-barlow py-7 mb-7 relative">
          <div className="flex w-full items-center py-5">
            <div className='bg-[#FFCB45] bg-opacity-70 z-50 rounded-2xl xl:w-[6px] xl:h-[202px] w-1 lg:h-[120px] md:h-24 h-16 absolute -left-[2px] top-1/2 transform -translate-y-1/2'/>
            {isLoading && <FormDataLoader count={5} />}
            {(!isLoading && formData) && (
              <div className="flex flex-row w-full px-5">
                <div className="flex flex-col w-full px-5">
                  <div className="flex py-1">
                    <div className="font-barlow text-gray-600 w-2/12">
                      <p className="m-0 font-bold">Name:</p>
                    </div>
                    <div className="font-barlow w-2/12 flex flex-row">
                      <p>{formData?.name}</p>
                    </div>
                  </div>
                  <div className="flex py-0.5">
                    <div className="font-barlow text-gray-600 w-2/12">
                      <p className="m-0 font-bold">Email:</p>
                    </div>
                    <div className="font-barlow w-2/12">
                      <a href={`mailto: ${formData?.email}`} className="text-blue-600 hover:underline">{formData?.email}</a>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="font-barlow text-gray-600 w-2/12">
                      <p className="m-0 font-bold">Address:</p>
                    </div>
                    <div className="font-barlow w-2/12">
                      <p>{formData?.address}</p>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="font-barlow text-gray-600 w-2/12">
                      <p className="m-0 font-bold">Number of Staff:</p>
                    </div>
                    <div className="font-barlow w-2/12">
                      <p>{formData?.noOfStaff}</p>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="font-barlow text-gray-600 w-2/12">
                      <p className="m-0 font-bold">Geolocation:</p>
                    </div>
                    <div className="font-barlow w-2/12">
                      <p>{`LON: ${formData?.geolocation[0] ? formData?.geolocation[0] : ""} LAT: ${formData?.geolocation[1] ? formData?.geolocation[1] : ""}`}</p>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="font-barlow text-gray-600 w-2/12">
                      <p className="m-0 font-bold">Date Created:</p>
                    </div>
                    <div className="font-barlow w-2/12">
                      <p>{formatDateTime(formData?.createdAt)}</p>
                    </div>
                  </div>
                  <div className="flex py-1">
                    <div className="font-barlow text-gray-600 w-2/12">
                      <p className="m-0 font-bold">Date Updated:</p>
                    </div>
                    <div className="font-barlow w-2/12">
                      <p>{formatDateTime(formData?.updatedAt)}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-barlow text-gray-600 font-bold w-12/12 mb-5">Logo</p>  
                  <div className="h-40 w-40">
                    <ImageFetcher name={`vendor/${formData?.logo}`} altName={formData?.name} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <CategoryList setActiveCategory={setActiveCategory} activeCategory={activeCategory} isLoading={isLoading} categoriesData={productCategories} />
      </div>
      <div className="mt-20">
        <ProductsRunningOut
          showVendorFilter={false}
          title="Vendor's Products"
          isLoading={isProductLoading}
          data={products}
          allPages={Math.ceil(products.length / products.length)}
          currentPage={1}
          activeCategory={activeCategory}
          navigateToProductDetails={navigateToProductDetails}
          defaultStatus="Approved"
        />
      </div>
    </main>
  );
}
