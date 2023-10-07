import React from "react";
// import Sidebar from "../components/Sidebar";

const OrderLayout = () => {
  return (
    <section className="flex flex-col w-3/4 font-semibold">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-xs">Check your progress</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-2">
        <h2 className="py- border-b-4 border-blue-600 w-max">All Orders</h2>
        <section className="py-4">
          <div className="w-full flex justify-between border-[1px] px-2 py-1 rounded-md">
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <input type="checkbox" name="" id="" />
                <h3>Order ID</h3>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" name="" id="" />
                <h3>Order ID</h3>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h3>Tracking ID</h3>
              <h3>Tracking ID</h3>
            </div>
            <div className="flex flex-col gap-8">
              <h3>Name</h3>
              <h3>Name</h3>
            </div>
            <div className="flex flex-col gap-8">
              <h3>Date</h3>
              <h3>Date</h3>
            </div>
            <div className="flex flex-col gap-8">
              <h3>Status</h3>
              <h3>Status</h3>
            </div>
            <div className="flex flex-col gap-8">
              <h3>Total Price</h3>
              <h3>Total Price</h3>
            </div>
          </div>
          <form
            action=""
            className="w-[] flex justify-between px-2 py-1 font-serif"
          ></form>
        </section>
      </section>
    </section>
  );
};

const Orders = () => {
  return (
    <>
      <div className="flex w-[100vw] overflow-x-hidden">
        {/* <Sidebar /> */}
        <OrderLayout />
      </div>
    </>
  );
};

export default Orders;
