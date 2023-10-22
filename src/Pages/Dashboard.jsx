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
          <section className="min-w-[50vw] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.14)] px-6 py-6 flex justify-between">
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

          <section className="min-w-4/5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.14)]  py-4 flex flex-col  gap-6 my-8">
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
              <button class="px-10 py-1 bg-[#2563EB] rounded-sm flex items-center justify-center w-52 h-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_504_894)">
                    <path
                      d="M14.8199 4.26001C14.6213 4.6157 14.4443 4.98303 14.2899 5.36001C12.7727 5.12006 11.2272 5.12006 9.70992 5.36001C9.55551 4.98303 9.37852 4.6157 9.17992 4.26001C7.75071 4.50421 6.36132 4.94155 5.04992 5.56001C2.70486 8.9443 1.64135 13.053 2.04992 17.15C3.57815 18.2989 5.29338 19.1751 7.11992 19.74C7.53583 19.1906 7.90702 18.6087 8.22992 18C7.63399 17.7803 7.06121 17.5023 6.51992 17.17C6.66838 17.0712 6.80881 16.9609 6.93992 16.84C8.51838 17.6003 10.2479 17.9952 11.9999 17.9952C13.7519 17.9952 15.4815 17.6003 17.0599 16.84C17.1999 16.96 17.3399 17.07 17.4799 17.17C16.9357 17.4997 16.3635 17.7807 15.7699 18.01C16.0794 18.6325 16.4407 19.228 16.8499 19.79C18.6742 19.227 20.3864 18.3506 21.9099 17.2C22.3283 13.1022 21.2639 8.99019 18.9099 5.61001C17.6132 4.97875 16.2376 4.52468 14.8199 4.26001ZM8.67992 14.81C8.1795 14.7741 7.71246 14.5457 7.37684 14.1728C7.04122 13.7999 6.86311 13.3114 6.87992 12.81C6.86058 12.3079 7.0378 11.8181 7.37393 11.4446C7.71005 11.0711 8.17858 10.8435 8.67992 10.81C9.18126 10.8435 9.64978 11.0711 9.9859 11.4446C10.322 11.8181 10.4993 12.3079 10.4799 12.81C10.4993 13.3121 10.322 13.8019 9.9859 14.1754C9.64978 14.5489 9.18126 14.7765 8.67992 14.81ZM15.3199 14.81C14.8195 14.7741 14.3525 14.5457 14.0168 14.1728C13.6812 13.7999 13.5031 13.3114 13.5199 12.81C13.5006 12.3079 13.6778 11.8181 14.0139 11.4446C14.3501 11.0711 14.8186 10.8435 15.3199 10.81C15.8222 10.841 16.2922 11.0679 16.6289 11.442C16.9655 11.816 17.1418 12.3073 17.1199 12.81C17.1418 13.3128 16.9655 13.804 16.6289 14.1781C16.2922 14.5521 15.8222 14.779 15.3199 14.81Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_894">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Discord
              </button>

              <button class="px-10 py-1 bg-[#2563EB] rounded-sm flex items-center justify-center w-52 h-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.6651 3.717L2.93509 10.554C1.72509 11.04 1.73209 11.715 2.71309 12.016L7.26509 13.436L17.7971 6.791C18.2951 6.488 18.7501 6.651 18.3761 6.983L9.8431 14.684H9.84109L9.8431 14.685L9.5291 19.377C9.9891 19.377 10.1921 19.166 10.4501 18.917L12.6611 16.767L17.2601 20.164C18.1081 20.631 18.7171 20.391 18.9281 19.379L21.9471 5.151C22.2561 3.912 21.4741 3.351 20.6651 3.717Z"
                    fill="white"
                  />
                </svg>
                Telegram
              </button>
            </div>
          </section>
        </section>

        {/* TRANSACTIONS HISTORY */}
        <section className="p-4 border-l-[2px]  ">
          <div className="w-[18vw] pl-4">
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
