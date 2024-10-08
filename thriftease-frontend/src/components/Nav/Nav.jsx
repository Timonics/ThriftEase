import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between m-4'>
        <Link className='italic'>ThriftEase</Link>
        <div className='space-x-4 font-light'>
            <Link>Log in</Link>
            <Link>Register</Link>
            <Link>Cart</Link>
        </div>
    </div>
  )
}

export default Nav