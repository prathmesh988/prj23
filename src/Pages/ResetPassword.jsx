import { MailInp } from "../components/ForMs";

function Heads(){
    return(
        <>
            <div className="w-25vw h-30vh">

             <h1>label lab</h1>
                <h2>
                    Reset Your password
                </h2>
                <p>Enter the email address associated with your account and we <br/>will send you a link to reset your password.</p>
                <div className= ' m-0.3 p-2 inpboxofresetpwd '>
                        <span className="material-symbols-outlined pr-2 ">mail</span><input type="text" placeholder='Email' name="" id=""  className='w-[91%] p-1.5 border-0 border-transparent text-[20px] '/>
                </div>

            </div>

        
        </>
    )
}

export default Heads;