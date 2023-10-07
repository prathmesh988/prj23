function Sidebar() {
  return (
    <section className="text-gray-600 w-60 border-r-2 h-screen md:h-[100vh] py-4 px-6">
      <h1 className="text-3xl font-bold">Label Lab</h1>
      <div className="py-4">
        <h3 className="pb-1 text-sm">Home</h3>
        <ul className="flex flex-col gap-2">
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Dashboard
          </li>
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Order label
          </li>
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Orders
          </li>
        </ul>
      </div>

      <hr />
      <div className="py-4">
        <h3 className="pb-1 text-sm">Misc</h3>
        <ul className="flex flex-col gap-2">
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Deposit
          </li>
          <li className="hover:bg-blue-50 hover:text-blue-300 px-2 rounded-md">
            Help
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
