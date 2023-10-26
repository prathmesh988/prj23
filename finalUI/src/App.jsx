import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import LoGin from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Heads from "./Pages/ResetPassword";
import OrderLabel from "./Pages/OrderLabel";
import Orders from "./Pages/Orders";
import Deposit from "./Pages/Deposit";
import Sidebar from "./components/Sidebar";
import Transactions from "./Pages/Transactions";
import UserPage from "./Pages/UserPage";
import Commission from "./Pages/commision";
import BulkOrderLabel from "./Pages/BulkOrderLabel";
// import { Extension } from "/Pages/Extension";
import sendlogin from './ServerReq'
import { data } from "autoprefixer";
import Extension from "./Pages/Extension";
import BulkOrder from "./Pages/BulkOrder";
import Help from "./Pages/Help";
function Home() {
  console.log("home");
  return (
    <div className=" flex gap-4 w-[100vw] h-[100vh] justify-center items-center">
      <Link to={"/main"}>
        <button className="bg-gray-200 rounded-xl px-2 py-1">Dasboard</button>
      </Link>
      <Link to={"/login"}>
        <button className="bg-gray-200 rounded-xl px-2 py-1">Login</button>
      </Link>
      <Link to={"/signup"}>
        <button className="bg-gray-200 rounded-xl px-2 py-1">signup</button>
      </Link>
    </div>
  );
}

const RedirectingChildROutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{

    console.log('hlloe wolrd')
    let ab  = sendlogin();
    ab.then((data)=>{
      console.log(data)
    })
  },[])


  useEffect(() => {
    const updatePath = () => {
      const newPath = `${location.pathname}/Dashboard`;
      console.log(newPath);

      navigate(newPath);
    };

    updatePath();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};
const RedirectingChildROutes3= () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const updatePath = () => {
      const newPath = `/main`;
      console.log(newPath);

      navigate(newPath);
    };

    updatePath();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};

const RedirectingChildROutesthroughlogin= () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const updatePath = () => {
      const newPath = `/login`;
      console.log(newPath);

      navigate(newPath);
    };

    updatePath();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};
const OuletPage = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element:<Outlet />,
    children:[
      {
        path: '/',
        element:<RedirectingChildROutesthroughlogin/>
      }
    ]
  },
  {
    path: "/login",
    element: <Outlet />,
    children:[
      {
        path: '/login',
        element :<LoGin/>
      },
      {
          path:'redirect',
          element:<RedirectingChildROutes3/>
      }
    ]
    
  },
  {
    path: "/resetpassword",
    element: <Heads />,
  },
  {
    path: "/signup",
    element: <Outlet />,
    children:[
      {
        path: '/signup',
        element :<SignUp/>
      },
      {
          path:'redirect2',
          element:<RedirectingChildROutes3/>
      }
    ]
  },
  

  {
    path: "/main",
    element: <OuletPage />,
    children: [
      {
        path: "/main",
        element: <RedirectingChildROutes />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "order-label",
        element: <OrderLabel />,
      },
      {
        path: "Orders",
        element: <Orders />,
      },
      {
        path: "Deposit",
        element: <Deposit />,
      },
      {
        path: "Commission",
        element: <Commission />,
      },
      {
        path: "UserPage",
        element: <UserPage />,
      },
      {
        path: "Transactions",
        element: <Transactions />,
      },
      {
        path: "extension",
        element:<Extension/>
      },
      {
        path:'bulkorder',
        element:<BulkOrder/>
      },
      {
        path:'bulkorderlabel',
        element:<BulkOrderLabel/>
      },
      {
        path:'help',
        element:<Help/>
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
