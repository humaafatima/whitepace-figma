"use client"
export default function Custommise () {
    return ( <div className="flex w-[1921px] h-[1588px] justify-between items-center px-[220px] gap-98px bg-white">
       <div className="flex w-[1921px] h-[759px] gap-10">
       <div className="w-[748px] h-[547px] bg-blue-200">
       </div>
        <div className="w-[697px] h-[294] justify-center gap-60px">
          <h2 className="text-black font-Inter font-bold text-[72px]">
            Customize it to your needs
          </h2>
          <br/>
          <p className="text-black font-Inter text-[18px] mt-4">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
 </p>
 <br/>
 <div className="mr-10 py-10 w-[219px] h-[63px]">
            <button
              onClick={() => alert("Button clicked!")}
              className="px-5 py-3 w-[219px] h-[63px] font-Inter border border-solid border-transparent text-white rounded bg-blue-500"
            >
              Let's Go
            </button>
           </div>
      </div>
          
          
          </div>
          </div>
          )
          }