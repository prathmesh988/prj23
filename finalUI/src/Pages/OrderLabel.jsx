
import React, { useState, useEffect } from "react";
import {orderLabrequests} from "../ServerReq";
// import Sidebar from "../components/Sidebar";

const OrderLabel = () => {
// state variables to track the input fields of the form
  const [formtype, setFormType] = useState('USPS Priority');
  const [fromName, setfromName] = useState('');
  const [fromcompany, setfromCompany] = useState('');
  const [fromstreet, setfromstreet] = useState('');
  const [fromstreet1, setfromstreet1] = useState('');
  const [fromzip, setfromzip] = useState('');
  const [fromcity, setfromCity] = useState('');
  const [fromstate, setfromState] = useState('');
  const [fromcountry, setfromcountry] = useState('United States');
  const [fromsPhone, setfromPhone] = useState('');
  // const [fromsname, setfromname] = useState('');

  const [toName, settoName] = useState('');
  const [tocompany, settoCompany] = useState('');
  const [tostreet, settostreet] = useState('');
  const [tostreet2, settostreet2] = useState('');
  const [tozip, settozip] = useState('');
  const [tocity, settoCity] = useState('');
  const [tocountry, settocountry] = useState('United States');
  const [tostate, settoState] = useState('');
  const [toPhone, settoPhone] = useState('');
  const [packageweight, setweight] = useState('');
  

   
    // Add more fields as needed);
    // formdata -->
    // {

    //   formtype:formtype,  
    //   fromname: fromName,
    //   fromcompany: fromcompany,
    //   fromstreet: fromstreet,
    //   fromstreet2: fromstreet1,
    //   fromzip: fromzip,
    //   fromcity: fromcity,
    //   fromstate: fromstate,
    //   fromphone: fromstate,
    //   toname: toName,
    //   tocompany: tocompany,

    //   tostreet: tostreet,
    //   tostreet2: tostreet2,
    //   tozip: tozip,
    //   tocity: tocity,
    //   tostate: tostate,
    //   tophone: toPhone,
    //   packageweight: packageweight,
        
    // }
  const [formData, setFormData] = useState({});
  const handleFormSubmit = (e) => {
    setFormData(

      {

        formtype:formtype,  
        fromname: fromName,
        fromcompany: fromcompany,
        fromstreet: fromstreet,
        fromstreet2: fromstreet1,
        fromzip: fromzip,
        fromcity: fromcity,
        fromstate: fromstate,
        fromphone: fromstate,
        toname: toName,
        tocompany: tocompany,
        tostreet: tostreet,
        tostreet2: tostreet2,
        tozip: tozip,
        tocity: tocity,
        tocountry:tocountry,
        tostate: tostate,
        tophone: toPhone,
        packageweight: packageweight,
          
      }
    );
    e.preventDefault();


    // Replace 'http://localhost:3000' with your actual backend URL
    const apiUrl = 'http://localhost:3000/order_labels';

    
      orderLabrequests(formData).then((response) => response.json())
      .then((data) => {
        // Handle the response from the server as needed
        console.log('Response from server:', data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch.
        console.error('Error:', error);
      });
  };


  return (
    <section className="flex-grow ">
      <div className="py-4 border-b-2 px-6  ">
        <div>
          <h1 className="text-2xl font-bold">Order Label</h1>
          <p className="text-xs">Check your progress</p>
        </div>
      </div>

      <form  onSubmit={handleFormSubmit} className="formsss h-[90vh] overflow-auto py-2 formsinput m-6 rounded-lg hide-scrollbar">
      <div class="flex flex-col items-center justify-center w-[100%] coldy">
          <div class="bg-[#F8FAFC] mt-0 m-6 gap-6 rounded-lg p-4 w-[100%] flex justify-between">
              <div class="w-1/2 pr-2">
                  <h3 class="font-[600] text-[16px] pb-1">Type</h3>
                  <select  name=""  className="w-[100%] text-gray-400 text-xs border-[1px] h-[40px]"  id="">
                        <option value="" disabled selected className="">
                          USPS Priority
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
              </div>
          
              <div class="w-1/2 pl-2">
                  <h3 class="font-[600] text-[16px] pb-1">PACKAGE WEIGHT (70 LBS MAX)</h3>
                  <select  name=""  className="w-[100%] text-gray-400 text-xs border-[1px] h-[40px]"  id="" >
                        <option value="" disabled selected className="">
                          USPS Priority
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
              </div>
          </div>

          <div class="flex w-[100%] gap-3">

              <div class="bg-[#F8FAFC] rounded-lg p-4 w-1/2">
              <h1 className="font-[600] text-[16px]">FROM ADDRESS</h1>
                    <div className="flex flex-col gap-3 py-3 5 gtx890">
                      <div>
                        <h3 className="text-[14px] pb-1 pt-1 text-[#64748B] font-[600] ">
                          Saved Address
                        </h3>

                        <select
                          name=""
                          className="w-[100%] text-gray-400 text-xs border-[1px] h-[40px]"
                          id=""
                        >
                          <option value="" disabled selected className="">
                            Select your option
                          </option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                      </div>
                      <div>
                        <h3 className="text-[14px] pb-1 text-[#64748B] pt-1 font-[600] ">
                          Country *
                        </h3>

                        <input
                          type="text"
                          placeholder="United States"
                          name=""
                          id=""
                          // value={}
                          disabled
                          className="w-[100%] text-gray-400 bg-[#F6F6F6] text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1 ">
                          Name<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="Name"
                          name=""
                          id=""
                          onChange={(e)=>{setfromName(e.target.value)}}
                          className="w-[100%] text-gray-400 text-xs border-[1px] pl-1  py-3"
                        />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          Company / Reference Number (
                          <span className="font-semibold text-black italic">
                            optional  
                          </span>
                          )
                        </h3>
                        <input
                          type="text"
                          placeholder="Company"
                          name=""
                          id=""
                          onChange={(e)=>{setfromCompany(e.target.value)}}
                          className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          Street<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="Street"
                          name=""
                          id=""
                          onChange={(e)=>{setfromstreet(e.target.value)}}
                          className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          Street 2 (
                          <span className="font-semibold text-black italic">
                            optional
                          </span>
                          )
                        </h3>
                        <input
                          type="text"
                          placeholder="Name"
                          name=""
                          id=""
                          onChange={(e)=>{setfromstreet1(e.target.value)}}
                          className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          City<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="City"
                          name=""
                          id=""
                          onChange={(e)=>{setfromCity(e.target.value)}}
                          className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                          />
                      </div>

                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          State<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="State"
                          name=""
                          id=""
                          onChange={(e)=>{setfromState(e.target.value);console.log(e.target.value)}}
                          className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                          />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          Zip Code<span className="text-[#FF0000]">*</span>
                        </h3> 
                        <input
                          onChange={(e)=>{setfromzip(e.target.value)}}
                          type="text"
                          placeholder="Zip Code"
                          name=""
                          id=""
                          className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                    </div>
              </div>

             
              <div class="bg-[#F8FAFC] rounded-lg p-4 w-1/2">
              <h1 className="font-[600] text-[16px]">To ADDRESS</h1>

              <div className="flex flex-col gap-3 py-3 5 gtx890">
                <div>
                  <h3 className="text-[14px] pb-1 pt-1 text-[#64748B] font-[600] ">
                    Saved Address
                  </h3>

                  <select
                    name=""
                    className="w-[100%] text-gray-400 text-xs border-[1px] h-[40px]"
                    id=""
                  >
                    <option value="" disabled selected className="">
                      Select your option
                    </option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
                <div>
                  <h3 className="text-[14px] pb-1 text-[#64748B] pt-1 font-[600] ">
                    Country *
                  </h3>

                  <input
                    type="text"
                    placeholder="United States"
                    name=""
                    
                    id=""

                    disabled
                    className="w-[100%] text-gray-400 bg-[#F6F6F6] text-xs border-[1px]  pl-1 py-3"
                  />
                </div>
                <div className="text-[14px]">
                  <h3 className="font-[600] text-[#64748B] mb-1">
                    Name<span className="text-[#FF0000]">*</span>
                  </h3>
                  <input
                    type="text"
                    placeholder="Name"
                    name=""
                    onChange={(e)=>{settoName(e.target.value)}}
                    id=""
                    className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                  />
                </div>
                <div className="text-[14px]">
                  <h3 className="font-[600] text-[#64748B] mb-1">
                    Company / Reference Number (
                    <span className="font-semibold text-black italic">
                      optional
                    </span>
                    )
                  </h3>
                  <input
                    type="text"
                    placeholder="Company"
                    name=""
                    id=""
                    onChange={(e)=>{settoCompany(e.target.value)}}
                    className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                  />
                </div>
                <div className="text-[14px]">
                  <h3 className="font-[600] text-[#64748B] mb-1">
                    Street<span className="text-[#FF0000]">*</span>
                  </h3>
                  <input
                    type="text"
                    placeholder="Street"
                    name=""
                    id=""
                    onChange={(e)=>{settostreet(e.target.value)}}
                    className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                  />
                </div>
                <div className="text-[14px]">
                  <h3 className="font-[600] text-[#64748B] mb-1">
                    Street 2 (
                    <span className="font-semibold text-black italic">
                      optional
                    </span>
                    )
                  </h3>
                  <input
                    type="text"
                    placeholder="Name"
                    name=""
                    id=""
                    onChange={(e)=>{settostreet2(e.target.value)}}
                    className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                    />
                </div>
                <div className="text-[14px]">
                  <h3 className="font-[600] text-[#64748B] mb-1">
                    City<span className="text-[#FF0000]">*</span>
                  </h3>
                  <input
                    type="text"
                    onChange={(e)=>{settoCity(e.target.value)}}
                    placeholder="City"
                    name=""
                    id=""
                    className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                    />
                </div>
                <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          State<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="State"
                          name=""
                          id=""
                          onChange={(e)=>{settoState(e.target.value)}}
                          className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                          />
                      </div>
                <div className="text-[14px]">
                  <h3 className="font-[600] text-[#64748B] mb-1">
                    Zip Code<span className="text-[#FF0000]">*</span>
                  </h3>
                  <input
                    onChange={(e)=>{settozip(e.target.value)}}
                    type="text"
                    placeholder="Zip Code"
                    name=""
                    id=""
                    className="w-[100%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                  />
                </div>
              </div>
              </div>
          </div>

          
          <div class="flex justify-between items-center w-[96.5%] h-[90px] mb-10">
              <div class="flex flex-col text-[24px]">
                  <h1 class="font-semibold text-[#00CA4E]">$148.00</h1>
                  <h2 class="text-[#FF0000] text-xs">*Required Fields</h2>
              </div>
              <button type="submit" class="flex gap items-center buttioninorderlab w-[200px] h-[45px] text-gray-50 justify-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.78 15.8397C15.78 15.8397 18.64 12.9997 19.61 11.9997C22.68 8.99973 21.15 2.81973 21.15 2.81973C21.15 2.81973 15 1.28973 12 4.35973C9.66 6.63973 8.14 8.21973 8.14 8.21973C8.14 8.21973 4.3 7.41973 2 9.71973L14.25 21.9997C16.55 19.6697 15.78 15.8397 15.78 15.8397ZM14.28 6.83973C14.4657 6.65378 14.6863 6.50626 14.9291 6.40561C15.1719 6.30496 15.4322 6.25316 15.695 6.25316C15.9578 6.25316 16.2181 6.30496 16.4609 6.40561C16.7037 6.50626 16.9243 6.65378 17.11 6.83973C17.3895 7.11952 17.5797 7.47589 17.6567 7.86379C17.7337 8.2517 17.694 8.65371 17.5425 9.01904C17.3911 9.38436 17.1348 9.69659 16.8059 9.91625C16.4771 10.1359 16.0905 10.2532 15.695 10.2532C15.2995 10.2532 14.9129 10.1359 14.5841 9.91625C14.2552 9.69659 13.9989 9.38436 13.8475 9.01904C13.696 8.65371 13.6563 8.2517 13.7333 7.86379C13.8103 7.47589 14.0005 7.11952 14.28 6.83973ZM3 20.9997C4.85107 20.9469 6.62315 20.2381 8 18.9997L5 15.9997C3 16.9997 3 20.9997 3 20.9997Z"
                  fill="white"
                ></path>  
              </svg>
              <h1 className="text-[14px]">Order label</h1>
              </button>
          </div>
      </div>

      </form>
    </section>
  );
};

export default OrderLabel;
