import { useState } from "react";
import { formDataToObject } from "@/functions";
import { FormDataObject } from "@/functions/test";
import { getMockResponse } from "@/mockresponses";

export type FormState = {
  loading: boolean;
  errorMessage: string;
  successMessage: string;
};

export const useFormSubmit = <T>({
  url,
  onComplete,
  hasFile = false,
  headers,
  beforeSubmit = () => true,
  formatFormData
}: {
  url: string;
  onComplete: (data: any, formData: FormDataObject) => void;
  beforeSubmit?: (data: FormDataObject) => boolean;
  hasFile?: boolean | string;
  headers?: { [key: string]: string };
  formatFormData?: (data: FormDataObject) => any;
}) => {
  const [key, setKey] = useState("");
  const [formState, setFormState] = useState({
    loading: false,
    errorMessage: "",
    successMessage: ""
  });

  function setErrorMessage(msg: string) {
    setFormState(prev => ({ ...prev, errorMessage: msg }));
  }
  function reset() {
    setKey(prev => prev + "1");
  }
  function setSuccessMessage(msg: string) {
    setFormState(prev => ({ ...prev, successMessage: msg }));
  }
  function setLoading(loading: boolean) {
    setFormState(prev => ({ ...prev, loading }));
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

    console.log("use mock data ", useMockData);

    e.preventDefault();
    console.log("submitted");

    const formData = new FormData(e.target as HTMLFormElement);
    let jsonData: any = formDataToObject(formData);

    if (formState.loading) return;

    if (!beforeSubmit(jsonData)) return;

    console.log(jsonData);

    setFormState({
      loading: true,
      errorMessage: "",
      successMessage: ""
    });

    try {
      let data;
      let _hasFile: boolean = !!hasFile;
      if (typeof hasFile == "string") _hasFile = formData.get(hasFile) != null;
      if (formatFormData) {
        jsonData = formatFormData(jsonData);
      }
      if (!useMockData) {
        const response = await fetch(url, {
          method: "POST",
          body: _hasFile ? formData : JSON.stringify(jsonData),
          headers: _hasFile
            ? { ...headers }
            : {
                "Content-Type": "application/json",
                ...headers
              }
        });
        data = await response.json();
      } else {
        data = await getMockResponse(url);
      }
      
      onComplete(data, jsonData);

      console.log(data, 10);
    } catch (error) {
      setErrorMessage("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formProps = { key, onSubmit };
  return {
    formProps,
    formState,
    setErrorMessage,
    setSuccessMessage,
    setLoading,
    reset
  };
};
