"use client";
import { useFetchApi } from "@/hooks";
import { ApiResponse } from "@/types/auth";
import { API } from "@/utils/constants";
import { Select } from "@radix-ui/themes";
import { useCookies } from "next-client-cookies";
import { memo, ReactNode, useState } from "react";

export type VendorPickerProps = {
  // children: ReactNode;
};

export default memo(function VendorPicker({  }: VendorPickerProps) {
  const [selected, setSelected] = useState<string|undefined>(undefined);
  const {get} = useCookies();

  const {
    data, loading, error
  } = useFetchApi<ApiResponse>(`${API}/vendor`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${get("accessToken")}`
    },
  });

  return (
    <Select.Root name="vendor" onValueChange={setSelected} disabled={loading || !!error}>
      <Select.Trigger>
        
          {
            loading ? <>loading...</> :
            error ? <>an error occurred</> :
          selected ? 
          (data?.data?.find((item: any) => item._id === selected)?.name)
           : <>Select vendor</>}
      </Select.Trigger>
      <Select.Content
      style={{
        maxHeight: 300
      }}
       className="bg-white rounded-md p-4 shadow-xl">
        {
          data && !data.hasError && data.data && data.data.map((item: any) => <Select.Item value={item._id}>{item.name}</Select.Item>)
        }
            
      </Select.Content>
    </Select.Root>
  );
});
