import React from 'react'
import Container from './Container'

const Header = () => {
    return (
        <div className='bg-black text-white'>
            <Container>
                <div className='flex justify-between pt-3 pb-3 text-sm'>
                    <div></div>
                    <p className='flex gap-2'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <span className='font-bold border-b'>ShopNow</span>
                    </p>
                    <select name="" id="" className='bg-black text-white'>
                        <option value="">English</option>
                        <option value="">Bangla</option>
                        <option value="">Japanese</option>
                    </select>
                </div>
            </Container>
        </div>
    )
}

export default Header
