import React from 'react'

const Model = ({isopen,onclose}) => {
  return (
    <div className={`fixed top-0 w-full h-full flex items-center justify-center ${isopen?"" : "hidden"}`}>
        <div className='modal-container'>
        <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
            <h2 className='mb-5 font-bol font-bold text-2xl'>PLEASE LOGIN HERE</h2>
            <form>
                <div className='mb-5'>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" 
                    className='w-full rounded-md border border-solid bg-white py-3 px-6 text-base font-medium text=[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'></input>
                </div>
                <div className='mb-5'>
                    <input type="passwordl" name="password" id="password" placeholder="Enter Your Password" 
                    className='w-full rounded-md border border-solid bg-white py-3 px-6 text-base font-medium text=[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'></input>
                </div>
                <div>
                    <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3
                    px-8 text-base font-semibold text-white outline-none'> Login</button>
                </div>

            </form>

            {/* model close */}
            <button onClick={onclose}className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 inline-flex rounded items-center mt-5'>Close</button>
        </div>
        </div>
    </div>
  )
}

export default Model