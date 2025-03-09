import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import DonorList from "../pages/DonorList";
import DonorDetails from "../pages/DonarDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/donorlist",
          element: <DonorList/>
        },
        {
          path: "/donorDetails/:id",
          element: <DonorDetails/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);

export default router;
