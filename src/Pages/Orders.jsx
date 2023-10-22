import React from "react";

function TableHeading() {
  return (
    <tr className="text-[#94A3B8]">
      <th class="py-2 px-4 text-left">
        <input type="checkbox" />
      </th>
      <th class="py-2 px-4 text-left">Order ID</th>
      <th class="py-2 px-4 text-left">tracking ID</th>
      <th class="py-2 px-4 text-left">Name</th>
      <th class="py-2 px-4 text-left">Date</th>
      <th class="py-2 px-4 text-left">Status</th>
      <th class="py-2 px-4 text-left">Total price</th>
    </tr>
  );
}

function TableContent() {
  return (
    <tr class="font-semibold text-sm">
      <td class="py-2 px-4">
        <input type="checkbox" />
      </td>
      <td class="py-2 px-4">SKN1200</td>
      <td class="py-2 px-4">23060923524770818861</td>
      <td class="py-2 px-4">Robert Fox</td>
      <td class="py-2 px-4">01.01.2022</td>
      <td class="py-2 px-4">
        <div className="rounded-lg bg-blue-100 w-max px-2 py-1 font-normal text-blue-600">
          <p>Continuing</p>
        </div>
      </td>
      <td class="py-2 px-4">$4.00</td>
    </tr>
  );
}

const OrderLayout = ({ rows, deleteRow, editRow }) => {
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
      <section className="px-6 py-2 min-w-[90vw]">
        <div className="w-max mb-2">
          <h2 className="py-3 px-3">All Orders</h2>
          <div className="w-full border-2 border-blue-500 rounded-md "></div>
        </div>
        <table class="min-w-full bg-white text-xs">
          <thead class="bg-blue-50 text-gray-400 font-light">
            <TableHeading />
          </thead>
          <tbody class="text-gray-700">
            <TableContent />
            <TableContent />
            <TableContent />
            <TableContent />
            <TableContent />
          </tbody>
        </table>
      </section>
    </section>
  );
};

const Orders = () => {
  return (
    <>
      <div className="flex w-[84vw] overflow-x-hidden">
        <OrderLayout />
      </div>
    </>
  );
};

export default Orders;
