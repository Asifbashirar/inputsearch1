import React from "react";
import {IoIosSearch} from "react-icons/io"
import Navbar from "./Navbar";

const SearchBar = ({input,setInput}:{input:string;setInput:React.Dispatch<React.SetStateAction<string>>}) => {
 
const handleChange=(e:any)=>{
  setInput(e.target.value)
 }
 return (
   <>
   <Navbar/>
   
  <div className=" ">
   <h1 className=" text-center text-[43px] font-bold">Dummy Jason Data</h1>
<div className=" flex justify-center ">
   <div className="flex bg-orange-300 items-center border rounded-3xl p-2 w-[600px]">
    <span className="mr-1 text-[23px]"><IoIosSearch/></span>
    <span><input type="text" onChange={handleChange} placeholder="Search here..." className="bg-orange-300 rounded-3xl text-[23px] font-bold focus:outline-none"/></span>
   </div>
  </div>
  </div>
  </>
 );
};

export default SearchBar;