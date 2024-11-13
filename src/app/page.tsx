import Image from "next/image";
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import Project from "@/app/components/Project"
import Extension from "@/app/components/Extension"
import Customise from "@/app/components/Customise"
import Work from "@/app/components/Work"
import Sponsors from "@/app/components/Sponsors"
export default function Home(){
  return ( 
  <div className="h-screen w-screen bg-blue-950">
<Navbar/>
<Hero/>
<Project/>
<Extension/>
<Customise/>
<Work/>
<Sponsors/>

</div>
)
}