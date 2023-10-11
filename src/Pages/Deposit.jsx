import React from "react";
import Sidebar from "../components/Sidebar";

const DepositLayout = () => {
  return (
    <section className="flex flex-col w-3/4 gap-10">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Deposit</h1>
            <p className="text-xs">Check your progress</p>
          </div>
        </div>
      </section>
      <section className="self-center flex flex-col gap-5">
        <section className=" flex flex-col w-[700px] gap-4 bg-gray-100 px-6 py-5">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-sm">Amount</h2>
            <input
              type="text"
              placeholder="$0.00"
              className="border-2 rounded-md px-2 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-sm">Chose Payment Method</h2>
            <div className="text-white flex">
              <button className="text-center bg-green-800 w-1/2 py-2 rounded-l-md">
                Stripe
              </button>
              <button className="text-center bg-green-300 w-1/2 py-2 rounded-r-md">
                Cash App
              </button>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col gap-4  bg-gray-100 px-6 py-5">
          <h2 className="font-bold text-sm">Transaction history</h2>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold">$421.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold">$421.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold">$421.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold">$421.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 w-full">
                <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                <div>
                  <p className="text-xs font-semibold">
                    Payment from <span className="text-blue-400">#0199</span>
                  </p>
                  <p className="text-xs font-light">Dec 23, 04:00PM</p>
                </div>
              </div>
              <p className="font-bold">$421.00</p>
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
      <div className="flex w-[100vw] overflow-x-hidden">
        {/* <Sidebar /> */}
        <DepositLayout />
      </div>
    </>
  );
};

export default Deposit;
