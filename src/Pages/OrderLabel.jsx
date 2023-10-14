import React from "react";
import Sidebar from "../components/Sidebar";

{
  /* <section className="flex flex-col w-3/4 font-semibold">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6"></div> */
}

const Orderdiv = () => {
  return (
    
    <div className="landingpage grow overflow-x-hidden">
      <div className="pl-1 ">
      <h1 className="font-[700] pb-1">Order div</h1>
        <h3 className="font-[300]  ">Purchase div Here</h3>
        <hr  className="py-1"/>
      </div>
      <form className="formsss h-[90vh] overflow-auto">
      <div className=" flex justify-center w-[100%]">
                  <div className="flex nice2  w-[95%] justify-between">  
                  
                  <div className=" grow-[2]">

                      <h3 className="font-[600] text-[16px] pb-1">Type</h3>
                        <span className="h-[40px] p-1 ml-3  w-[100%] "><input type="text" className="pl-2 w-[97%] " placeholder="USPS Priority" name="" id="" /></span>
                    </div>  

            <div className="grow-[2]">
              <h3 className="font-[600] text-[16px]  pb-1 pl-[5em]">
                PACKAGE WEIGHT (70 LBS MAX)
              </h3>
              <span className="h-[40px]">
                <input
                  type="number"
                  className="ml-[4em] w-[80%]"
                  placeholder="0 LBS"
                  name=""
                  id=""
                />
              </span>
            </div>
          </div>
        </div>
        <div className="  flex flex-col items-center justify-center w-[100%] coldy">
          <div className="flex flex-col items-center justify-between  w-[95%] overflow-y-auto">
            <div className="flex gap-[2rem] w-[100%] overflow-x-hidden ">
            <div className="flex flex-col gap-[0.7em] grow-[2.6]">
                <div className="" >
                  
                  <div className="flex flex-col gap-[0.6em]">

                    
                   
                    </div>
                    <div className="huh flex flex-col gap-3 nice p-3 mt-4  ">
                      
                      <h1 className="font-[600] text-[16px]">TO  ADDRESS</h1>
                      <div className="flex flex-col gap-3 p-3 5 gtx890">
                        <div>
                          <h3 className="text-[14px] pt-1 font-[600] ">Saved Address</h3>
                          <span className="pl-2 pb-1">
                            <select name="" className="w-[90%] m-[0.7000000000000002em] " id="">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>
                        </div>
                        <div>
                          <h3 className="text-[14px] pt-1 font-[600] ">Country *</h3>
                          <span className="pl-2 pb-1">
                            <select name="" className="w-[90%] m-[0.7000000000000002em] " id="">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>
                        </div>
                        <div className="text-[14px]">
                          <h3 className="pl-1 font-[600]">Name*</h3>
                          <span className="pl-2 pb-1">
                                <input type="text" placeholder="Name" name="" id="" />

                          </span>
                        </div>
                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Company/Reference Number (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Company" name="" id="" />

                          </span>
                        </div>
                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder=" Street " name="" id="" />

                          </span>
                        </div>
                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street 2 (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Street 2" name="" id="" />

                          </span>
                        </div>

                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">City*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="City" name="" id="" />

                          </span>
                        </div>

                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">State *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="State" name="" id="" />

                          </span>
                        </div>

                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Zip Code *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Zip Code  " name="" id="" />

                          </span>
                      </div>
                      </div>
                    </div>
                    </div>
                  
                </div>
                <div className="grow-[2.6] ">
                <div className="" >
                  <div className="flex flex-col gap-[1em]">

                    
                    

                    </div>
                    <div className="huh flex flex-col gap-3 nice  p-2 pr-[1rem] mt-4 h-[100%] pb-[1.1em]" >
                      
                    
                      
                      <h1 className="font-[600] text-[16px]">TO  ADDRESS</h1>
                      <div className="flex flex-col gap-3 p-3 5 gtx890">
                        <div>
                          <h3 className="text-[14px] pt-1 font-[600] ">Saved Address</h3>
                          <span className="pl-2 pb-1">
                            <select name="" className="w-[90%] m-[0.7000000000000002em] " id="">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>
                        </div>
                        <div>
                          <h3 className="text-[14px] pt-1 font-[600] ">Country *</h3>
                          <span className="pl-2 pb-1">
                            <select name="" className="w-[90%] m-[0.7000000000000002em] " id="">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>
                        </div>
                        <div className="text-[14px]">
                          <h3 className="pl-1 font-[600]">Name*</h3>
                          <span className="pl-2 pb-1">
                                <input type="text" placeholder="Name" name="" id="" />

                          </span>
                        </div>
                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Company/Reference Number (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Company" name="" id="" />

                          </span>
                        </div>
                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder=" Street " name="" id="" />

                          </span>
                        </div>
                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street 2 (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Street 2" name="" id="" />

                          </span>
                        </div>

                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">City*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="City" name="" id="" />

                          </span>
                        </div>

                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">State *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="State" name="" id="" />

                          </span>
                        </div>

                        <div className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Zip Code *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Zip Code  " name="" id="" />

                          </span>
                      </div>
                      </div>
                    </div>
                    </div>
                  
                </div>

            </div>
          </div>
         
          <div className="flex justify-between items-center  w-[95%] h-[90px] ">
          
            <div className="flex flex-col text-[24px]">
            
              <h1 className="">$148.00</h1>
              <h2>*Final Cost</h2>
            </div>
            
            
            <button className=" flex gap items-center buttioninorderlab w-[200px] h-[45px]  text-gray-50	 justify-center mt-3	 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.78 15.8397C15.78 15.8397 18.64 12.9997 19.61 11.9997C22.68 8.99973 21.15 2.81973 21.15 2.81973C21.15 2.81973 15 1.28973 12 4.35973C9.66 6.63973 8.14 8.21973 8.14 8.21973C8.14 8.21973 4.3 7.41973 2 9.71973L14.25 21.9997C16.55 19.6697 15.78 15.8397 15.78 15.8397ZM14.28 6.83973C14.4657 6.65378 14.6863 6.50626 14.9291 6.40561C15.1719 6.30496 15.4322 6.25316 15.695 6.25316C15.9578 6.25316 16.2181 6.30496 16.4609 6.40561C16.7037 6.50626 16.9243 6.65378 17.11 6.83973C17.3895 7.11952 17.5797 7.47589 17.6567 7.86379C17.7337 8.2517 17.694 8.65371 17.5425 9.01904C17.3911 9.38436 17.1348 9.69659 16.8059 9.91625C16.4771 10.1359 16.0905 10.2532 15.695 10.2532C15.2995 10.2532 14.9129 10.1359 14.5841 9.91625C14.2552 9.69659 13.9989 9.38436 13.8475 9.01904C13.696 8.65371 13.6563 8.2517 13.7333 7.86379C13.8103 7.47589 14.0005 7.11952 14.28 6.83973ZM3 20.9997C4.85107 20.9469 6.62315 20.2381 8 18.9997L5 15.9997C3 16.9997 3 20.9997 3 20.9997Z" fill="white"></path>
                </svg>
                <h1 className="text-[14px]">
                Order label
                </h1>

            </button>

          </div>
      </div>
    </form>
    </div>
  );
};

export default Orderdiv;
