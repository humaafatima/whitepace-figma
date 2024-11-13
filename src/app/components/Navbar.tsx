"use client"
export default function Navbar (){
return <div>
  <nav className="flex justify-between items-center p-4 bg-blue-950">
    
    <div className="flex row gap-4 text-white font-inter text-4xl list-none">
        <li>WhitePace</li>
        </div>
        <div className="flex row gap-4 list-none">
  <ul className="flex gap-4 justify-between items-right px-4 py-4 font-sans font-bold text-1xl text-white">
        <li>Products</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
    
  </div>
  <div className="flex gap-4 list-none">
  <button
        onClick={() => alert("Button clicked!")}
        className="mr-5 px-10 py-2 font-Inter border-1px solid text-white rounded bg-yellow-200">
      Login
      </button>
    
    
    
  </div>
  </nav>
  </div>
  

}