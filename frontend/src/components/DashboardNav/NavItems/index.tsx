"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

const NavItems = React.memo(({href, title, children} : {href?: string, title: string, children?: ReactNode}) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={`flex items-center cursor-pointer py-3 rounded-sm ${pathname === href ? 'text-mainBgColor border-l-4 border-mainBgColor rounded-sm' : 'transition-all ease-linear text-secondColor hover:bg-mainBgColor hover:text-white'} `}>
            <Link href={`${href}`} className='flex flex-grow items-center mr-1 text-xs font-medium pl-10 '> {children} {title}</Link>
        </div>
    )
})

NavItems.displayName = 'NavItems';

export default NavItems