function TableHeading() {
  return (
    <tr>
      <th class="py-2 px-4 text-left">
        <input type="checkbox" />
      </th>
      <th class="py-2 px-4 text-left">User Name</th>
      <th class="py-2 px-4 text-left">Payment Method</th>
      <th class="py-2 px-4 text-left">ID</th>
      <th class="py-2 px-4 text-left">Date</th>
      <th class="py-2 px-4 text-left">Status</th>
      <th class="py-2 px-4 text-left">Total price</th>
    </tr>
  );
}

function TableContent() {
  return (
    <tr class="font-semibold text-sm">
      <td class="py-2 px-4">
        <input type="checkbox" />
      </td>
      <td class="py-2 px-4">Bob</td>
      <td class="py-2 px-4">CashApp</td>
      <td class="py-2 px-4">645c-825623fe6756</td>
      <td class="py-2 px-4">01.01.2022</td>
      <td class="py-2 px-4">
        <div className="rounded-lg bg-green-200 w-max px-2 py-1 font-normal text-green-600">
          <p>Continuing</p>
        </div>
      </td>
      <td class="py-2 px-4">$4.00</td>
    </tr>
  );
}

export default function Transactions() {
  return (
    <section className="flex flex-col w-3/4 font-semibold">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-xs">Check your progress</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-2 min-w-[90vw]">
        <table class="min-w-full bg-white text-xs">
          <thead class="bg-blue-50 text-gray-400 font-light">
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
