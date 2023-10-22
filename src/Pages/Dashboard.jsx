import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "April", spent: 100 },
  { month: "May", spent: 300 },
  { month: "June", spent: 200 },
  { month: "July", spent: 278 },
  { month: "August", spent: 189 },
  { month: "September", spent: 239 },
  { month: "October", spent: 349 },
  { month: "July", spent: 278 },
  { month: "August", spent: 189 },
  { month: "September", spent: 239 },
  { month: "October", spent: 349 },
];

const SpentLineChart = () => (
  <div>
    <AreaChart
      width={1100}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="spent" stroke="#1655a8" fill="#f2f8ff" />
    </AreaChart>
  </div>
);

function DashboardSection() {
  return (
    <section className="flex-grow">
      <div className="py-4 border-b-2 px-6  ">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-xs">Check your progress</p>
        </div>
      </div>

      <div className="flex">
        <section className="px-6 py-2 w-max-[70vw]">
          <section className="min-w-[50vw] shadow-xl  px-6 py-4 flex justify-between">
            <div className="">
              <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
              <div className="h-[60px] border-r-2 pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg">$280.00</h1>
              </div>
              <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
            </div>
            <div className="">
              <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
              <div className="h-[60px] border-r-2 pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg">$280.00</h1>
              </div>
              <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
            </div>
            <div className="">
              <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
              <div className="h-[60px] border-r-2 pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg">$280.00</h1>
              </div>
              <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
            </div>
            <div className="">
              <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
              <div className="h-[60px] border-r-2 pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg">$280.00</h1>
              </div>
              <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
            </div>
          </section>

          <section className="min-w-4/5 shadow-lg  py-4 flex flex-col  gap-6 my-8">
            <div className="px-6">
              <p className="text-xs font-medium text-[#64748B]">
                Overall spent
              </p>
              <div>
                <h1 className="font-bold text-lg">$280.00</h1>
              </div>
            </div>
            <div className="pl-7">
              <SpentLineChart />
            </div>
            <div className="self-end px-10 text-white flex gap-4">
              <button className="px-10 py-1 bg-blue-500 rounded-sm">
                Discord
              </button>
              <button className="px-10 py-1 bg-blue-500 rounded-sm">
                Telegram{" "}
              </button>
            </div>
          </section>
        </section>
        <section className="p-4 border-l-[2px]  ">
          <div className="w-[20vw] pl-4">
            <h3 className="font-bold text-xs">Website Transaction History</h3>
            <div className="text-sm pt-4 flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="flex gap-2 w-full">
                  <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                  <div>
                    <p className="text-xs font-semibold">Payment from</p>
                    <p className="text-xs font-light">Dec 23, 04:00PM</p>
                  </div>
                </div>
                <p className="font-semibold">$421.00</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 w-full">
                  <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                  <div>
                    <p className="text-xs font-semibold">Payment from</p>
                    <p className="text-xs font-light">Dec 23, 04:00PM</p>
                  </div>
                </div>
                <p className="font-semibold">$421.00</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 w-full">
                  <div className="w-8 h-8 bg-green-100 rounded-sm"></div>
                  <div>
                    <p className="text-xs font-semibold">Payment from</p>
                    <p className="text-xs font-light">Dec 23, 04:00PM</p>
                  </div>
                </div>
                <p className="font-semibold">$421.00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

const Dashboard = () => {
  return (
    <div className=" ">
      <DashboardSection />
    </div>
  );
};

export default Dashboard;
