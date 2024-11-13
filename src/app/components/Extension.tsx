"use client"
export default function Extension () {
    return ( <div className="flex w-[1921px] h-[812px] justify-between items-center py-[140px] px-[220px] gap-98px bg-blue-950">
       <div className="flex w-[1921px] h-[759px] gap-10">
        <div className="w-[697px] h-[294] justify-center gap-60px">
          <h2 className="text-white font-Inter font-bold text-[72px]">
            Use as Extension
          </h2>
          <br/>
          <p className="text-white font-Inter text-[18px] mt-4">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
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
          
          <div className="w-[748px] h-[547px] bg-blue-200">
          </div>
          </div>
          </div>
          )
          }