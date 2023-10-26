function TableHeading() {
  return (
    <tr className="text-[#94A3B8] text-[16px] ">
      <th class="py-4 px-4 text-left">
        <input type="checkbox" />
      </th>
      <th class="py-2 px-4 text-left">#</th>
      <th class="py-2 px-4 text-left">User Name</th>
      <th class="py-2 px-4 text-left">Email</th>
      <th class="py-2 px-4 text-left">Password</th>
      <th class="py-2 px-4 text-left">Admin</th>
    </tr>
  );
}

function TableContent() {
  return (
    <tr class="font-semibold text-sm">
      <td class="py-2 px-4">
        <input type="checkbox" />
      </td>
      <td class="py-2 px-4">30</td>
      <td class="py-2 px-4">Kwoff</td>
      <td class="py-2 px-4">Kwoff@test</td>
      <td class="py-2 px-4">Kwoff2003!</td>

      <td class="py-2 px-4 flex gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="4" fill="#F8FAFC" />
            <path d="M20 26.667H27.5H20Z" fill="#F8FAFC" />
            <path
              d="M20 26.667H27.5"
              stroke="#E8E8E8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.75 12.9162C24.0815 12.5847 24.5312 12.3984 25 12.3984C25.2321 12.3984 25.462 12.4442 25.6765 12.533C25.891 12.6218 26.0858 12.7521 26.25 12.9162C26.4142 13.0804 26.5444 13.2752 26.6332 13.4897C26.722 13.7042 26.7678 13.9341 26.7678 14.1662C26.7678 14.3984 26.722 14.6282 26.6332 14.8427C26.5444 15.0572 26.4142 15.2521 26.25 15.4162L15.8333 25.8329L12.5 26.6662L13.3333 23.3329L23.75 12.9162Z"
              fill="#F8FAFC"
              stroke="#E8E8E8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="4" fill="#F8FAFC" />
            <path
              d="M12.5 15H14.1667H27.5"
              stroke="#E8E8E8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.8337 15.0003V26.667C25.8337 27.109 25.6581 27.5329 25.3455 27.8455C25.0329 28.1581 24.609 28.3337 24.167 28.3337H15.8337C15.3916 28.3337 14.9677 28.1581 14.6551 27.8455C14.3426 27.5329 14.167 27.109 14.167 26.667V15.0003M16.667 15.0003V13.3337C16.667 12.8916 16.8426 12.4677 17.1551 12.1551C17.4677 11.8426 17.8916 11.667 18.3337 11.667H21.667C22.109 11.667 22.5329 11.8426 22.8455 12.1551C23.1581 12.4677 23.3337 12.8916 23.3337 13.3337V15.0003"
              stroke="#E8E8E8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.333 19.167V24.167"
              stroke="#E8E8E8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.667 19.167V24.167"
              stroke="#E8E8E8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        
      </td>
    </tr>
  );
}

export default function Transactions() {
  return (
    <section className="flex flex-col w-3/4 font-semibold">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Users</h1>
            <p className="text-xs">Admin Pannel</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-2 min-w-[90vw]">
        <div className="w-max mb-2">
          <h2 className="py-3 px-3">All Orders</h2>
          <div className="w-full border-2 border-blue-500 rounded-md "></div>
        </div>
        <table className="min-w-full bg-white text-xs">
          <thead className="bg-[#F8FAFC] text-[#94A3B8] ">
            <TableHeading />
          </thead>
          <tbody class="text-gray-700">
            <TableContent />
            <TableContent />
            <TableContent />
            <TableContent />
            <TableContent />
          </tbody>
        </table>
      </section>
    </section>
  );
}
