"use client"
import Image from "next/image"
import apple from "@/app/assets/apple.svg"
import microsoft from "@/app/assets/microsoft.svg"
import slack from "@/app/assets/slack.svg"
import google from "@/app/assets/google.svg"

export default function Sponsors () {
    return ( <div className="flex w-[1922px] h-[538px] justify-center items-center bg-white">
    <div className="w-[1481] h-[294] items-center justify-center gap-60px">
          <h2 className="text-black items-center justify-center font-Inter font-bold text-[72px]">
          Our Sponsors
          </h2>
          
<div className="flex justify-between">
    <Image src={apple} alt="apple" width="100" height="100" className="w-100 h-100"></Image>
    <Image src={microsoft} alt="microsoft" width="100" height="100" className="w-100 h-100"></Image>
    <Image src={slack} alt="slack" width="100" height="100" className="w-100 h-100"></Image>
    <Image src={google} alt="google"width="100" height="100" className="w-100 h-100"></Image>
</div>

           </div>
           </div>
          )
          }