import { AnalyticsIcon, DashboardIcon, NotifyIcon, SettingsIcon, SubscriptionsIcon, TradingBotIcon, TransactionIcon, WalletsIcon } from '@/app/icons'
import Link from 'next/link'
import React from 'react'

const DashboardNav = () => {
    return (
        <div className='bg-backgroundSecondary h-screen border-r-2 border-borderColor'>
            <h1 className='text-2xl font-extrabold px-6 py-5 text-center mb-6'>CipherDash</h1>
            <div className='flex flex-col pr-5'>
                <div className='flex items-center cursor-pointer py-3 border-l-4 border-mainBgColor rounded-sm'>
                    <Link href="/dashboard" className='flex flex-grow items-center mr-1 text-xs font-medium pl-10 text-mainBgColor'> <DashboardIcon className='w-5 h-5 mr-5'/> Dashboard</Link>
                </div>
                <div className='flex items-center cursor-pointer text-secondColor py-3 rounded-sm transition-all ease-linear  hover:bg-mainBgColor hover:text-backgroundSecondary'>
                    <Link href="/dashboard/wallets" className='flex flex-grow items-center mr-1 text-xs font-medium pl-10'><WalletsIcon className='w-5 h-5 mr-5'/> Wallets</Link>
                </div>
                <div className='flex items-center cursor-pointer text-secondColor py-3 rounded-sm transition-all ease-linear hover:bg-mainBgColor hover:text-backgroundSecondary'>
                    <Link href="/dashboard/transactions" className='flex flex-grow items-center mr-1 text-xs font-medium pl-10'><TransactionIcon className='w-5 h-5 mr-5'/> Transactions</Link>
                </div>
                <div className='flex items-center cursor-pointer text-secondColor py-3 rounded-sm transition-all ease-linear hover:bg-mainBgColor hover:text-backgroundSecondary'>
                    <span className='flex flex-grow items-center mr-1 text-xs font-medium pl-10'><AnalyticsIcon className='w-5 h-5 mr-5'/> AI Analytics</span>
                </div>
                <div className='flex items-center cursor-pointer text-secondColor py-3 rounded-sm transition-all ease-linear hover:bg-mainBgColor hover:text-backgroundSecondary'>
                    <span className='flex flex-grow items-center mr-1 text-xs font-medium pl-10'><TradingBotIcon className='w-5 h-5 mr-5'/> Trading Bot</span>
                </div>
                <div className='flex items-center cursor-pointer text-secondColor py-3 rounded-sm transition-all ease-linear hover:bg-mainBgColor hover:text-backgroundSecondary'>
                    <span className='flex flex-grow items-center mr-1 text-xs font-medium pl-10'><NotifyIcon className='w-5 h-5 mr-5'/> Alerts & Notifications</span>
                </div>
                <div className='flex items-center cursor-pointer text-secondColor py-3 rounded-sm transition-all ease-linear hover:bg-mainBgColor hover:text-backgroundSecondary'>
                    <span className='flex flex-grow items-center mr-1 text-xs font-medium pl-10'><SubscriptionsIcon className='w-5 h-5 mr-5'/> Subscriptions</span>
                </div>
                <div className='flex items-center cursor-pointer text-secondColor py-3 rounded-sm transition-all ease-linear hover:bg-mainBgColor hover:text-backgroundSecondary'>
                    <Link href="/dashboard/settings" className='flex flex-grow items-center mr-1 text-xs font-medium pl-10'><SettingsIcon className='w-5 h-5 mr-5'/> Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav