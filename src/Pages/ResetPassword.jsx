import { Link } from "react-router-dom";
import { MailInp } from "../components/ForMs";

function Heads(){
    return(
        <>
            <div className="items-center w-[33vw] h-[75vh] flex flex-col landingpage ml-[34%] mt-[10%]">

                <h1 className='font-black text-[48px] pb-4'>label lab</h1>
                <h2 className='font-[700] text-[24px]	pb-2'>Reset your password</h2>
                {/* <div className="text-[14px]"> */}
                <p className="text-[14px]">Enter the email address associated with your account and we </p>
                <p className="text-[14px] pb-1">will send you a link to reset your password</p>
                {/* </div>    */}
                <div className=  'flex items-center  p-1 inpboxofresetpwd '>
                    <span className="material-symbols-outlined pr-2 ">mail</span><input type="text" placeholder='Email' name="" id=""  className='w-[91%] p-1.5 border-0 border-transparent text-[20px] '/>
                </div>
                <button className='butt2 w-[10%]'>Continue</button>
                <Link className=' font-[700] text-blue-600 pt-2' to="/login">Back to Sign in </Link>
                <div className="flex text-[14px] pt-4 font-[500] ">
                <h2 className=''>Don't have account? </h2> <Link className='text-blue-600 pl-[2px] ' to='/signup'>Sign Up</Link>

                </div>
            </div>
        </>
    )
}

export default Heads;