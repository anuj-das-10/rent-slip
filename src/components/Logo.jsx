import { FaFileInvoiceDollar } from "react-icons/fa6";

const Logo = () => {
  return (
    <div id="logo" className="flex items-center justify-center pt-[0.6rem] h-[4rem]">
      <h1 className="text-3xl font-extrabold text-indigo-500 mr-1">Rent<span className="text-pink-500">Slip</span></h1>
      <FaFileInvoiceDollar size={28} className="text-yellow-500" />
    </div>
  );
};

export default Logo;
