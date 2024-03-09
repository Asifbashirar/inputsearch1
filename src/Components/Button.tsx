import { useContext } from "react";
import { myContext, myProps } from "../Context/GlobalContext";
import Navbar from "./Navbar";


const Button = () => {
  const { data, state, getApiData, newStateChanger } = useContext(myContext)
  return (
    <>
    <Navbar/>
    <div>
    <div className="flex flex-col items-center gap-3 ">
      <button className="p-4 bg-amber-400 rounded-lg mt-2 font-bold" type="button" onClick={() => newStateChanger('Haiqi')}>Click Me</button>
      <p className="font-bold">{state}</p>
      </div>
    <div className="">
        <button className="p-4 bg-amber-400 rounded-lg font-bold" type="button" onClick={getApiData}>GetApiData</button>
      </div>
      <table className="w-full mt-2 p-1">
        <thead className=" bg-amber-400">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
           {data?.map((obj,index)=><tr className="text-center">
            <td className="border border-black">{obj.id}</td>
            <td className="border border-black"> {obj.title}</td>
            <td className="border border-black">{obj.brand}</td>
            <td className="border border-black">{obj.price}</td>
            <td className="border border-black">{obj.category}</td>
          </tr>)}          
          
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Button;