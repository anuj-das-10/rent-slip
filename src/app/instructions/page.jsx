"use client";

export default function Instructions() {
  const instructions = [
    {
      id: "1",
      title: "Landlord Details",
      description: "Enter the full name of the landlord to identify the property/house owner.",
    },
    {
      id: "2",
      title: "Rent Payer's Name",
      description: "Provide the full name of the tenant who will be paying the rent.",
    },
    {
      id: "3",
      title: "Rent for the Month",
      description: "Select the month for which the rent payment is being made.",
    },
    {
      id: "4",
      title: "Electricity Cost Setup",
      description: "Enter the current rate per unit (kWh) for electricity. The default rate is Rs. 9.5/-",
    },
    {
      id: "5",
      title: "Main Meter Reading",
      description: "Input the total reading from the main electricity meter in kWh.",
    },
    {
      id: "6",
      title: "Submeter Readings",
      description: "Provide the previous and current month's submeter readings to calculate consumption.",
    },
    {
      id: "7",
      title: "Water Charges",
      description: "Enter the water charges for the month in rupees.",
    },
    {
      id: "8",
      title: "Home Stay Rent",
      description: "Specify the fixed monthly rent amount for the home stay.",
    },
  ];

  return (

    <div className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center p-8 md:p-24 overflow-hidden">

      <div className="absolute left-10 top-[-10rem] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-30 blur-[40rem] h-80 w-80 animate-pulse"></div>
      <div className="absolute right-1/3 bottom-[-30rem] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 blur-[10rem] h-[30rem] w-[50rem] animate-pulse"></div>
      <div className="absolute right-[-20rem] top-1/3 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-orange-700 rounded-full opacity-30 blur-[50rem] h-[15rem] w-[15rem] animate-pulse"></div>

      {/* About Section */}
      <section className="max-w-3xl text-center mt-16 mb-8 z-10">
        <h1 className="text-4xl font-bold mb-5 text-left">
          Instructions
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed text-justify text-slate-400">
          Before completing the rent and utility cost calculation form, please take a moment to carefully read through these instructions. Following each step will help you enter information accurately and ensure your rent summary is correct.
        </p>

        <div className='w-full mt-20'>

          <ul className='w-full flex flex-col items-start'>
            {instructions.map((step, index) => (
              <li key={index} className="shadow-md shadow-slate-950 rounded-lg p-2 my-2 text-2xl flex sm:h-[8rem] w-full bg-slate-800 sm:bg-slate-900">
                <div className="sm:bg-lime-500/30 w-[14%] rounded-lg grid place-items-center">
                  <h1 className="text-3xl md:text-5xl font-extrabold">{step.id}</h1>
                </div>
                <div className="w-[80%] flex flex-col items-start gap-2 pl-4 pt-1">
                  <h1 className="text-lime-500 font-extrabold text-xl">
                    {step.title}
                  </h1>
                  <p className="text-lg leading-6 text-left text-slate-400">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </section>
    </div>
  );
}
