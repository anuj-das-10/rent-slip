"use client";
import { useState } from 'react';
import generateBillTemplate from '@/utils/pdf.generator';

export default function RentForm() {
  const [landlordSign, setLandLordSign] = useState('');   
  const [rentPayerName, setRentPayerName] = useState('');  
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [costPerUnit, setCostPerUnit] = useState(9.5);
  const [mainMeterReading, setMainMeterReading] = useState('');
  const [submeterReadingPrev, setSubmeterReadingPrev] = useState('');
  const [submeterReadingCurrent, setSubmeterReadingCurrent] = useState('');
  const [waterCharges, setWaterCharges] = useState(0);
  const [homeRent, setHomeRent] = useState(5000);

  // Calculate Dynamic Values
  const energyConsumption = submeterReadingCurrent - submeterReadingPrev;
  const electricityCost = (energyConsumption * costPerUnit).toFixed(2);
  const totalRentToPay = (parseFloat(homeRent) + parseFloat(waterCharges) + parseFloat(electricityCost)).toFixed(2);

  const handleDownloadPDF = async () => {
    generateBillTemplate(
       landlordSign,
       rentPayerName,
       currentMonth-1,
       currentMonth,
       mainMeterReading,
       costPerUnit,
       submeterReadingCurrent,
       submeterReadingPrev,
       energyConsumption,
       waterCharges,
       homeRent
    );
  };


  const [viewSummary, setViewSummary] = useState(false);


  return (
    <div className="min-h-screen px-0 md:px-4 pt-12 rounded-lg text-white flex justify-center md:w-[40rem] z-10">
      
        {viewSummary ? (
          <div className='bg-[#10101a] shadow-lg shadow-slate-950 rounded-lg w-full h-fit p-8'>
            {/* Summary */}
            <h3 className="text-3xl my-8 text-center font-semibold text-white">Invoice Summary!</h3>
            <div className="mt-6 text-lg md:text-xl p-4 rounded-lg border border-[#4F9DDE]">
            <p className="text-[#FFD166] mt-2">Tenant :  <span className='text-red-500'>{rentPayerName}</span></p>
            <p className="text-[#FFD166] mt-1">Landlord :  <span className='text-red-500'>{landlordSign}</span></p>
            <p className="text-[#FFD166] mt-1">Rent for the Month :  <span className='text-red-500'>{['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][currentMonth]}</span></p>
            <p className="text-[#FFD166] mt-1">Energy Consumped :  <span className='text-red-500'>{energyConsumption.toFixed(2)} kWh</span></p>
            <p className="text-[#FFD166] mt-1">Electricity Cost :  <span className='text-red-500'>Rs. {electricityCost}</span></p>
            <p className="text-[#FFD166] mt-1">Water Charges :  <span className='text-red-500'>Rs. {waterCharges}</span></p>
            <p className="text-[#FFD166] mt-1">Home Rent :  <span className='text-red-500'>Rs. {homeRent}</span></p>
            <p className="text-[#FFD166] mt-1">Total Rent to Pay :  <span className='text-red-500'>Rs. {totalRentToPay}</span></p>              
            </div>
            <button onClick={handleDownloadPDF}
            className="mt-8 w-full bg-[#066403] text-white py-3 rounded-lg hover:bg-green-800 transition-all duration-200 font-bold">
                Download Invoice
            </button>


            <button onClick={() => setViewSummary(false)}
            className="mt-4 w-full bg-[#bd280e] text-white py-3 rounded-lg hover:bg-red-600 transition-all duration-200 font-bold">
                Go Back
            </button>

          </div>
        ) : (
          <div className="bg-[#10101a] rounded-lg w-full p-8 shadow-lg shadow-slate-950">
            <h2 className="text-3xl font-semibold text-white mb-4">Rent and Utility Calculation</h2>
            <form className="space-y-6">
              {/* Landlord Signature */}
              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Landlord:</label>
                <input required
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={landlordSign}
                  onChange={e => setLandLordSign(e.target.value)}
                  type="text"
                />
              </div>

              {/* Rent Payer Name */}
              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Rent Payer's Name:</label>
                <input required
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={rentPayerName}
                  onChange={e => setRentPayerName(e.target.value)}
                  type="text"
                />
              </div>

              {/* Month Selection */}
              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Rent for the Month of:</label>
                <select
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={currentMonth}
                  onChange={e => setCurrentMonth(e.target.value)}
                >
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Existing Fields */}
              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Cost per Unit (Rs.):</label>
                <input required
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={costPerUnit}
                  onChange={e => setCostPerUnit(e.target.value)}
                  type="number"
                  step="0.01"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Main Meter Total Reading (kWh):</label>
                <input required
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={mainMeterReading}
                  onChange={e => setMainMeterReading(e.target.value)}
                  type="number"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Previous Month Submeter Reading (kWh):</label>
                <input required
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={submeterReadingPrev}
                  onChange={e => setSubmeterReadingPrev(e.target.value)}
                  type="number"
                  step="0.01"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Current Month Submeter Reading (kWh):</label>
                <input required
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={submeterReadingCurrent}
                  onChange={e => setSubmeterReadingCurrent(e.target.value)}
                  type="number"
                  step="0.01"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Water Charges (Rs.):</label>
                <input required
                  className="p-3 border border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={waterCharges}
                  onChange={e => setWaterCharges(e.target.value)}
                  type="number"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#B3B3B3]">Home Stay Rent (Rs.):</label>
                <input required
                  className="p-3 border mb-8 border-[#4F9DDE] rounded bg-[#1E1E2C] text-white focus:outline-none focus:ring-2 focus:ring-[#A389F4]"
                  value={homeRent}
                  onChange={e => setHomeRent(e.target.value)}
                  type="number"
                />
              </div>

              <button onClick={() => setViewSummary(true)}
              className="w-full bg-[#FFD166] text-[#1E1E2C] py-3 rounded-lg hover:bg-[#ffcc00] transition-all duration-200 font-bold text-xl">
                Get Summary
              </button>
            </form>
          </div>
        )}


      </div>

  );
}
