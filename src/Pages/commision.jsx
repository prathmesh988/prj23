const MainCommision = () => {
    return (
      <>
        <div>
        <h1 className='pb-1'>Type</h1>
          <input
            type="text"
            name=""
            id=""
            className="py-1 px-1 border-[1px]  rounded-[10px]  border-transparent"
            placeholder=""
          />
            
        </div>
      </>
    );
  };
  
  const MainCommision3= () => {
    return (
      <>
        <div>
        <h1 className='pb-1'>Purchase</h1>
          <input
            type="text"
            name=""
            id=""
            className="py-1 px-1 border-[1px]  rounded-[10px] border-transparent"
            placeholder=""
          />
            
        </div>
      </>
    );
  };
  
  const MainCommision2 = () => {
    return (
      <>
        <div>
          <h1 className='pb-1'>Commission</h1>
          <input
            type="text"
            name=""
            id=""
            className="py-1 px-1 border-[1px]  rounded-[10px] border-transparent"
            placeholder=""
          />
        </div>
      </>
    );
  }
  
  function loopthrough(ComP) {
    const list = [];
    for (let index = 0; index < 19; index++) {
      list.push(<ComP key={index} />);
    }
    return list;
  }
  
//   const CommiSion = () => {
//     return (
//       <>
//         <div className="flex flex-col w-[100%] =">
//         <div className="py-4 border-b-2 px-6  ">
//         <div>
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <p className="text-xs">Check your progress</p>
//         </div>
//       </div>
//         <div className=" flex justify-center">
//           <div className="flex justify-center w-[50%] h-[80%] bg-slate-300	">
//              <div className="flex flex-col gap-5">
//             { loopthrough(MainCommision)}
//                {/* Pass MainCommision2 as a function */}
//             </div>
//             <div className="flex flex-col gap-5"> 
//             {loopthrough(MainCommision2)}
//             </div>
//             <div className="flex flex-col gap-5"> 
//             {loopthrough(MainCommision3)}
//             </div>
//           </div>
//         </div>
//         </div>
        
//       </>
//     );
//   }
  
function wz() {
    return (
      <section className="flex flex-col font-semibold">
        <section className="w-[85vw]">
          <div className="py-4 border-b-2 px-6">
            <div>
              <h1 className="text-2xl font-bold">Orders</h1>
              <p className="text-xs">Check your progress</p>
            </div>
          </div>
        </section>
        <section className="  px-6 py-2 flex justify-center scrollable-section overflow-y-auto max-h-[90vh]">
          <div className="  my-fit-content-height flex justify-center gap-10 p-4 border-[1px] rounded-[10px] border-transparen bg-slate-50">
            <div className="flex flex-col gap-5">
              {loopthrough(MainCommision)}
            </div>
            <div className="flex flex-col gap-5">
              {loopthrough(MainCommision2)}
            </div>
            <div className="flex flex-col gap-5">
              {loopthrough(MainCommision3)}
            </div>
          </div>
          {/* iske niche daal -> Outlet */}
        </section>
      </section>
    );
  }
  
//   export default wz;
  
  export default wz;
  