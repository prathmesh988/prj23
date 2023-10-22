import { useState } from "react";

function TableHeading({ toggleSelectAll }) {
  return (
    <tr className="text-[#94A3B8] text-[16px] ">
      <th className="py-5 px-4 text-left">
        <input type="checkbox" onChange={toggleSelectAll} />
      </th>
      <th className="py-5 px-4 text-left font-medium">User Name</th>
      <th className="py-5 px-4 text-left font-medium">Payment Method</th>
      <th className="py-5 px-4 text-left font-medium">ID</th>
      <th className="py-5 px-4 text-left font-medium">Date</th>
      <th className="py-5 px-4 text-left font-medium">Status</th>
      <th className="py-5 px-4 text-left font-medium">Total price</th>
    </tr>
  );
}

function TableContent({ isChecked, toggleIndividualCheck, index }) {
  return (
    <tr className="font-semibold text-sm">
      <td className="p-4">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleIndividualCheck(index)}
        />
      </td>
      <td className="p-4 w-[130px]">Bob</td>
      <td className="p-4 w-[230px]">CashApp</td>
      <td className="p-4 ">645c-825623fe6756</td>
      <td className="p-4 w-[357px]">01.01.2022</td>
      <td className="p-4 w-[357px]">
        <div className="rounded-lg bg-[#E9FAEF] w-max px-2 py-1 font-medium text-[#24D164]">
          <p>Continuing</p>
        </div>
      </td>
      <td className="p-4">$4.00</td>
    </tr>
  );
}

export default function Transactions() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(
    Array(6).fill(false) // Initializes an array of 6 false values
  );

  const toggleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setCheckboxes(checkboxes.map(() => newValue));
  };

  const toggleIndividualCheck = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);

    // If all checkboxes are selected, set selectAll to true, otherwise false
    setSelectAll(newCheckboxes.every((check) => check));
  };

  return (
    <section className="flex flex-col w-3/4 font-semibold">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Transaction History</h1>
            <p className="text-xs">Admin Pannel</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-2 min-w-[90vw]">
        <div className="w-max mb-2">
          <h2 className="py-6 px-3 text-[#2563EB]">All Orders</h2>
          <div className="w-full border-2 border-blue-500 rounded-md "></div>
        </div>
        <table class="max-w-full bg-white text-xs">
          <thead class="bg-[#F8FAFC] text-[#94A3B8] ">
            <TableHeading toggleSelectAll={toggleSelectAll} />
          </thead>
          <tbody class="text-gray-700">
            {checkboxes.map((isChecked, index) => (
              <TableContent
                key={index}
                isChecked={isChecked}
                toggleIndividualCheck={toggleIndividualCheck}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
