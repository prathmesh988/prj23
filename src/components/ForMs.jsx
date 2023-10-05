export function MailInp(){
    return(
                 <div className= ' m-0.3 p-2 inpboxesofform '>
                    <span className="material-symbols-outlined pr-2 ">mail</span><input type="text" placeholder='Email' name="" id=""  className='w-[91%] p-1.5 border-0 border-transparent text-[20px] '/>
                </div>
    
    )
}
export function ForMs(){
    return(
        <>
            <MailInp/>
               

                <div className='  m-0.3 p-2 inpboxesofform '> 
                    <span className="material-symbols-outlined pr-2 ">lock</span>
                        <input type="password" placeholder='Password' name="" id=""  className='w-[91%] border-0 border-transparent text-[20px] p-1.5 '/>
                </div>
        </>
    )
}


