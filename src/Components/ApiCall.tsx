import axios from "axios";
import { useEffect, useState } from "react";
import {subtype } from "../types/mytype";
import Navbar from "./Navbar";


const ApiCall = () => {
 
 const [data, setdata] = useState<subtype[] | undefined>()
 const [input, setInput] = useState("")

 useEffect(() => {

  (async function () {
   try {
    const responce = await axios.get('https://dummyjson.com/products?limit=0')
    // setdata(responce.data)
    setdata(responce.data.products)

    // console.log('responce.data', responce.data);

   } catch (error) {
    console.log('Error', Error);

   }
  })()

 }, []);

const handleInput=(x:any)=>{
 setInput(x.target.value)
}


 return (
  <>
  <Navbar/>
  <div>
   <h1 className='text-[43px] font-bold text-[black] text-center'>Dummy Jason Data</h1>
   <div className="flex justify-center">
    <input type="text" placeholder="Search here..." onChange={handleInput} className="p-4 w-[600px] bg-green-400 font-bold rounded-2xl text-2xl" value={input} />
   </div>
   <div className='flex justify-center mt-1'>
    <table >
     <thead >
      <tr className='bg-blue-500 text-xl text-[black]'>
       <th className='border-[1px] border-[black] p-2'>No.</th>
       <th className='border-[1px] border-[black] p-2'>Id</th>
       <th className='border-[1px] border-[black]'>Title</th>
       <th className='border-[1px] border-[black]'>Brand</th>
       <th className='border-[1px] border-[black] p-3'>Image</th>
       <th className='border-[1px] border-[black]'>Category</th>
       <th className='border-[1px] border-[black] p-3'>Price</th>
       <th className='border-[1px] border-[black] p-3'>Rating</th>
       <th className='border-[1px] border-[black] p-3'>Stock</th>
       <th className='border-[1px] border-[black] p-3'>Discount Percentage</th>
       <th className='border-[1px] border-[black]'>Discription</th>
      </tr>
     </thead>
     <tbody className='cursor-pointer'>
      {data?.filter(obj=>input?obj.title.toLowerCase().startsWith(input):obj).map((obj,index) => <tr className=' border-[1px] border-[black] text-center' key={obj.id}>
       <td className='border-[1px] border-[black]'>{index+1}</td>
       <td className='border-[1px] border-[black]'>{obj.id}</td>
       <td className='border-[1px] border-[black]'>{obj.title}</td>
       <td className='border-[1px] border-[black]'>{obj.brand}</td>
       <td className='border-[1px] border-[black] h-[60px] w-[60px]'><img src={obj.thumbnail} alt="" /></td>
       <td className='border-[1px] border-[black]'>{obj.category}</td>
       <td className='border-[1px] border-[black]'>{obj.price}</td>
       <td className='border-[1px] border-[black]'>{obj.rating}</td>
       <td className='border-[1px] border-[black]'>{obj.stock}</td>
       <td className='border-[1px] border-[black]'>{obj.discountPercentage}</td>
       <td className='border-[1px] border-[black]'>{obj.description}</td>
      </tr>)}
     </tbody>
    </table>
   </div>
  </div>
  </>
 );
};

export default ApiCall