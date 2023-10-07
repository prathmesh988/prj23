import React from "react";
import Sidebar from "../components/Sidebar";

const DepositLayout = () => {
  return (
    <section className="flex flex-col w-3/4">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-xs">Check your progress</p>
          </div>
        </div>
      </section>
    </section>
  );
};

const Deposit = () => {
  return (
    <>
      <div className="flex w-[100vw] overflow-x-hidden">
        <Sidebar />
        <DepositLayout />
      </div>
    </>
  );
};

export default Deposit;
