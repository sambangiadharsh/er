import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { FaClock } from 'react-icons/fa6'
import Sidebar from '../components/Sidebar'

const Singleblog = () => {
    const data=useLoaderData()
    const {title,image,category,author,published_date,reading_time,content}=data[0];
    console.log(data)
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
            <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>single page blog</h2>
        </div>
        {/* blog details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row'>
            <div className='lg:w-3/4 mx-auto'>
                <div><img src={image} alt="image" className='w-full mx-auto  rounded' />
                <h2 className='text-3xl font-bold mv-4 text-blue-500 cursor-pointer mt-8'>{title}</h2>
                 <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
                 <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
                 <p className='mb-3 text-gray-600'>{content}</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis iure tenetur doloremque consequuntur similique voluptatem odio recusandae cupiditate fuga consequatur.
                 Creating social media posts is a great way to hone your content writing skills. Since posts are typically very short, snappy, and quick, you can easily try out different styles of writing and see what people respond to. It’s easy to change direction and adapt if you need to tweak your writing style since social media posts are typically fluid and changeable by nature. You can also practice A/B testing with your social media ads—try writing two different posts and sending it to similar demographics and see which one performs better.

Before you write social media posts, make sure to check character limits as well as the demographics of customers who use each platform. This will help you word the post for each platform in a way that will attract the most potential customers.<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quidem, ipsum accusantium, aut expedita voluptatem repellat maxime quas tenetur nihil consequatur labore! Exercitationem ipsa qui unde inventore minima illo obcaecati!</p> maxime delectus, enim repellendus hic quidem asperiores? Accusantium, fugit.<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eos ratione harum placeat beatae, aperiam, hic soluta tenetur illo repellendus odit vero vel nemo sunt illum eligendi consequatur quo delectus?</p>Creating social media posts is a great way to hone your content writing skills. Since posts are typically very short, snappy, and quick, you can easily try out different styles of writing and see what people respond to. It’s easy to change direction and adapt if you need to tweak your writing style since social media posts are typically fluid and changeable by nature. You can also practice A/B testing with your social media ads—try writing two different posts and sending it to similar demographics and see which one performs better.

Before you write social media posts, make sure to check character limits as well as the demographics of customers who use each platform. This will help you word the post for each platform in a way that will attract the most potential customers.</p>
                
                
               </div>
            </div>
            <div><Sidebar/></div>
        </div>
    </div>
  )
}


export default Singleblog