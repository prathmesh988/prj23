import React from "react";
import Sidebar from "../components/Sidebar";

const OrderLabel = () => {
  return (
    
    <div className="landingpage grow">
      <div className="pl-1 ">
        <h1 className="font-[700] pb-1">Order Label</h1>
        <h3 className="font-[300]  ">Purchase Label Here</h3>
      </div>
      <form className="formsss h-[90vh] overflow-auto">
      <div className=" flex justify-center w-[100%]">
                  <div className="flex nice2  w-[95%] justify-between">  
                  
                  <div className=" grow-[2]">

                      <h3 className="font-[600] text-[16px] pb-1">Type</h3>
                        <span className="h-[40px] p-1 ml-3  w-[100%] "><input type="text" className="pl-2 w-[97%] " placeholder="USPS Priority" name="" id="" /></span>
                    </div>  

                      <div className="grow-[2]">

                          <h3 className="font-[600] text-[16px]  pb-1 pl-[5em]">PACKAGE WEIGHT (70 LBS MAX)</h3>
                            <span className="h-[40px]"><input type="number"  className='ml-[4em] w-[80%]'placeholder="0 LBS" name="" id="" /></span>
                      </div>  

                  </div> 
                  </div>
      <div className="  flex flex-col items-center justify-center w-[100%] coldy">
          <div className="flex flex-col items-center justify-between  w-[95%] overflow-y-auto">
            <div className="flex gap-[2rem] w-[100%] ">
            <div className="flex flex-col gap-[0.7em] grow-[2.6]">
                <div className="" >
                  
                  <div className="flex flex-col gap-[0.6em]">

                    
                   
                    </div>
                    <div className="huh flex flex-col gap-3 nice p-3 mt-4  ">
                      
                      <h1 className="font-[600] text-[16px]">TO  ADDRESS</h1>
                      <div className="flex flex-col gap-3 p-3 pl-5 gtx890">
                        <label>
                          <h3 className="text-[14px] pt-1 font-[600] ">Saved Address</h3>
                          <span className="pl-2 pb-1">
                            <select name="" className="w-[100%]" id="">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>
                        </label>
                        <label className=" text-[14px] ">
                          <h3 className="font-[600]">Country*</h3>
                          <span className="pl-2 pb-1">
                            <select name="" className=' w-[100%]' id="">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>

                        </label>
                        <label className="text-[14px]">
                          <h3 className="pl-1 font-[600]">Name*</h3>
                          <span className="pl-2 pb-1">
                                <input type="text" placeholder="Name" name="" id="" />

                          </span>
                        </label>
                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Company/Reference Number (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Company" name="" id="" />

                          </span>
                        </label>
                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder=" Street " name="" id="" />

                          </span>
                        </label>
                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street 2 (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Street 2" name="" id="" />

                          </span>
                        </label>

                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">City*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="City" name="" id="" />

                          </span>
                        </label>

                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">State *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="State" name="" id="" />

                          </span>
                        </label>

                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Zip Code *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Zip Code  " name="" id="" />

                          </span>
                      </label>
                      </div>
                    </div>
                    </div>
                  
                </div>
                <div className="grow-[2.6] ">
                <div className="" >
                  <div className="flex flex-col gap-[1em]">

                    
                    

                    </div>
                    <div className="huh flex flex-col gap-3 nice  p-2 pr-[1rem] mt-4 h-[100%] pb-[1.1em]" >
                      
                      <h1 className="font-[600] text-[16px] ">TO  ADDRESS</h1>
                      <div className="flex flex-col gap-3 p-3 pl-5 gtx890" >
                        <label>
                          <h3 className="text-[14px] pt-1 font-[600] ">Saved Address</h3>
                          <span className="pl-2 pb-1 ">
                            <select name="" id="" className="w-[100%]">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>
                        </label>
                        <label className=" text-[14px] ">
                          <h3 className="font-[600]">Country*</h3>
                          <span className="pl-2 pb-1">
                            <select name="" id="" className="w-[100%]">
                              <option value=''></option>
                              <option value=''></option>
                              <option value=''></option>
                            </select>
                          </span>

                        </label>
                        <label className="text-[14px]">
                          <h3 className="pl-1 font-[600]">Name*</h3>
                          <span className="pl-2 pb-1">
                                <input type="text" placeholder="Name" name="" id="" />

                          </span>
                        </label>
                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Company/Reference Number (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Company" name="" id="" />

                          </span>
                        </label>
                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder=" Street " name="" id="" />

                          </span>
                        </label>
                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Street 2 (optional)</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Street 2" name="" id="" />

                          </span>
                        </label>

                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">City*</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="City" name="" id="" />

                          </span>
                        </label>

                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">State *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="State" name="" id="" />

                          </span>
                        </label>

                        <label className='text-[14px]'>
                          <h3 className="pl-1 font-[600]">Zip Code *</h3>
                        {/* <input type="text" placeholder="Name" name="" id="" /> */}
                        <span className="pl-2 pb-1 pt-2">
                                <input type="text" placeholder="Zip Code  " name="" id="" />

                          </span>
                      </label>
                      </div>
                    </div>
                    </div>
                  
                </div>

            </div>
          </div>
      </div>
    </form>
    </div>
  );
};

export default OrderLabel;
