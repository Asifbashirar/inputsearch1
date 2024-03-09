import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from 'react';
import Navbar from './Navbar';

const Details = () => {
 const location=useLocation()
 
 const{ApiData}=location.state||{}
 
//  console.log('ApiData',ApiData);
 
 const[input,setInput]=useState('')

 return (
  <>
  <Navbar/>
  <div>
  <SearchBar input={input} setInput={setInput} />
  <table className='w-full mt-5'>
   <thead>
    <tr className=' bg-orange-300 '>
     <th className='border p-2 text-[22px]'>Id</th>
     <th className='border text-[22px]'>Title</th>
     <th className='border text-[22px]'>Price</th>
     <th className='border text-[22px]'>Brand</th>
     <th className='border text-[22px]'>Category</th>
      </tr>
   </thead>
   <tbody>
    {
    ApiData.products.filter((obj:any) =>input?obj.title.toLowerCase().startsWith(input):obj).map((obj:any,index:any)=><tr className='border' key={obj}>
     <td className='border text-center'>{obj.id}</td>
     <td className='border text-center'>{obj.title}</td>
     <td className='border text-center'>{obj.price}</td>
     <td className='border text-center'>{obj.brand}</td>
     <td className='border text-center'>{obj.category}</td>
    </tr>)
    }
    
   </tbody>
   </table> 
  </div>
  </>
 );
};

export default Details;