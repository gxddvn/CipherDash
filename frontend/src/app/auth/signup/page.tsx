"use client";

import { signUpInterface } from '@/app/interfaces';
import { notifyError } from '@/app/notifications';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

export default function SignUp() {
    const {
        register, 
        handleSubmit, 
        formState: { errors, isValid },
        reset
    } = useForm({ 
        defaultValues: {
            email: "",
            name: "",
            password: "",
            passwordConfirm: "",
        }, 
        mode: "onBlur",
    });

    const onSubmit = (data: signUpInterface) => {
        console.log(data);
        // Здесь вы можете отправить данные на сервер
        if (data.password !== data.passwordConfirm) {

        }
        else {
            notifyError("Passwords do not match");
        }


        reset();
    };

    return (
        <div className='flex flex-grow justify-center items-center'>
            <ToastContainer />
            <form className='flex flex-col items-center p-5 bg-backgroundSecondary rounded-lg shadow min-w-80' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl font-bold mb-8'>Sign Up</h1>
                <div className='mb-4 w-full flex flex-col items-center'>
                    <div className='flex justify-between items-center w-full mb-1'>
                        <label className='text-sm font-medium' htmlFor="name">Name</label>
                        <div className='text-red-500'>
                            {errors.name && <span className='text-xs font-medium'>This field is required</span>}
                        </div>
                    </div>
                    <input className='border-2 border-borderColor rounded-lg text-sm font-medium p-1 w-full' id="name" {...register('name', { required: true })} />
                </div>
                <div className='mb-4 w-full flex flex-col items-center'>
                    <div className='flex justify-between items-center w-full mb-1'>
                        <label className='text-sm font-medium' htmlFor="email">Email</label>
                        <div className='text-red-500'>
                            {errors.email && <span className='text-xs font-medium'>This field is required</span>}
                        </div>
                    </div>
                    <input className='border-2 border-borderColor rounded-lg text-sm font-medium p-1 w-full' id="email" {...register('email', { required: true })} />
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
                <div className='mb-4 w-full flex flex-col items-center'>
                    <div className='flex justify-between items-center w-full mb-1'>
                        <label className='text-sm font-medium' htmlFor="passwordConfirm">Confirm Password</label>
                        <div className='text-red-500'>
                            {errors.passwordConfirm && <span className='text-xs font-medium'>This field is required</span>}
                        </div>
                    </div>
                    <input className='border-2 border-borderColor rounded-lg text-sm font-medium p-1 w-full' id="passwordConfirm" type="password" {...register('passwordConfirm', { required: true })} />
                </div>
                <button className='my-5 px-5 py-2 bg-mainBgColor text-white text-sm font-medium rounded-lg cursor-pointer transition-all ease-linear border-2 border-mainBgColor hover:bg-backgroundSecondary hover:text-mainBgColor' type="submit" disabled={!isValid}>Submit</button>
                <div>
                    <span className='text-xs font-medium'>Already have an account? <Link href="/auth/signin" className='text-mainBgColor text-xs font-semibold'>Sign In</Link></span>
                </div>
            </form>
        </div>
    );
}