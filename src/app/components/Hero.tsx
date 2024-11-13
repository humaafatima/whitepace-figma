"use client"
export default function Hero (){
return <div className="flex justify-between w-[1928px] [h-829px] place-items-center py-[140px] px-[220px] top-[92px] left-[1px] bg-blue-950">
   
    
        <div className="flex row 1/2">
        <div className="w-[656px] h-[238px]">
<h2 className="text-white font-Inter font-bold text-[64px]">Get More Done With whitepace</h2>
<p className="text-white font-Inter text-[18px]" >Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
<div className="mr-10 py-10 w-[219px] h-[63px]">
<button
        onClick={() => alert("Button clicked!")}
        className="mr-10 px-5 py-5 w-[219px] h-[63px] font-Inter border-1px solid text-white rounded bg-blue-500">
      Try Whitepace free
      </button>
      </div>
      </div>
      <div className="flex row 1/2"></div>
      <div className="w-[824px] h-[549px] gap-4 bg-cyan-50"></div>
</div>
</div>

}