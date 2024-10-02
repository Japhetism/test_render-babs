'use cient'

import { useFetchApi } from "@/hooks";
import { ApiResponse } from "@/types/auth";
import { API } from "@/utils/constants";
import { ElementType, HTMLProps } from "react";
import {useCookies} from 'next-client-cookies';

export type ServerImageType = 'products' | 'vendors';
export type ServerImageProps = HTMLProps<HTMLImageElement> & {
  type: ServerImageType;
}

export default function ServerImage({type,src,className:cn, ...imgProps}:ServerImageProps){
  const {get} = useCookies();
  const {loading, data, error} = useFetchApi<ApiResponse>(`${API}/file/get/${type}/${src}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${get("accessToken")}`
    }
  })

  const className = `${loading ? 'bg-gray-200 animate-pulse' : ''} rounded ${cn}`

  console.log({data});
  
  const source = ()=>{
    if(loading) return null
    if(error) return null
    if(!data?.data) return null
    return data.data as unknown as string;
  }
  
  return (
    <img {...imgProps} src={source() ?? ''} className={className} />
  )
}