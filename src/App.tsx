import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import Details from "./Components/Details"
import Navbar from "./Components/Navbar"
import ApiCall from "./Components/ApiCall"
import Button from "./Components/Button"
import Error from "./Components/Error"
import MainContent from "./Components/MainContent"
import GlobalContext from "./Context/GlobalContext"
import UseRdcr from "./Components/UseRdcr"
import Useref from "./Components/Useref"

function App() {
const routers=createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>
  },
  {
  path:'/Home',
  element:<Home/>
},
{
  path:"/Details",
  element:<Details/>
},
{
  path:"/ApiCall",
  element:<ApiCall/>
},
{
  path:"/Button",
  element:<Button/>
},
{
  path:"/MainContent",
  element:<MainContent/>
},
{
  path:"*",
  element:<Error/>
},
{
  path:"/UseRdcr",
  element:<UseRdcr/>
},
{
  path:"/Useref",
  element:<Useref/>
}

])

  return (
    
    <GlobalContext>
     <RouterProvider router={routers}/>  
    </GlobalContext>
  )
}

export default App
