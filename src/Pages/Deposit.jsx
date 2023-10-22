import React from "react";
import Sidebar from "../components/Sidebar";

const DepositLayout = () => {
  return (
    <section className="flex flex-col w-[100%] gap-10 overflow-x-hidden  mb-1">
      <section className="self-center flex flex-col gap-5">
      <section class="flex flex-col w-[700px] gap-4 px-6 py-5 rounded mt-8 rounded bg-[#F8FAFC]">
          <div class="flex flex-col gap-2">
              <h2 class="font-bold text-sm">Amount</h2>
              <input type="text" placeholder="$0.00" class="border-2 rounded-md px-2 text-lg"></input>
          </div>
          <div class="flex flex-col gap-2">
              <h2 class="font-bold text-sm">Chose Payment Method</h2>
              <div class="text-white flex">
                  <button class="flex justify-center items-center gap-2 text-center bg-[#2563EB] w-1/2 py-2 border-l border-solid border-[#1749B8] rounded-l-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <g id="bxl-stripe 2">  <path id="Vector" d="M13.4791 9.88291C11.8531 9.27891 10.9671 8.81591 10.9671 8.07991C10.9671 7.45791 11.4781 7.10291 12.3901 7.10291C14.0571 7.10291 15.7691 7.74491 16.9481 8.32291L17.6141 4.21191C16.6791 3.76591 14.7671 3.03491 12.1241 3.03491C10.2541 3.03491 8.69909 3.52391 7.58809 4.43591C6.43309 5.38991 5.83109 6.76991 5.83109 8.43591C5.83109 11.4589 7.67809 12.7479 10.6781 13.8389C12.6141 14.5269 13.2571 15.0169 13.2571 15.7729C13.2571 16.5049 12.6281 16.9279 11.4951 16.9279C10.0921 16.9279 7.77909 16.2389 6.26409 15.3499L5.59009 19.5069C6.89409 20.2389 9.29509 20.9949 11.7871 20.9949C13.7631 20.9949 15.4111 20.5279 16.5221 19.6389C17.7671 18.6619 18.4121 17.2169 18.4121 15.3499C18.4121 12.2589 16.5231 10.9699 13.4771 9.88191H13.4791V9.88291Z" fill="white"></path>  </g></svg>
                      Stripe
                  </button>
                  <button class="flex justify-center items-center gap-3 text-center bg-[#00CA4E] w-1/2 py-2 border-r border-solid border-[#006C2A] rounded-r-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_504_922)">
                      <path d="M3.415 23.579L3.45 23.59C4.75 24 5.95 24 8.35 24H15.63C18.04 24 19.24 24 20.53 23.6C21.2266 23.3457 21.8599 22.9436 22.3862 22.4212C22.9125 21.8989 23.3195 21.2687 23.579 20.574L23.59 20.539C24 19.238 24 18.037 24 15.637V8.384C24 5.973 24 4.772 23.59 3.472C23.3361 2.77803 22.9352 2.14711 22.4148 1.62242C21.8944 1.09773 21.2669 0.691663 20.575 0.432L20.54 0.42C19.23 0 18.04 0 15.62 0H8.36C5.96 0 4.75 0 3.46 0.4C2.76511 0.655245 2.1337 1.05786 1.60912 1.5802C1.08454 2.10253 0.679222 2.73221 0.421 3.426L0.41 3.461C0 4.762 0 5.962 0 8.363V15.636C0 18.047 0 19.237 0.4 20.538C0.653936 21.2321 1.0548 21.8631 1.57516 22.388C2.09552 22.9128 2.72311 23.3191 3.415 23.579ZM6.559 15.777L7.559 14.807C7.64959 14.7214 7.76956 14.6738 7.8942 14.674C8.01884 14.6742 8.13866 14.7221 8.229 14.808C9.139 15.668 10.359 16.149 11.619 16.129C12.919 16.129 13.789 15.579 13.789 14.708C13.789 13.837 12.909 13.608 11.249 12.987C9.489 12.357 7.819 11.466 7.819 9.386C7.819 6.965 9.829 5.785 12.209 5.674L12.459 4.444C12.4821 4.33647 12.5413 4.24011 12.6269 4.17096C12.7124 4.10181 12.819 4.06406 12.929 4.064H14.719L14.819 4.074C15.079 4.134 15.249 4.384 15.189 4.644L14.919 6.015C15.819 6.315 16.669 6.785 17.399 7.406L17.419 7.426C17.609 7.626 17.609 7.926 17.419 8.106L16.49 9.036C16.3994 9.12079 16.2805 9.16879 16.1564 9.17064C16.0324 9.17249 15.9121 9.12805 15.819 9.046C14.9193 8.2837 13.7792 7.86553 12.6 7.866C11.63 7.866 10.66 8.186 10.66 9.077C10.66 9.977 11.7 10.277 12.9 10.728C15 11.428 16.74 12.309 16.74 14.37C16.74 16.611 15 18.152 12.16 18.322L11.9 19.523C11.877 19.6333 11.8167 19.7323 11.7293 19.8033C11.6419 19.8743 11.5326 19.9131 11.42 19.913H9.63L9.54 19.903C9.41151 19.8738 9.29965 19.7953 9.22855 19.6843C9.15746 19.5734 9.13284 19.4389 9.16 19.31L9.159 19.313L9.439 18.042C8.35962 17.7707 7.3671 17.229 6.555 16.468L6.559 16.471V16.461C6.46958 16.3696 6.41951 16.2469 6.41951 16.119C6.41951 15.9911 6.46958 15.8684 6.559 15.777Z" fill="white"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_504_922">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                      Cash App
                  </button>
              </div>
          </div>
      </section>


        <section className="w-full flex flex-col gap-4 px-6 py-5 rounded bg-[#F8FAFC]">
          <h2 className="font-bold text-sm">Transaction history</h2>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div class="w-8 h-8 rounded-sm flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12L10 17L20 7" stroke="#24D164" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold font-inter">$421.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div class="w-8 h-8 rounded-sm bg-[#FFFBEB] flex justify-center items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><path id="Vector" d="M10 6V10L12 12" stroke="#F6A723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path id="Vector_2" d="M1.05005 9.00007C1.27414 6.80013 2.30031 4.75968 3.93278 3.26803C5.56525 1.77639 7.68974 0.937953 9.90093 0.912697C12.1121 0.887441 14.2552 1.67713 15.9213 3.1311C17.5874 4.58507 18.6599 6.60155 18.9342 8.7958C19.2085 10.99 18.6654 13.2085 17.4084 15.0278C16.1515 16.8472 14.2687 18.1401 12.1193 18.6599C9.96997 19.1797 7.70446 18.89 5.75504 17.8461C3.80563 16.8022 1.05005 13.0001 1.05005 13.0001M1.05005 18.0001V13.0001M1.05005 13.0001H6.05005" stroke="#F6A723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold font-inter">$421.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div class="w-8 h-8 rounded-sm bg-[#FDF2F8] flex justify-center items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><path id="Vector" d="M10.9497 1.05029L1.05021 10.9498" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M1.05029 1.05029L10.9498 10.9498" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold font-inter">$421.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
              <div class="w-8 h-8 rounded-sm flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12L10 17L20 7" stroke="#24D164" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold font-inter">$421.00</p>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-2 w-full">
                <div class="w-8 h-8 rounded-sm bg-[#FFFBEB] flex justify-center items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><path id="Vector" d="M10 6V10L12 12" stroke="#F6A723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path id="Vector_2" d="M1.05005 9.00007C1.27414 6.80013 2.30031 4.75968 3.93278 3.26803C5.56525 1.77639 7.68974 0.937953 9.90093 0.912697C12.1121 0.887441 14.2552 1.67713 15.9213 3.1311C17.5874 4.58507 18.6599 6.60155 18.9342 8.7958C19.2085 10.99 18.6654 13.2085 17.4084 15.0278C16.1515 16.8472 14.2687 18.1401 12.1193 18.6599C9.96997 19.1797 7.70446 18.89 5.75504 17.8461C3.80563 16.8022 1.05005 13.0001 1.05005 13.0001M1.05005 18.0001V13.0001M1.05005 13.0001H6.05005" stroke="#F6A723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold font-inter">$421.00</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

const Deposit = () => {
  return (
    <>
      <section className="flex-grow">
        <div className="py-4 border-b-2 px-6  ">
          <div>
            <h1 className="text-2xl font-bold">Deposit</h1>
            <p className="text-xs">Deposit Money Here</p>
          </div>
        </div>

        <div className="formsss h-[90vh] overflow-auto  ">
          <DepositLayout />
        </div>
      </section>
    </>
  );
};

export default Deposit;
