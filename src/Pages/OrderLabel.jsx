import React from "react";
import Sidebar from "../components/Sidebar";

const OrderLabel = () => {
  return (
    
    <div className="landingpage grow">
      <div className="pl-1 ">
        <h1 className="font-[700] pb-1">Order Label</h1>
        <h3 className="font-[300]  ">Purchase Label Here</h3>
      </div>
      <div className=" flex flex-col items-center justify-center w-[100%]">
          <div className="flex flex-col items-center justify-between  w-[90%]">
            <div className="flex gap-80 w-[100%] ">
                <div className="flex flex-col gap-1 grow" >
                  <div>
                    <h3 className="font-[600] text-[16px]">TYPE</h3>
                    <span className="h-[40px] pl-1">
                      <input type="text" placeholder="USPS Priority" name="" id="" />
                    </span>

                  </div>
                    <h1 className="font-[600] text-[16px]">FROM ADDRESS</h1>
                  <div className="flex flex-col gap-3 pl-3">
                    <div>
                      <h3 className="text-[14px] pt-1 font-[600] ">Saved Address</h3>
                      <span className="pl-2 pb-1">
                        <select name="" id="">
                          <option value=''></option>
                          <option value=''></option>
                          <option value=''></option>
                        </select>
                      </span>
                    </div>
                    <div className=" text-[14px] ">
                      <h3 className="font-[600]">Country*</h3>
                      <span className="pl-2 pb-1">
                        <select name="" id="">
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
                <div className="grow">
                <div>

                  <h3 className="font-[600] text-[16px]">PACKAGE WEIGHT (70 LBS MAX)</h3>
                    <span className="h-[40px]"><input type="number" placeholder="0 LBS" name="" id="" /></span>
                  </div>  
                  <h1 className="font-[600] text-[16px]">To ADDRESS</h1>
                  <div className="flex flex-col gap-3 pl-3">
                    <div>
                      <h3 className="text-[14px] pt-1 font-[600] ">Saved Address</h3>
                      <span className="pl-2 pb-1">
                        <select name="" id="">
                          <option value=''></option>
                          <option value=''></option>
                          <option value=''></option>
                        </select>
                      </span>
                    </div>
                    <div className=" text-[14px] ">
                      <h3 className="font-[600]">Country*</h3>
                      <span className="pl-2 pb-1">
                        <select name="" id="">
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
  );
};

export default OrderLabel;
