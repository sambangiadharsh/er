import React from 'react'
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const Sidebar = () => {
    const [popularblogs,setpopularblogs]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(res=>res.json()).then(data=>setpopularblogs(data.slice(0,15)))
    },[])
  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-6'>Latest blogs</h3>
            <div>
                {
                    popularblogs.slice(0,5).map(blog=><div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h3 className='text-base'>{blog.title}</h3>
                   <Link to="/" className="font-medium hover:text-orange-500 py-2 inline-flex items-center py-1">Learn more<FaArrowRight className='mt-1 ml-2'/></Link></div>)
                }
            </div>
        </div>
            {/* popular */}
        <div >
            <h3 className='text-2xl font-semibold px-6 mt-20'>Popular blogs</h3>
            <div>
                {
                    popularblogs.slice(5,10).map(blog=><div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h3 className='text-base'>{blog.title}</h3>
                   <Link to="/" className="font-medium hover:text-orange-500 py-2 inline-flex items-center py-1">Learn more<FaArrowRight className='mt-1 ml-2'/></Link></div>)
                }
            </div>
        </div>
    </div>
    
    
  )
}

export default Sidebar