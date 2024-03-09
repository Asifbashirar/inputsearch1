import { useReducer } from "react";
import Navbar from "./Navbar";
interface State{
 count:number
 step:number
}
interface Action{
 type:string
 payload?:number
}

const initialState:State={count:0,step:1}

const reducer=(state:State,action:Action)=>{

 switch (action.type) {
  case "dec":
   return{...state,count:state.count-1}
   case "inc":
   return{...state,count:state.count+1}   
   case "setCount":
   return{...state,count:action.payload!}
   case"setStep":
   return{...state,step:action.payload!}
   case"reset":
   return initialState;
   default: throw new Error("Unknown Action")
 
  }

}

const UseRdcr = () => {

const[state,dispatch]=useReducer(reducer,initialState)

const{count,step}=state;
 
const date= new Date("jan,08,2024"); 
date.setDate(date.getDate()+count);

const dec=()=>{
dispatch({type:"dec",payload:-1})
}

const inc=()=>{
 dispatch({type:"inc",payload:+1})
 }

const defineCount=(e:any)=>{
dispatch({type:"setCount",payload: Number(e.target.value)})
}

const definestep=(e:any)=>{
 dispatch({type:"setStep",payload: Number(e.target.value)})
}

const reset=(e:any)=>{
dispatch({type:"reset",payload: Number(e.target.value)})
}

return (
  <>
  <Navbar/>
  
  <div className="flex items-center flex-col mt-[40px]">
   <h1 className="text-[44px] font-bold">Range</h1>
   <div className="flex items-center">
   <input type="range" min={0} max={100} value={step} onChange={definestep} className=" w-[400px]" />
    <span className="text-3xl font-bold ml-3 bg-green-300 rounded-3xl p-3">{step}</span>
    </div>
   <div className="mt-[50px] text-[44px] font-bold">
   <h1 className="text-[44px] font-bold">Increment and Decrement with Date </h1>
    <button className="bg-green-300 rounded-3xl p-3" onClick={dec}>-</button>
     <input type="text" value={count} onChange={defineCount} className="text-center"/>
     <button className="bg-green-300 rounded-3xl p-3" onClick={inc}>+</button>
     <p className="text-center mt-8">{date.toDateString()}</p>
   </div>
   <div className="mt-[40px]">
    <button className="bg-green-300 rounded-3xl p-3 text-3xl font-bold" onClick={reset}>Reset</button>
   </div>
  </div>
  </>
 );
};

export default UseRdcr;