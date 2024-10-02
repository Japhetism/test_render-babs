'use client';

import React from 'react'
import { AuthWrapper, FormInput, Button } from '@/components';
import { useViewModel } from './useViewmodel';


const NewPassword = () => {

  const {
    isLoading,
    errorMessage,
    formData,
    setFormData,
    handleResetPasswordFormSubmission
  } = useViewModel();


  return (
    <AuthWrapper title='New Password'>
      <div className='flex flex-col items-center justify-start lg:gap-10 gap-7 w-full font-barlow'>
        <form className='flex flex-col items-center justify-start lg:gap-10 gap-7 lg:mt-2 w-full'>
          <FormInput 
            name='password'
            type="password"
            inputMode='text'
            placeholder="Enter new password"
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
          <FormInput 
            name='confirmPassword'
            type="password"
            inputMode='text'
            placeholder="Confirm new password"
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
          <Button 
            type='submit'
            children= "Update password"
            className='bg-primary_100 w-full mt-[10px] text-white text-center text-base font-semibold hover:opacity-80 py-3'
            onClick={() => handleResetPasswordFormSubmission()}
          />
        </form>
      </div>
    </AuthWrapper>
  )
}

export default NewPassword