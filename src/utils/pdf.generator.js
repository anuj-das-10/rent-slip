import jsPDF from 'jspdf';

const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber);
  return date.toLocaleString('en-US', { month: 'long' });
}


const generateBillTemplate = (
  landlord,
  rentPayer,
  previous_month,
  current_month,
  totalCurrentUnit,
  costPerUnit,
  currentMonthSR,
  previousMonthSR,
  energyConsumed,
  waterCharges,
  homeStayRent
) => {
  const totalElectricityBill = (totalCurrentUnit * costPerUnit).toFixed(2);
  const electricityCost = (energyConsumed * costPerUnit).toFixed(2);
  const totalRentToPay = (parseFloat(homeStayRent) + parseFloat(waterCharges)+ parseFloat(electricityCost)).toFixed(2);

  // Initialize jsPDF
  const doc = new jsPDF();


  // Horizontally center
  const waterMark = "Powered by RentSlip";

  // Get the page width
  const pageWidth = doc.internal.pageSize.getWidth();

  // Get the width of the text
  const textWidth = doc.getTextWidth(waterMark);

  // Calculate x-coordinate to center the text horizontally
  const xCoordinate = (pageWidth - textWidth) / 2;






// 1. Main Heading: Rent invoice for the month of [month], [year]
  doc.setTextColor("black");
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(`Rent invoice for the month of ${getMonthName(current_month)}, ${new Date().getFullYear()}`, 10, 20);

// 2. Time Stamp: Rent invoice generated on: Wed Sep 04 2024-23:27:57 GMT+0530 (India Standard Time)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(64, 83, 76);
  doc.text(`Rent invoice generated on: ${new Date().toDateString()}-${new Date().toTimeString()}`, 10, 25);

// 3. Horizontal Line
  doc.line(10, 30, 200, 30);    // Adjust the coordinates as needed (x1, y1, x2, y2)


  doc.setTextColor(22, 70, 65);


// 4. Section Heading: Electricity Details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Electricity Details', 10, 45);


// 4.1. Total Electricity Cost Calculation
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text(`Total Current Unit   \t :  ${totalCurrentUnit} kWh`, 10, 55);
  doc.text(`Cost Per Unit  \t\t :  Rs. ${costPerUnit}`, 10, 61.5);
  doc.text(`Total Electricity Bill \t :  Rs. ( ${totalCurrentUnit} X ${costPerUnit} ) = Rs. ${totalElectricityBill}`, 10, 68.2);
  
  
  
  
  
// 5. Section Heading: Family Specific Details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(`Family Specific Details`, 10, 90);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Tenant :  ${rentPayer}`, 10, 100);
  doc.text(`Previous Month, i.e., ${getMonthName(previous_month)}, ${new Date().getFullYear()} :: Submeter Reading (SR) = ${previousMonthSR} kWh`, 10, 107);
  doc.text(`Current Month, i.e., ${getMonthName(current_month)}, ${new Date().getFullYear()} :: Submeter Reading (SR) = ${currentMonthSR} kWh`, 10, 114);

  doc.text(`Energy consumption\t:  (Current Month SR - Previous Month SR) kWh`, 10, 122);
  doc.text(`\n\t\t\t\t\t :  (${currentMonthSR} - ${previousMonthSR}) kWh`, 10, 125);
  doc.text(`\n\t\t\t\t\t :  ${energyConsumed.toFixed(2)} kWh`, 10, 133);


  doc.text(`Electricity Cost \t\t:  Rs. ( Energy consumption X Cost Per Unit )`, 10, 149);
  doc.text(` \t\t\t\t\t:  Rs. ( ${energyConsumed.toFixed(2)} X ${costPerUnit} )`, 10, 157);
  doc.text(` \t\t\t\t\t:  Rs. ${parseFloat(electricityCost).toFixed(2)}`, 10, 164);



// 6. Section Heading: Home Rent and Other Charges
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Home Rent and Other Charges', 10, 180);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text(`Home Rent\t\t\t:  Rs. ${homeStayRent}\n\n`, 10, 191);
  doc.text(`Water Charges\t\t  :  Rs. ${waterCharges}`, 10, 199);

// 7. Calculation:  Total Rent to Pay
  doc.text(`Total Rent to Pay\t      :  Rs. ( Home Rent + Electricity Cost + Water Charges)`, 10, 207);
  doc.text(`\t\t\t\t          :  Rs. ( ${homeStayRent} + ${electricityCost} + ${waterCharges} )`, 10, 215);
  doc.text(`\t\t\t\t          :  Rs. ${totalRentToPay}`, 10, 224);

  doc.setFont('helvetica', 'bold');
  doc.text(`Total Rent to be paid for the month of ${getMonthName(current_month)}, ${new Date().getFullYear()} is Rs. ${Math.floor(totalRentToPay)} (approx.)`, 10, 238);


// 8. Signature (small font size)
  
  doc.setFontSize(11);
  doc.text(`${landlord}\nSignature of Landlord`, 150, 268);


// 9. Horizontal Line
  doc.line(10, 279, 200, 279);    // Adjust the coordinates as needed (x1, y1, x2, y2)



// 10. Watermark of my website
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor("black");
  doc.setTextColor("crimson");
  doc.text(waterMark, xCoordinate + 5, 290);

  // Save the PDF
  doc.save(`RentSlip_${rentPayer}_${getMonthName(current_month)}_${new Date().getFullYear()}.pdf`);
};

export default generateBillTemplate;
