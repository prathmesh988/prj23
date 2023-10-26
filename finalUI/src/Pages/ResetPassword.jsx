import { Link } from "react-router-dom";
import { MailInp } from "../components/ForMs";

function Heads(){
    return(
        <>
            <div className="flex flex-col items-center w-[35vw] h-[75vh]  landingpage ml-[34%] mt-[10%]">

                <h1 className='font-black text-[48px] pb-4'>label lab</h1>
                <h2 className='font-[700] text-[24px]	pb-2'>Reset your password</h2>
                <div className="flex flex-col items-center text-[14px]">
                <p className="text-[14px] w-[100%]">Enter the email address associated with your account and we </p>
                <p className="text-[14px] pb-1">will send you a link to reset your password</p>
                </div>   
                <div className=  'flex items-center  pt-[8px] pr-[16px] pl-[16px] pb-[8px] inpboxofresetpwd w-[120%] h-[52px] '>
                    <span className="material-symbols-outlined pr-2 ">mail</span><input type="text" placeholder='Email' name="" id=""  className='w-[100%] p-1.5 border-0 border-transparent text-[20px] '/>
                </div>
                <button className='butt3 text-[16px] '>Continue</button>
                <Link className=' font-[700] text-blue-600 pt-2' to="/login">Back to Sign in </Link>
                <div className="flex text-[14px] pt-4 font-[400] ">
                <h2 className=''>Don't have account? </h2> <Link className='text-blue-800 pl-[2px] ' to='/signup'>Sign Up</Link>

                </div>
            </div>
        </>
    )
}

export default Heads;