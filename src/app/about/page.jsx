import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center p-8 md:p-24 overflow-hidden">
  
        <div className="absolute left-10 top-[-10rem] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-30 blur-[40rem] h-80 w-80 animate-pulse"></div>
        <div className="absolute right-1/3 bottom-[-30rem] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 blur-[10rem] h-[30rem] w-[50rem] animate-pulse"></div>
        <div className="absolute right-[-20rem] top-1/3 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-orange-700 rounded-full opacity-30 blur-[50rem] h-[15rem] w-[15rem] animate-pulse"></div>

      {/* About Section */}
      <section className="max-w-3xl text-center mt-16 mb-8 z-10">
        <h1 className="text-4xl font-bold mb-5 text-left">
          About
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed text-justify text-slate-400">
          <span className='text-[#4F9DDE] font-bold'>Rent<span className='text-[#EF4444]'>Slip</span></span> is a simple yet effective rent and utility management platform. It’s designed to make rent calculations and billing more convenient for both landlords and tenants. With features like electricity bill calculation, water charges, and automatic rent breakdowns, it helps you stay organized and efficient.
        </p>

        <div className='w-full mt-20'>
          <h1 className='text-4xl font-bold mb-5 text-left'>Key Features</h1>
        <ul className='w-full text-left text-lg sm:text-xl md:text-2xl flex flex-col items-start'>

          <li className="my-2 flex justify-center items-center gap-2">
            <FaArrowAltCircleRight className="text-lime-500 sm:text-xl md: text-2xl" />
            Easily calculate monthly cost
          </li>
          
          <li className="my-2 flex justify-center items-center gap-2">
            <FaArrowAltCircleRight className="text-lime-500 sm:text-xl md: text-2xl" />
            Generate invoice with ease
          </li>
          
          <li className="my-2 flex justify-center items-center gap-2">
            <FaArrowAltCircleRight className="text-lime-500 sm:text-xl md: text-2xl" />
            Download invoice in PDF format
          </li>

        </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
