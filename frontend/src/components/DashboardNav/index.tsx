import { IconsList } from '@/app/icons'
import React from 'react'
import NavItems from './NavItems'
import navData from './navs.json'

const DashboardNav = React.memo(() => {
    console.log(navData)
    return (
        <div className='bg-backgroundSecondary h-screen border-r-2 border-borderColor'>
            <h1 className='text-2xl font-extrabold px-6 py-5 text-center mb-6'>CipherDash</h1>
            <div className='flex flex-col pr-5'>
                {navData.map((item, index) => (
                    <NavItems key={index} href={item.path} title={item.title} >
                        <IconsList type={item.id} className="w-5 h-5 mr-5" />
                    </NavItems>
                ))}
            </div>
        </div>
    )
})

DashboardNav.displayName = 'DashboardNav';

export default DashboardNav