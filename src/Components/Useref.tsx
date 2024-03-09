import { useEffect, useRef } from "react";
import Navbar from "./Navbar";


const Useref = () => {
 const myCom=useRef(0) 
 
useEffect(() => {
myCom.current=myCom.current+1;
console.log("myCom.current=",myCom.current);

},[]);

 return (
  <>
  <Navbar/>
  
  <div>
   hello, useRef!
  </div>
  </>
 );
};

export default Useref;