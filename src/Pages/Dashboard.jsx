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
      <CartesianGrid vertical={false} strokeOpacity={0.4} />
      <XAxis tickLine={false} dataKey="month" axisLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip />
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
          <section className="min-w-[50vw] shadow-md  px-6 py-6 flex justify-between">
            <div className="">
              <h3 className="text-[0.8rem] font-semibold text-gray-500">
                Balance
              </h3>
              <div className="h-[60px] border-r-2 pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg self-end">$280.00</h1>
              </div>
              <p className="text-xs text-gray-500 font-bold">Last Week $0</p>
            </div>
            <div className="">
              <h3 className="text-[0.8rem] font-semibold text-gray-500">
                Total Orders
              </h3>
              <div className="h-[60px] border-r-2 pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg self-end">$28</h1>
              </div>
              <p className="text-xs text-gray-500 font-bold">Last Week 0</p>
            </div>
            <div className="">
              <h3 className="text-[0.8rem] font-semibold text-gray-500">
                Total Deposited
              </h3>
              <div className="h-[60px] border-r-2 pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg self-end">$400</h1>
              </div>
              <p className="text-xs text-gray-500 font-bold">
                Last Week $75,251
              </p>
            </div>
            <div className="">
              <h3 className="text-[0.8rem] font-semibold text-gray-500">
                Labels Created Today
              </h3>
              <div className="h-[60px] pt-4 flex align-bottom w-[200px]">
                <h1 className="font-bold text-lg self-end">$280.00</h1>
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
                <h1 className="font-bold text-lg self-end">$280.00</h1>
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

        {/* TRANSACTIONS HISTORY */}
        <section className="p-4 border-l-[2px]  ">
          <div className="w-[20vw] pl-4">
            <h3 className="font-bold text-xs">Transaction History</h3>
            <div className="text-sm pt-4 flex flex-col gap-3">
              {/* PAYMENTS DIV */}
              <div className="flex justify-between">
                <div className="flex gap-2 w-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 4.13623 0 3.20435 0.304482 2.46927C0.710458 1.48915 1.48915 0.710458 2.46927 0.304482C3.20435 0 4.13623 0 6 0H34C35.8638 0 36.7957 0 37.5307 0.304482C38.5108 0.710458 39.2895 1.48915 39.6955 2.46927C40 3.20435 40 4.13623 40 6V34C40 35.8638 40 36.7957 39.6955 37.5307C39.2895 38.5108 38.5108 39.2895 37.5307 39.6955C36.7957 40 35.8638 40 34 40H6C4.13623 40 3.20435 40 2.46927 39.6955C1.48915 39.2895 0.710458 38.5108 0.304482 37.5307C0 36.7957 0 35.8638 0 34V6Z"
                      fill="#FDF2F8"
                    />
                    <path
                      d="M24.9497 15.0503L15.0502 24.9498"
                      stroke="#ED4F9D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.0503 15.0503L24.9498 24.9498"
                      stroke="#ED4F9D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <p className="text-xs font-semibold">
                      Payment from <span className="text-[#2563EB]">#0003</span>
                    </p>
                    <p className="text-[0.75rem] font-light">Dec 23, 04:00PM</p>
                  </div>
                </div>
                <p className="font-semibold text-xs self-center">$421.00</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 w-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 4.13623 0 3.20435 0.304482 2.46927C0.710458 1.48915 1.48915 0.710458 2.46927 0.304482C3.20435 0 4.13623 0 6 0H34C35.8638 0 36.7957 0 37.5307 0.304482C38.5108 0.710458 39.2895 1.48915 39.6955 2.46927C40 3.20435 40 4.13623 40 6V34C40 35.8638 40 36.7957 39.6955 37.5307C39.2895 38.5108 38.5108 39.2895 37.5307 39.6955C36.7957 40 35.8638 40 34 40H6C4.13623 40 3.20435 40 2.46927 39.6955C1.48915 39.2895 0.710458 38.5108 0.304482 37.5307C0 36.7957 0 35.8638 0 34V6Z"
                      fill="#F0FDF4"
                    />
                    <path
                      d="M13 20L18 25L28 15"
                      stroke="#24D164"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <p className="text-xs font-semibold">
                      Payment from <span className="text-[#2563EB]">#0003</span>
                    </p>
                    <p className="text-[0.75rem] font-light">Dec 23, 04:00PM</p>
                  </div>
                </div>
                <p className="font-semibold text-xs self-center">$421.00</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 w-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 4.13623 0 3.20435 0.304482 2.46927C0.710458 1.48915 1.48915 0.710458 2.46927 0.304482C3.20435 0 4.13623 0 6 0H34C35.8638 0 36.7957 0 37.5307 0.304482C38.5108 0.710458 39.2895 1.48915 39.6955 2.46927C40 3.20435 40 4.13623 40 6V34C40 35.8638 40 36.7957 39.6955 37.5307C39.2895 38.5108 38.5108 39.2895 37.5307 39.6955C36.7957 40 35.8638 40 34 40H6C4.13623 40 3.20435 40 2.46927 39.6955C1.48915 39.2895 0.710458 38.5108 0.304482 37.5307C0 36.7957 0 35.8638 0 34V6Z"
                      fill="#F0FDF4"
                    />
                    <path
                      d="M13 20L18 25L28 15"
                      stroke="#24D164"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <p className="text-xs font-semibold">
                      Payment from <span className="text-[#2563EB]">#0003</span>
                    </p>
                    <p className="text-[0.75rem] font-light">Dec 23, 04:00PM</p>
                  </div>
                </div>
                <p className="font-semibold text-xs self-center">$421.00</p>
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
