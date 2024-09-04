import html2canvas from "html2canvas";
import jsPDF from 'jspdf';
import { FaFileInvoiceDollar } from "react-icons/fa6";

const Logo = () => {
  return (
    <div id="logo" className="flex items-center justify-center pt-[0.6rem] h-[4rem]">
      <FaFileInvoiceDollar size={35} color="aqua" className="mb-3" />
      <svg
        className="w-40 h-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 30"
        fill="none"
        stroke="none"
      >
        {/* Logo Text */}
        <text x="0" y="20" fontSize="20" fontWeight="bold"
          fill="#4F9DDE" fontFamily="Arial">Rent</text>

        <text x="46" y="20" fontSize="20" fontWeight="bold"
          fill="#EF4444" fontFamily="Arial">Slip</text>
      </svg>
    </div>
  );
};

export default Logo;


export const getBase64Logo = async () => {
  const doc = new jsPDF();

  // Convert the Logo component to an image using html2canvas
  const logoElement = document.getElementById("logo");
  const canvas = await html2canvas(logoElement);
  const imgData = canvas.toDataURL("image/png");

  return imgData;
};