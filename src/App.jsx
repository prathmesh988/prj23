import { useState } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import image from "./assets/landingpagephoto.png";
import LoGin from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Heads from "./pages/ResetPassword";
import OrderLabel from "./pages/OrderLabel";
import Orders from "./pages/Orders";

function Home() {
  return (
    <div className=" flex gap-4 w-[100vw] h-[100vh] justify-center items-center">
      <Link to={"/Dashboard"}>
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoGin />,
  },
  {
    path: "/resetpassword",
    element: <Heads />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/OrderLabel",
    element: <OrderLabel />,
  },
  {
    path: "/Orders",
    element: <Orders />,
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
