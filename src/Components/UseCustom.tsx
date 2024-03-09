import axios from "axios";
import { useEffect, useState } from "react";
import { maintype } from "../types/mytype";

const UseCustom = () => {
const[data,setData]=useState<maintype|undefined>()
const[loading,setLoading]=useState<boolean>(true)
const[error,setError]=useState<string>()
console.log('customData',data);

useEffect(()=>{
 const fetchApi=async()=>{

  try {
   const responce=await axios.get('https://dummyjson.com/products?limit=0')
       setData(responce.data)

  } catch (error:any) {
   setError(error.message||"an error occured")
  }
 }
 fetchApi();
},[])

 return  {data, loading, error}
};

export default UseCustom;