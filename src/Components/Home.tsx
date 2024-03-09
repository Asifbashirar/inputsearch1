import axios from "axios";
import { useState } from "react";
import { maintype } from "../types/mytype";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
const[myData,setMyData]=useState<maintype>()

const navigate=useNavigate()

const getApi =async()=>{

try {
 
 const responce=await axios.get('https://dummyjson.com/products?limit=0')
setMyData(responce.data)

navigate('/Details',{state:{ApiData:responce.data}})

} catch (error) {
 console.log('Error',Error);
 
}

}
 
return (
  <>
  <Navbar/>
  <div className=" h-[100vh] bg-slate-800">
  <h1 className= " text-white text-3xl text-center font-bold pt-8">Click btton to check data</h1>
  <div className="flex justify-center mt-5">
   <button className="py-2 px-6 font-bold bg-blue-600 text-white text-xl w-[120px]" onClick={getApi}> Get Api</button>
  </div>
  </div>
  </>
 );
};

export default Home;