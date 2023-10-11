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
            <div className="flex  hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md gap-2">
              <DashboardIcon />
              <li>Dashboard</li>
            </div>
          </Link>
          <Link to={"order-label"}>
            <div className="flex  hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md gap-2">
              <OrderLabelIcon />
              <li>Order label</li>
            </div>
          </Link>
          <Link to={"orders"}>
            <div className="flex  hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md gap-2">
              <OrderIcon />
              <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
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
            <div className="flex  hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md gap-2">
              <Deposit />
              <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
                Deposit
              </li>
            </div>
          </Link>
          <Link to={"/Help"}>
            <div className="flex  hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md gap-2">
              <HelpIcon />
              <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
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
