import React from "react";
import Sidebar from "../components/Sidebar";

const OrderLabel = () => {
  return (
    <section className="flex-grow ">
      <div className="py-4 border-b-2 px-6  ">
        <div>
          <h1 className="text-2xl font-bold">Order Label</h1>
          <p className="text-xs">Check your progress</p>
        </div>
      </div>

      <form className="formsss h-[90vh] overflow-auto py-2 formsinput bg-[#F8FAFC] m-6 rounded-lg">
        <div className="  flex flex-col items-center justify-center w-[100%] coldy">
          <div className="flex flex-col items-center justify-between  w-[95%] overflow-y-auto">
            <div className="flex gap-[2rem] w-[100%] overflow-x-hidden ">
              <div className="flex flex-col gap-[0.7em] grow-[2.6]">
                <div className="">
                  <div className="flex flex-col gap-[0.6em]"></div>
                  <div className="huh flex flex-col gap-3 nice p-3 mt-4  ">
                    <div className="mb-10">
                      <h3 className="font-[600] text-[16px] pb-1">Type</h3>

                      <select
                        name=""
                        className="w-[96%] text-gray-400 text-xs border-[1px] h-[40px]"
                        id=""
                      >
                        <option value="" disabled selected className="">
                          USPS Priority
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                    <h1 className="font-[600] text-[16px]">FROM ADDRESS</h1>
                    <div className="flex flex-col gap-3 py-3 5 gtx890">
                      <div>
                        <h3 className="text-[14px] pb-1 pt-1 text-[#64748B] font-[600] ">
                          Saved Address
                        </h3>

                        <select
                          name=""
                          className="w-[96%] text-gray-400 text-xs border-[1px] h-[40px]"
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

                        <select
                          name=""
                          className="w-[96%] border-[1px] h-[40px]"
                          id=""
                        >
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
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
                          className="w-[96%] text-gray-400 text-xs border-[1px] pl-1  py-3"
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
                          type="Company"
                          placeholder="Name"
                          name=""
                          id=""
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
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
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
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
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
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
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          Zip Code<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="Zip Code"
                          name=""
                          id=""
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow-[2.6] ">
                <div className="">
                  <div className="flex flex-col gap-[1em]"></div>
                  <div className="huh flex flex-col gap-3 nice p-3 mt-4  ">
                    <div className="mb-10">
                      <h3 className="font-[600] text-[16px] pb-1">
                        PACKAGE WEIGHT (70 LBS MAX)
                      </h3>

                      <select
                        name=""
                        className="w-[96%] text-gray-400 text-xs border-[1px] h-[40px]"
                        id=""
                      >
                        <option value="" disabled selected className="">
                          0 LBS
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                    <h1 className="font-[600] text-[16px]">To ADDRESS</h1>

                    <div className="flex flex-col gap-3 py-3 5 gtx890">
                      <div>
                        <h3 className="text-[14px] pb-1 pt-1 text-[#64748B] font-[600] ">
                          Saved Address
                        </h3>

                        <select
                          name=""
                          className="w-[96%] text-gray-400 text-xs border-[1px] h-[40px]"
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

                        <select
                          name=""
                          className="w-[96%] border-[1px] h-[40px]"
                          id=""
                        >
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          Name<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="Name"
                          name=""
                          id=""
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
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
                          type="Company"
                          placeholder="Name"
                          name=""
                          id=""
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
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
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
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
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
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
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                      <div className="text-[14px]">
                        <h3 className="font-[600] text-[#64748B] mb-1">
                          Zip Code<span className="text-[#FF0000]">*</span>
                        </h3>
                        <input
                          type="text"
                          placeholder="Zip Code"
                          name=""
                          id=""
                          className="w-[96%] text-gray-400 text-xs border-[1px]  pl-1 py-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center  w-[95%] h-[90px]  mb-10">
            <div className="flex flex-col text-[24px]">
              <h1 className="font-semibold text-[#00CA4E]">$148.00</h1>
              <h2 className="text-[#FF0000] text-xs">*Required Fields</h2>
            </div>

            <button className=" flex gap items-center buttioninorderlab w-[200px] h-[45px]  text-gray-50	 justify-center mt-3	 ">
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
