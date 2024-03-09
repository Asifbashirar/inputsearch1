import { Link } from "react-router-dom";
const Navbar = () => {
 return (
  <>


   <div className='bg-[#75c97f] flex gap-6 justify-center'>
    <Link to="/Home" className="p-3 bg-[#eacf47] text-xl text-black font-bold rounded-3xl">Home</Link>
    <Link to="/ApiCall" className="p-3 bg-[#eacf47] text-xl text-black font-bold rounded-3xl">ApiCall</Link>
    <Link to="/Button" className="p-3 bg-[#eacf47] text-xl text-black font-bold rounded-3xl">Button</Link>
    <Link to="" className="p-3 bg-[#eacf47] text-xl text-black font-bold rounded-3xl">Empty</Link>
    <Link to="/UseRdcr" className="p-3 bg-[#eacf47] text-xl text-black font-bold rounded-3xl">UseRdcr</Link>
    <Link to="/MainContent" className="p-3 bg-[#eacf47] text-xl text-black font-bold rounded-3xl">customhook</Link>
    <Link to="/Useref" className="p-3 bg-[#eacf47] text-xl text-black font-bold rounded-3xl">useref</Link>
   </div>
  </>
 );
};

export default Navbar;