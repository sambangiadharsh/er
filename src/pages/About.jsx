import React from 'react'

const About = () => {
  return (

    <div className="bg-gray-100 min-h-screen p-6 pt-40">
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our blog! We are passionate about sharing insights, stories, and valuable information with our readers. Our blog covers a wide range of topics including technology, lifestyle, health, and more.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to create a platform where knowledge and experiences can be shared freely and openly. We aim to inspire, educate, and connect people through our content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="data:image/jpeg;base64,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" alt="image1" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold text-center mb-2">Mr.Adarsh</h3>
              <p className="text-gray-700 text-center">Founder &amp; Editor-in-Chief</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="data:image/jpeg;base64,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" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold text-center mb-2">Mr.Alex</h3>
              <p className="text-gray-700 text-center">Senior Writer</p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  </div>

    
  )
}

export default About