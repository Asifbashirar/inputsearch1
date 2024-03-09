import axios from "axios";
import {Dispatch, ReactElement,FC, SetStateAction, createContext, useState } from "react";

export interface myProps{
data:subtype[],
state:string,
getApiData:()=>void,
newStateChanger:Dispatch<SetStateAction<string>>
}
export interface subtype{
  brand:string
  category:string
  description:string
  discountPercentage:number
  id:number
  images:string[]
  price:number
  rating:number
  stock:number
  thumbnail:string
  title:string
  
 }
const initialState:myProps={
  data:[],
  state:"",
  getApiData:()=>{},
  newStateChanger:()=>{}
}


export const myContext=createContext(initialState)

const GlobalContext:FC<{children:ReactElement|ReactElement[]}> = ({children}) => {
  
  const[data,setData]=useState([])
  const[state,setState]=useState('Hi Asif')
              console.log('state',state);
              console.log('Apidata',data);
              
  const getApiData=async()=>{
    try {
      const responce=await axios.get('https://dummyjson.com/products?limit=0')
          setData(responce.data.products)
            // console.log('responce.data',responce.data);
            
    } catch (error) {
      console.log('Error',Error);
      
    }

  }
  
  return <myContext.Provider value={{data,state,newStateChanger:setState,getApiData}}>
    <div>{children}</div>
  </myContext.Provider>
}
export default GlobalContext;