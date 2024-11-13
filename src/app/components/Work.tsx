"use client"
export default function Work () {
    return ( <div className="flex w-[1921px] h-[574px] justify-center items-center bg-blue-950">
    <div className="w-[1481] h-[294] items-center justify-center gap-60px">
          <h2 className="text-white font-Inter font-bold text-[72px]">
          Your work, everywhere you are
          </h2>
          
          
        <p className="text-white font-Inter text-[18px]">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and 
          <br/>
          OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
 </p>

 
 <div className="mr-10 py-10 w-[219px] h-[63px]">
            <button
              onClick={() => alert("Button clicked!")}
              className="px-5 py-3 w-[219px] h-[63px] font-Inter border border-solid border-transparent text-white rounded bg-blue-500">
              Try Taskey
            </button>
            </div>
           </div>
           </div>
          )
          }