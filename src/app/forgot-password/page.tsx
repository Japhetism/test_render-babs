'use client';

import React from 'react'
import { AuthWrapper, GoogleBtn, FormInput, Button } from '@/components';
import {useRouter} from 'next/navigation'
import { useViewModel } from './useViewmodel';

const ForgotPassword = () => {
  const {
    isLoading,
    errorMessage,
    setEmail,
    navigateToLogin,
    navigateToRegistration,
    handleForgotPasswordFormSubmission,
  } = useViewModel();
  const {push} = useRouter();

  return (
    <AuthWrapper title='Forgot password'>
      <div className='flex flex-col items-center justify-start lg:gap-10 gap-7 w-full font-barlow'>
        <form className='flex flex-col items-center justify-start lg:gap-10 gap-7 lg:mt-2 w-full'>
          <FormInput 
            name='email address'
            type="email"
            inputMode='email'
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
          />
           <span className='text-primary_100 self-end cursor-pointer font-normal text-sm' onClick={() => navigateToLogin()}>Back to sign in</span>
          <Button 
            type='submit'
            children= "Receive code"
            className='bg-primary_100 w-full mt-[10px] text-white text-center text-base font-semibold hover:opacity-80'
            onClick={() => handleForgotPasswordFormSubmission()}
          />
        </form>
        <p className='text-sm text-dark_100 font-medium uppercase text-center lg:-my-5 -my-3'>- or -</p>
        <GoogleBtn onClick={() => console.log("Register with google")} />
        <div className='flex justify-start gap-1 text-dark_100 font-normal text-sm lg:mt-[13px] mt-2 w-full'>
            <span>Don't have an account ? </span>
            <span className='text-primary_100 cursor-pointer' onClick={() => navigateToRegistration()}> sign up</span>
          </div>
      </div>
    </AuthWrapper>
  )
}

export default ForgotPassword