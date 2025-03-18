"use client";

import { signInInterface } from '@/app/interfaces';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignIn() {
    const {
        register, 
        handleSubmit, 
        formState: { errors, isValid },
        reset
    } = useForm({ 
        defaultValues: {
            email: "",
            password: "",
        }, 
        mode: "onBlur",
    });

    const onSubmit = (data: signInInterface) => {
        console.log(data);
        // Здесь вы можете отправить данные на сервер

        reset();
    };

    return (
        <div className='flex flex-grow justify-center items-center'>
            <form className='flex flex-col items-center p-5 bg-backgroundSecondary rounded-lg shadow min-w-80' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl font-bold mb-8'>Sign In</h1>
                <div className='mb-4 w-full flex flex-col items-center'>
                    <div className='flex justify-between items-center w-full mb-1'>
                        <label className='text-sm font-medium' htmlFor="email">Email</label>
                        <div className='text-red-500'>
                            {errors.email && <span  className='text-xs font-medium'>This field is required</span>}
                        </div>
                    </div>
                    <input type='email' className=' border-2 border-borderColor rounded-lg text-sm font-medium p-1 w-full' id="email" {...register('email', { required: true })} />
                </div>
                <div className='mb-4 w-full flex flex-col items-center'>
                    <div className='flex justify-between items-center w-full mb-1'>
                        <label className='text-sm font-medium' htmlFor="password">Password</label>
                        <div className='text-red-500'>
                            {errors.password && <span className='text-xs font-medium'>This field is required</span>}
                        </div>
                    </div>
                    <input className='border-2 border-borderColor rounded-lg text-sm font-medium p-1 w-full' id="password" type="password" {...register('password', { required: true })} />
                </div>
                <button className='my-5 px-5 py-2 bg-mainBgColor text-white text-sm font-medium rounded-lg cursor-pointer transition-all ease-linear border-2 border-mainBgColor hover:bg-backgroundSecondary hover:text-mainBgColor' type="submit" disabled={!isValid}>Submit</button>
                <div>
                    <span className='text-xs font-medium'>Don&apos;t have an account? <Link href="/auth/signup" className='text-mainBgColor text-xs font-semibold'>Sign Up</Link></span>
                </div>
            </form>
        </div>
    );
}