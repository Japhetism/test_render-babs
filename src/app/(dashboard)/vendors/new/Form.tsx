"use client";

import { Button, ProductUploadWrapper } from "@/components";
import FormMessage from "@/components/auth/FormMessage";
import { FileUpload } from "@/components/productUpload";
import { useViewModel } from "../useViewmodel";

interface IForm {
  type?: string;
  btnText?: string
}

export default function Form({ btnText = "Add Vendor", type = "new" }: IForm) {
  console.log("vendor form type is ", type);
  const {
    formData,
    formDataError,
    setFormData,
    errorMessage,
    isLoading,
    handleCreateVendor,
    handleUpdateVendor,
  } = useViewModel();

  return (
    <form onSubmit={type === "new" ? handleCreateVendor : handleUpdateVendor}>
      <div className="grid md:grid-cols-2 gap-4 pb-4">
        <div className="flex flex-col gap-2">
          <ProductUploadWrapper title="Vendor Info">
            <div className="flex flex-col">
              <input
                type="text"
                className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                placeholder="Vendor name"
                name="name"
                disabled={isLoading}
                defaultValue={formData?.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {formDataError?.name && <span className="text-red-500 text-sm mt-1">{formDataError?.name}</span>}
            </div>
            <div className="flex flex-col">
              <textarea
                rows={7}
                placeholder="About Vendor"
                className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
                name="description"
                disabled={isLoading}
                defaultValue={formData?.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
              {formDataError?.description && <span className="text-red-500 text-sm mt-1">{formDataError?.description}</span>}
            </div>
          </ProductUploadWrapper>
          <ProductUploadWrapper title="Vendor Logo">
            <div className="grid grid-cols-1 gap-1 items-stretch">
              <div className="flex flex-col">
                <FileUpload name="logo" onFilesSelected={(file) => setFormData({...formData, logo: file})} />
                {formDataError?.logo && <span className="text-red-500 text-sm mt-1">{formDataError?.logo}</span>}
              </div>
            </div>
          </ProductUploadWrapper>
        </div>
        <div className="flex flex-col gap-2">
          <ProductUploadWrapper title="Vendor Details">
            <div className="flex flex-col">
              <input
                type="email"
                className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                placeholder="Vendor email"
                name="email"
                disabled={isLoading}
                defaultValue={formData?.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {formDataError?.email && <span className="text-red-500 text-sm mt-1">{formDataError?.email}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                placeholder="Vendor address"
                name="address"
                disabled={isLoading}
                defaultValue={formData?.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
              {formDataError?.address && <span className="text-red-500 text-sm mt-1">{formDataError?.address}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                placeholder="Number of staff"
                name="noOfStaff"
                disabled={isLoading}
                defaultValue={formData?.noOfStaff}
                onChange={(e) => setFormData({...formData, noOfStaff: e.target.value})}
              />
              {formDataError?.noOfStaff && <span className="text-red-500 text-sm mt-1">{formDataError?.noOfStaff}</span>}
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <input
                  type="number"
                  className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                  placeholder="Longitude"
                  name="longitude"
                  disabled={isLoading}
                  defaultValue={formData?.geolocation?.[0]}
                  onChange={(e) => setFormData({...formData, longitude: e.target.value})}
                />
                {formDataError?.longitude && <span className="text-red-500 text-sm mt-1">{formDataError?.longitude}</span>}
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                  placeholder="Latitude"
                  name="latitude"
                  disabled={isLoading}
                  defaultValue={formData?.geolocation?.[1]}
                  onChange={(e) => setFormData({...formData, latitude: e.target.value})}
                />
                {formDataError?.latitude && <span className="text-red-500 text-sm mt-1">{formDataError?.latitude}</span>}
              </div>
            </div>
          </ProductUploadWrapper>
        </div>
      </div>
      <FormMessage loading={isLoading} errorMessage={errorMessage} />
      <div className="flex justify-center pt-4">
        <Button
          loading={isLoading}
          type="submit"
          className="w-full md:w-60 bg-primary_100 hover:bg-opacity-80 xl:py-6 lg:py-4 md:py-3 py-2 xl:gap-9 lg:gap-5 md:gap-4 gap-3 mt-auto"
          onClick={() => {}}
        >
          <span className="text-white font-barlow xl:text-2xl md:text-xl text-lg font-medium">
            {btnText}
          </span>
        </Button>
      </div>
    </form>
  );
}
