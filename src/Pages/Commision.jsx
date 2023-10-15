function Inputs() {
  return (
    <div className="flex gap-5 w-full">
      <div className="flex flex-col gap-2 w-full ">
        <label htmlFor="" className="font-bold">
          Type
        </label>
        <input
          type="text"
          className="border-2 rounded-sm px-2 py-2 leading-snug font-normal text-sm"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="" className="font-bold">
          Commission
        </label>
        <input
          type="text"
          className="border-2 rounded-sm px-2 py-2 leading-snug font-normal text-sm"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="" className="font-bold">
          Purchase Price
        </label>
        <input
          type="text"
          className="border-2 rounded-sm px-2 py-2 leading-snug font-normal text-sm"
        />
      </div>
    </div>
  );
}

function FormsComp() {
  return (
    <form action="" className="flex flex-col gap-7 pt-20 text-sm w-[50vw]">
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
    </form>
  );
}

export default function Commission() {
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
      <section className="px-6 py-2 min-w-[90vw] flex justify-center">
        <div className="bg-[#F8FAFC] px-5 ">
          <FormsComp />
        </div>
      </section>
    </section>
  );
}

function wz() {
  return (
    <section className="flex flex-col w-3/4 font-semibold">
      <section className="w-[85vw]">
        <div className="py-4 border-b-2 px-6">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-xs">Check your progress</p>
          </div>
        </div>
      </section>{" "}
      <section className="px-6 py-2 min-w-[90vw] flex justify-center">
        {/* iske niche daal -> Outlet */}
      </section>
    </section>
  );
}
