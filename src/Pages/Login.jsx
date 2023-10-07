import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import image from '../assets/landingpagephoto.png';
import { HeadIngs } from '../components/HeadinGs';
import { ForMs } from '../components/ForMs';
// image  {ForMs\}
import { Link } from 'react-router-dom';
function LoGin(){
    return(
        <>
        <div className='  flex flex-col justify-center items-center h-screen'>
        <div className= ' lands landingpage  flex align-centere gap-[8.1rem] w-[80vw] h-[90%] pt-[0%] ml-[3%]'>
        <div className= ' headings pt-[5%] flex-col w-[40%] h-inherit     '>
        <div>
            <div className=''>
                <HeadIngs/>
            </div>
            <div className=' gap-1 pt-[0.7rem] '>
                <div className='flex flex-col pt-1 gap-2'>
               <ForMs className='w-[50%]'/>
                </div>
            <div className='flex justify-between w-[100%] py-[16px]  text-[14px]'>
                <div className='flex items-center '>
                    <input type='checkbox' className='w-3 bordergraty h-3  overflow-hidden shrink-0' />
                    <p className='  ml-2 font-[510] '><a href="">Remember me</a></p>
                    </div>
                <p className='  font-[510]'><Link className='text-blue-600 ' to="/resetpassword">Forgot Password?</Link></p>
            </div>
            </div>
            <button className='butt text-[16px] w-[100%]'>Sign in</button>
            
            <div className=" top-[50px] left-[260px] w-[100%] flex flex-row items-center justify-start gap-[16px] text-center text-xs">
        <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-greyscale-200" />
        <div className="relative leading-[160%] py-[16px] text-[12px]">Or sign up with</div>
        <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-greyscale-200" />
      </div>
      
            <div className='flex justify-between  w-[100%] gap-2 '>
                <div className='flex items-center commonborder w-[47%] font-[16px] justify-center'>
                    <button className='flex align-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="50" viewBox="0 0 48 48">
                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg> <span className='font-[500] p-[0.2em] pl-[0.6vw] self-center  text-[16px]    '>Google</span></button> </div>
                <div className='flex items-center commonborder font-[16px] w-[47%] justify-center'>
                
                    <button className='flex align-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24.95" height="60" viewBox="0 0 48 48">
                        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                        </svg><span className='font-[500] p-[0.2em] pl-[0.6vw] self-center text-[16px]   '>Facebook</span>
                    </button>
                        
                </div>
            </div>
        </div>
        <div className='flex gap-2 text-[14px] font-[400]   justify-center '>
        <p className='pt-2'>Don't have an account? </p>
        <a className='text-blue-800  pt-2 '>Sign Up</a>
        </div>





        </div>
        <div className=' land2  w-[745px] h-[100%px] '>
            <img className=' w-[100%] h-[100%]' src={image} alt='no image'/>

        </div>

        </div>
        </div>

        </>
    )
}


export default LoGin;