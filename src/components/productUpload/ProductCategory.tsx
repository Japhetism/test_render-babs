import React from 'react'
import ProductUploadWrapper from './ProductUploadWrapper'
import Select from '../Select'

const ProductCategory = ({ categories, disabled = false }: { categories: any, disabled: boolean }):JSX.Element => {
  return (
    <ProductUploadWrapper title='Product category'>
    <Select
      name='category'
      disabled={disabled}
      iconClassName='xl:w-6 xl:h-4 md:w-4 md:h-3 w-3 h-2 absolute xl:right-7 lg:right-5 md:right-4 right-3 top-6'
      selectClassName="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm"
    > 
    { categories ? 
      <>
      {
        categories.map((category: { _id: React.Key | readonly string[] | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => <option key={category._id} value={category._id}>{category.name}</option>)
      }
      </>
      : <option value="" disabled>loading</option>
      }  
    </Select>
 </ProductUploadWrapper>
  )
}

export default ProductCategory