import React from 'react'
import Blogpage from '../components/Blogpage'

const Blogs = () => {
  return (
    <>
    <div>
      <div className=' py-40 bg-black text-white text-center'>
      <h1 className='text-5xl lg:text-7xl font-bold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-5'>Welcome to blog page</h1>
      </div>
    </div>
    {/* blog content */}
    <div className='max-w-7xl mx-auto'>
      <Blogpage/>
    </div>
    </>
  
  )
}

export default Blogs