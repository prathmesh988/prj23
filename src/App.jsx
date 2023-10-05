import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reactLogo from './assets/react.svg'

import image from './assets/landingpagephoto.png';

import LoGin from './Pages/Login';
import SignUp from './Pages/SignUp';
import Heads from './Pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoGin/>,
   
   
  },
  {
    path:'/resetpassword',
    element:<Heads/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
]);

//You can change the routes according to your outlest coinfguraation 
//like where you waant to place your child components of that routes using outlet

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
    <RouterProvider router={router} />
    </>
      
  )
}

export default App
