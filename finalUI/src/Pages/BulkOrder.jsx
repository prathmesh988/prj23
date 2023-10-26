function TableElement(){
    return(

        <>
            <tr className="">
                                <td className="p-2">
                                Oppulent <br />LLC
                                </td>

                                <td className="p-2">
                                Oppulent <br />LLC
                                </td>

                                <td className="p-2">
                                9351 <br />
                                West Laurel Dr <br />Suite 302
                                </td>

                                <td className="p-2">
                                <div className="w-[76px] h-[56px]"></div>
                                </td>

                                <td className="p-2">
                                66801
                                </td>

                                <td className="p-2">
                                Emporia
                                </td>
                                <td className="p-2">
                                    KS

                                </td>
                                <td className="p-2">
                                    <div className="w-[76px] h-[56px]"></div>
                                </td>
                            
                            </tr>

        </>
    )
}

function Bulk(){
    return(
        <>
            
                <div className="flex flex-col bg-[#F8FAFC]  pt-[1.5rem] pb-[1.5rem] w-[95%] px-10 rounded-[4px] gap-4  ">
                    <h3>TYPE</h3>
                    <input type="text" name="" id=""  className="rounded-[4px] w-[98%] "/>
                    <div className="flex flex-col gap-2">
                        <h3>Upload CSV</h3>   
                        <button className="w-[252px] h-[49px] bg-[#2563EB] flex justify-center gap-2 items-center rounded-[4px] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.16675 12.4997H10.8334V7.49967H13.3334L10.0001 3.33301L6.66675 7.49967H9.16675V12.4997Z" fill="white"/>
            <path d="M16.6667 15.0003H3.33341V9.16699H1.66675V15.0003C1.66675 15.9195 2.41425 16.667 3.33341 16.667H16.6667C17.5859 16.667 18.3334 15.9195 18.3334 15.0003V9.16699H16.6667V15.0003Z" fill="white"/>
                            </svg>
                            <span> Upload CSV </span>
                        </button>
                    </div>
                </div>


                
                <div className="flex  bg-[#F8FAFC]  pt-[1.5rem] pb-[1.5rem] w-[95%] px-10 rounded-[4px]   ">
                    <div className="flex flex-col gap-3">
                        <h3>From</h3>
                        <table>
                       
                        </table>

                        
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3>TO</h3>
                        <table>
                       
                        </table>

                        
                    </div>
                </div>
             
               
             
               
    
        </>


    )

}








function BulkOrder(params) {
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
          <section className=" px-5 py-5 min-w-[85vw] flex flex-col items-center  gap-5">
            {/* iske niche daal -> Outlet */}
            {/* <Main/> */}
            <Bulk/>
          </section>
        </section>
      );
}

export default BulkOrder;