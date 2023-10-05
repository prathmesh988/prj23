import React from "react";

function Sidebar() {
  return (
    <section className="text-gray-600 w-60 border-r-2 h-screen md:h-[100vh] py-4 px-6">
      <h1 className="text-3xl font-bold">Label Lab</h1>
      <div className="py-4">
        <h3 className="pb-1 text-sm">Home</h3>
        <ul className="flex flex-col gap-2">
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Dashboard
          </li>
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Order label
          </li>
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Orders
          </li>
        </ul>
      </div>

      <hr />
      <div className="py-4">
        <h3 className="pb-1 text-sm">Misc</h3>
        <ul className="flex flex-col gap-2">
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Deposit
          </li>
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Help
          </li>
        </ul>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="flex-grow">
      <div className="py-4 border-b-2 px-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-xs">Check your progress</p>
        </div>
      </div>

      <section className="px-6 py-2">
        <section className="w-4/5 shadow-lg px-6 py-4 flex justify-between">
          <div className="">
            <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
            <div className="h-[60px] border-r-2 flex align-bottom w-[200px]">
              <h1 className="font-bold text-lg">$280.00</h1>
            </div>
            <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
          </div>
          <div className="">
            <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
            <div className="h-[60px] border-r-2 flex align-bottom w-[200px]">
              <h1 className="font-bold text-lg">$280.00</h1>
            </div>
            <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
          </div>
          <div className="">
            <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
            <div className="h-[60px] border-r-2 flex align-bottom w-[200px]">
              <h1 className="font-bold text-lg">$280.00</h1>
            </div>
            <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
          </div>
          <div className="">
            <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
            <div className="h-[60px] border-r-2 flex align-bottom w-[200px]">
              <h1 className="font-bold text-lg">$280.00</h1>
            </div>
            <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
          </div>
        </section>

        <section className="w-4/5 shadow-lg px-6 py-4">
          <div></div>
        </section>
      </section>
    </section>
  );
}

const Dashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <DashboardSection />
    </div>
  );
};

export default Dashboard;
