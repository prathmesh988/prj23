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
      <h1 className="text-3xl font-bold">Label Lab</h1>
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
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 9H16V13H14V9Z" fill="#2563EB" />
                  <path
                    d="M18 4V2C18 0.897 17.103 0 16 0H3C1.346 0 0 1.346 0 3V15C0 17.201 1.794 18 3 18H18C19.103 18 20 17.103 20 16V6C20 4.897 19.103 4 18 4ZM3 2H16V4H3C2.74252 3.98848 2.49941 3.87809 2.32128 3.69182C2.14315 3.50554 2.04373 3.25774 2.04373 3C2.04373 2.74226 2.14315 2.49446 2.32128 2.30818C2.49941 2.12191 2.74252 2.01152 3 2ZM18 16H3.012C2.55 15.988 2 15.805 2 15V5.815C2.314 5.928 2.647 6 3 6H18V16Z"
                    fill="#2563EB"
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
