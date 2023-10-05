import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reactLogo from './assets/react.svg'

import image from './assets/landingpagephoto.png';

import LoGin from './Pages/Login';
import SignUp from './Pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoGin/>
   
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
    <RouterProvider router={router} />
    </>
      
  )
}

export default App
