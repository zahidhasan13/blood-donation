import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "/",
          element: <Home/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "*",
      element: <NotFound/>
    },
  ]);

  export default router;