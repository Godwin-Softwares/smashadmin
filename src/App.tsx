// import { useContext } from "react";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Driver from "./pages/drivers/Driver"
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Passenger from "./pages/passengers/Passenger"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './styles/global.scss'
import Orders from "./pages/orders/Orders";
import Notifications from "./pages/notifications/Notifications";
import Chats from "./pages/chats/Chats";
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";

function App() {

  const { user } = useAuth()


  const RequireAuth = ({children}:any) => {
    return user ? children : <Navigate to="/login"/>
  }

 
  const Layout = () => {
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([

    {
      path:"/",
      element:
      
      <RequireAuth><Layout/></RequireAuth>,
      children:[
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "passengers",
          element: <Passenger/>,
        },
        {
          path: "drivers",
          element: <Driver/>,
        },
        {
          path: "orders",
          element: <Orders/>,
        },
        {
          path: "chats",
          element: <Chats/>,
        },
        {
          path: "notifications",
          element: <Notifications/>,
        },
      ]
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "forgotPassword",
      element: <ForgotPassword/>,
    }
   
  ]);
  
  return <RouterProvider router={router} />
 
}

export default App
