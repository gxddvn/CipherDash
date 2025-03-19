import { SignIn } from '@/app/icons'
import React from 'react'

const Header = React.memo(() => {
    return (
        <div className='flex justify-between items-center py-4 px-8 bg-backgroundSecondary border-b-2 border-borderColor'>
            <div className='text-lg font-bold'>CipherDash</div>
            <div className='flex justify-center items-center cursor-pointer'>
                <span className='mr-1 text-sm font-medium'>Sign in</span>
                <SignIn className='w-5 h-5'/>
            </div>
        </div>
    )
})

Header.displayName = 'Header'

export default Header