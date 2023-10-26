// import Profile from "../assets/Daniel.png";

function FromTableHeading({ allChecked, toggleAllChecked }) {
  return (
    <tr className="text-black text-[16px] ">
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Name
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Company
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Street
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Street2
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Zip
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        City
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        State
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Phone
      </th>
    </tr>
  );
}

function FromTableContent({ isChecked, toggleChecked }) {
  return (
    <tr className="font-semibold ">
      <td className="py-5 pr-4 text-left font-medium">Oppulent LLC</td>
      <td className="py-5 pr-4 text-left font-medium">Oppulent LLC</td>
      <td className="py-5 pr-4 text-left font-medium">
        9351 <br /> West Laurel Dr <br /> Suite 302
      </td>
      <td className="py-5 pr-4 text-left font-medium"></td>
      <td className="py-5 pr-4 text-left font-medium">66801</td>
      <td className="py-5 pr-4 text-left font-medium">Emporia</td>
      <td className="py-5 pr-4 text-left font-medium">KS</td>
      <td className="py-5 pr-4 text-left font-medium"></td>
    </tr>
  );
}

function ToTableHeading({ allChecked, toggleAllChecked }) {
  return (
    <tr className="text-black text-[16px] ">
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Name
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Company
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Street
      </th>
      <th className="py-5 pr-4 text-left font-semibold min-w-[110px]  max-w-[115px]">
        Street2
      </th>
    </tr>
  );
}

function ToTableContent({ isChecked, toggleChecked }) {
  return (
    <tr className="font-semibold ">
      <td className="py-5 pr-4 text-left font-medium">Oppulent LLC</td>
      <td className="py-5 pr-4 text-left font-medium">Oppulent LLC</td>
      <td className="py-5 pr-4 text-left font-medium">
        9351 <br /> West Laurel Dr <br /> Suite 302
      </td>
      <td className="py-5 pr-4 text-left font-medium"></td>
    </tr>
  );
}

export default function Orders() {
  return (
    <section className="w-[100%] flex flex-col  font-semibold">
      <section className="">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Bulk Order Label</h1>
            <p className="text-xs">Purchase Labels In Bulk</p>
          </div>
        </div>
      </section>{" "}
      <section className="px-6 py-2 min-w-[90vw] flex flex-col gap-10">
        <div className="flex flex-col bg-[#F8FAFC]  pt-[1.5rem] pb-[1.5rem] w-[95%] px-10 rounded-[4px] gap-1 formsss">
          <h3>TYPE</h3>
          <select
                    name=""
                    className="w-[100%] text-gray-400 text-xs border-[1px] h-[40px] mb-[10px!important] "
                    id=""
                  >
                    <option value="" disabled selected className="">
                      UPS Next Day Air V1
                    </option>
                    <option value="UPS Next Day Air V1"></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
          <div className="flex flex-col gap-2">
            <h3 className="">Upload CSV</h3>
            <button className="w-[200px] h-[45px] pl-[10px] px-[40px!important] w-max px-3 py-1 bg-[#2563EB] font-light flex justify-center gap-2 items-center rounded-[4px] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.16675 12.4997H10.8334V7.49967H13.3334L10.0001 3.33301L6.66675 7.49967H9.16675V12.4997Z"
                  fill="white"
                />
                <path
                  d="M16.6667 15.0003H3.33341V9.16699H1.66675V15.0003C1.66675 15.9195 2.41425 16.667 3.33341 16.667H16.6667C17.5859 16.667 18.3334 15.9195 18.3334 15.0003V9.16699H16.6667V15.0003Z"
                  fill="white"
                />
              </svg>
              <span> Upload CSV </span>
            </button>
          </div>
        </div>
      </section>
      <section className="px-6 py-2 min-w-[90vw]">
        <div className="flex flex-col bg-[#F8FAFC]   w-[95%] pl-10 pr-0 rounded-[4px] gap-4  ">
          <div className="bg-[rgb(248,250,252)] flex  w-[100%] rounded-[4px]  py-1 ">
            <div className="py-5  w-[60%]">
              <h1 className="text-[#2563EB] font-semibold">FROM</h1>
              <FromTableHeading />
              <FromTableContent />
              <FromTableContent />
              <FromTableContent />
              <FromTableContent />
              <FromTableContent />
              <FromTableContent />
            </div>
            <div className="bg-[#F1F5F9] p-5 rounded-md w-[40%]">
              <h1 className="text-[#2563EB] font-semibold">TO</h1>
              <ToTableHeading />
              <ToTableContent />
              <ToTableContent />
              <ToTableContent />
              <ToTableContent />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
