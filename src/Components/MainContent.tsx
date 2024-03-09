import Navbar from "./Navbar";
import UseCustom from "./UseCustom";


const MainContent = () => {

const{data,loading,error}=UseCustom()
 console.log("data",data);
 
return (
  <>
  <Navbar/>
  
  <div>
   <p>{data?.products.map((obj,index)=>
   <p>{obj.brand}</p>
   )}</p>
  </div>
  </>
 );
};

export default MainContent;