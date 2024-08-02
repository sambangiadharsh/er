import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900 pt-10'>
        <div className="px-5 pt-17 mx-auto  sm:max-w-xl md:max-w-full lg:max-screen-xl md:px-22 lg:px-4">
            <div className='grid mb-15 lg:grid-cols-6'>
            <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 ' >
                <div>
                <p className='font-medium trackig-wide text-gray-300'>
                         Category
                </p>
                <ul className='mt-2 space-y-2'>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>News</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>world</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>games</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>prefeerence </a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>Education </a>
                        
                    </li>
                </ul>
                </div>
                <div>
                <p className='font-medium trackig-wide text-gray-300'>
                         Bussiness
                </p>
                <ul className='mt-2 space-y-2'>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-5000'>Media</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>Brochure</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>Non profit</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>Education </a>
                       
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200  hover:text-orange-500'>Education </a>
                        
                    </li>
                </ul>
                </div>
                <div>
                <p className='font-medium trackig-wide text-gray-300'>
                         Organization
                </p>
                <ul className='mt-2 space-y-2'>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>Media</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>Brochure</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>Non profit</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>Education </a>
                        
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>Projects</a>
                        
                    </li>
                </ul>
                </div>
                <div>
                <p className='font-medium trackig-wide text-gray-300'>
                         Features
                </p>
                <ul className='mt-2 space-y-2'>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>News</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>world</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>games</a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>prefeerence </a>
                    </li>
                    <li>
                        <a className='text-gray-400 transition-colors  duration-200 hover:text-orange-500'>Education </a>
                        
                    </li>
                </ul>
                </div>                
            </div>

            {/* subsscription */}
            <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                <p className='font-medium trackig-wide text-gray-300'>
                         Subscription fro updates
                </p>
                <form className='mt-4 flex flex-col md:flex-row'>
                    <input type="email" name="email" id="email" className='flex-grow w-full h-10 px-4 mb-3 transiton-auto duration-200 bg-white border border-gray-300
                     rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none '></input>
                   
                    <button type="submit" className='inline-flex items-center justify-centerh12 px-6 font-medium tracking-wide text-white transition duration-200 h-10 rounded shadow-md hover:bg-orange-500 focus:outline-none border'> submit</button>
                     
                </form>
                <p className='text-white'>content is created by sambangi adarsh</p>
                </div>
            
        </div>

          
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
        <p className='text-sm text-gray-500'>@Copyright 2023 | All right reserved.</p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <a href="#" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaTwitter/></a>
            <a href="#" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaInstagram/></a>
            <a href="#" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaFacebook/></a>
          </div>

        </div>
        </div>
    </div>
  )
}

export default Footer