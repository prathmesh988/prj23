import { Link } from "react-router-dom";
import OrderIcon from "@mui/icons-material/LocalOfferOutlined";
import DashboardIcon from "@mui/icons-material/LayersOutlined";
import OrderLabelIcon from "@mui/icons-material/ShoppingBagOutlined";
import Deposit from "@mui/icons-material/AccountBalanceWalletOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Scale } from "@mui/icons-material";
function Sidebar() {
  return (
    <section className="text-gray-600 w-60 border-r-2 h-screen md:h-[100vh] py-4 px-6">
      <h1 className="text-3xl font-bold text-black">label lab</h1>
      <div className="py-4">
        <h3 className="pb-4 text-sm px-2  ">Home</h3>
        <ul className="flex flex-col gap-2">
          <Link to={"Dashboard"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              {/* <DashboardIcon /> */}
              <div className="pt-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L1 6L11 11L21 6L11 1Z"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 16L11 21L21 16"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 11L11 16L21 11"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <li>Dashboard</li>
            </div>
          </Link>
          <Link to={"order-label"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              {/* <OrderLabelIcon /> */}
              <div className="pt-1">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 20H16C17.103 20 18 19.103 18 18V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H14V5C14 2.243 11.757 0 9 0C6.243 0 4 2.243 4 5V6H1C0.734784 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7V18C0 19.103 0.897 20 2 20ZM6 5C6 3.346 7.346 2 9 2C10.654 2 12 3.346 12 5V6H6V5ZM2 8H4V10H6V8H12V10H14V8H16L16.002 18H2V8Z"
                    fill="#A09F9F"
                  />
                </svg>
              </div>
              <li>Order label</li>
            </div>
          </Link>
          <Link to={"Transactions"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              <div className="pt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 10H23"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li>Transactions</li>
            </div>
          </Link>
          <Link to={"UserPage"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              <div className="pt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <li>UserPage</li>
            </div>
          </Link>
          <Link to={"Commission"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              <div className="pt-1">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7503 4.3335H3.25033C2.96301 4.3335 2.68746 4.44763 2.48429 4.6508C2.28113 4.85396 2.16699 5.12951 2.16699 5.41683V20.5835C2.16699 20.8708 2.28113 21.1464 2.48429 21.3495C2.68746 21.5527 2.96301 21.6668 3.25033 21.6668H22.7503C23.0376 21.6668 23.3132 21.5527 23.5164 21.3495C23.7195 21.1464 23.8337 20.8708 23.8337 20.5835V5.41683C23.8337 5.12951 23.7195 4.85396 23.5164 4.6508C23.3132 4.44763 23.0376 4.3335 22.7503 4.3335ZM21.667 16.2502C20.805 16.2502 19.9784 16.5926 19.3689 17.2021C18.7594 17.8116 18.417 18.6382 18.417 19.5002H7.58366C7.58366 18.6382 7.24125 17.8116 6.63176 17.2021C6.02226 16.5926 5.19561 16.2502 4.33366 16.2502V9.75016C5.19561 9.75016 6.02226 9.40775 6.63176 8.79826C7.24125 8.18877 7.58366 7.36212 7.58366 6.50016H18.417C18.417 7.36212 18.7594 8.18877 19.3689 8.79826C19.9784 9.40775 20.805 9.75016 21.667 9.75016V16.2502Z"
                    fill="#A09F9F"
                  />
                  <path
                    d="M13.0003 8.6665C10.6105 8.6665 8.66699 10.61 8.66699 12.9998C8.66699 15.3897 10.6105 17.3332 13.0003 17.3332C15.3902 17.3332 17.3337 15.3897 17.3337 12.9998C17.3337 10.61 15.3902 8.6665 13.0003 8.6665ZM13.0003 15.1665C11.8054 15.1665 10.8337 14.1948 10.8337 12.9998C10.8337 11.8049 11.8054 10.8332 13.0003 10.8332C14.1952 10.8332 15.167 11.8049 15.167 12.9998C15.167 14.1948 14.1952 15.1665 13.0003 15.1665Z"
                    fill="#A09F9F"
                  />
                </svg>
              </div>
              <li>Commission</li>
            </div>
          </Link>
          <Link to={"orders"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              {/* <OrderIcon /> */}
              <div className="pt-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.59 12.41L12.42 19.58C12.2343 19.766 12.0137 19.9135 11.7709 20.0141C11.5281 20.1148 11.2678 20.1666 11.005 20.1666C10.7422 20.1666 10.4819 20.1148 10.2391 20.0141C9.99632 19.9135 9.77575 19.766 9.59 19.58L1 11V1H11L19.59 9.59C19.9625 9.96473 20.1716 10.4716 20.1716 11C20.1716 11.5284 19.9625 12.0353 19.59 12.41Z"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6H6.01"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <li className="hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md">
                Orders
              </li>
            </div>
          </Link>
        </ul>
      </div>

      <hr />
      <div className="py-4">
        <h3 className="pb-4 text-sm px-2  ">Misc</h3>
        <ul className="flex flex-col gap-2">
          <Link to={"Deposit"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              {/* <Deposit /> */}
              <div className="pt-1">
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 9.93054H17.1154V13.9407H15V9.93054Z"
                    fill="#A09F9F"
                  />
                  <path
                    d="M19.2307 4.91776V2.91268C19.2307 1.80687 18.282 0.907593 17.1153 0.907593H3.36534C1.61591 0.907593 0.192261 2.25701 0.192261 3.91522V15.9457C0.192261 18.1523 2.08976 18.9534 3.36534 18.9534H19.2307C20.3974 18.9534 21.3461 18.0541 21.3461 16.9483V6.92285C21.3461 5.81704 20.3974 4.91776 19.2307 4.91776ZM3.36534 2.91268H17.1153V4.91776H3.36534C3.093 4.90622 2.83586 4.79555 2.64746 4.6088C2.45905 4.42205 2.3539 4.17361 2.3539 3.91522C2.3539 3.65683 2.45905 3.40839 2.64746 3.22164C2.83586 3.03489 3.093 2.92422 3.36534 2.91268ZM19.2307 16.9483H3.37803C2.88938 16.9362 2.30765 16.7528 2.30765 15.9457V6.73738C2.63976 6.85066 2.99197 6.92285 3.36534 6.92285H19.2307V16.9483Z"
                    fill="#A09F9F"
                  />
                </svg>
              </div>

              <li className="hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md">
                Deposit
              </li>
            </div>
          </Link>
          <Link to={"/Help"}>
            <div className="flex  hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md gap-2">
              {/* <HelpIcon /> */}
              <div className="pt-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.09009 8.00008C8.32519 7.33175 8.78924 6.76819 9.40004 6.40921C10.0108 6.05024 10.729 5.91902 11.4273 6.03879C12.1255 6.15857 12.7589 6.52161 13.2152 7.06361C13.6714 7.60561 13.9211 8.2916 13.9201 9.00008C13.9201 11.0001 10.9201 12.0001 10.9201 12.0001"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 16H11.01"
                    stroke="#A09F9F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <li className="hover:bg-gray-100 hover:text-blue-600 px-2 rounded-md">
                Help
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
