import Logo from '@/components/Logo';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-8 md:p-24">
      {/* About Section */}
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 flex justify-center items-center">About &ensp; <Logo /> </h1>
        <p className="text-lg md:text-2xl leading-relaxed text-justify">
          <span className='text-[#4F9DDE] font-bold'>Rent<span className='text-[#EF4444]'>Slip</span></span> is a simple yet effective rent and utility management platform. It’s designed to make rent calculations and billing more convenient for both landlords and tenants. With features like electricity bill calculation, water charges, and rent breakdowns, it helps you stay organized and efficient.
        </p>
      </section>

      {/* Developer Details */}
      <section className="max-w-4xl w-full bg-slate-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Developers</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-12">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img
              src="rentSlip.webp"
              alt="Developer"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-600"
            />
            <h3 className="text-xl font-semibold">Anuj Das</h3>
            <p className="text-sm text-gray-400">Full-Stack Developer</p>
            <p className="mt-2 text-center text-gray-300">
              Passionate about web development, cybersecurity, and creating efficient tools to solve real-world problems.
            </p>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default About;
