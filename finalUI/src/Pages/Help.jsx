import React from "react";
// import Sidebar from "../components/Sidebar";

const Help = () => {
  return (
    <>
      <section className="flex-grow">
        <div className="py-4 border-b-2 px-6  ">
          <div>
            <h1 className="text-2xl font-bold">Help</h1>
            <p className="text-xs">Need Help ?</p>
          </div>
        </div>

        <div className="formsss h-[90vh] overflow-auto  ">
        <div className="flex items-center text-center justify-center w-[100%] h-[100%]">
          <div>
            <h1 className="text-2xl font-bold">Currently Under Development!</h1>
            <p className="text-xs">As we continue to launch, the help section is under development until further notice! If you need help, please go to the dashboard and click on Telegram or Discord.</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Help;