"use client";
import Image from "next/image";
import circle4 from "@/app/assets/circle4.jpg";

export default function Project() {
  return (
    <div className="flex flex-col w-[1920px] h-[1588px] items-center py-[140px] px-[220px] bg-white">
      <div className="flex w-[1480px] h-[547px] gap-10">
        <div className="w-[748px] flex flex-col justify-center">
          <h2 className="text-black font-Inter font-bold text-[72px]">
            Project <br />
            Management
          </h2>
          <p className="text-black font-Inter text-[18px] mt-4">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <div className="mt-10">
            <button
              onClick={() => alert("Button clicked!")}
              className="px-5 py-3 w-[219px] h-[63px] font-Inter border border-solid border-transparent text-white rounded bg-blue-500"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="w-[748px] h-[547px] bg-blue-200"></div>
      </div>
      <div className="flex row w-[1480px] h-[547px] py-20 gap-100px">
      <div className="flex align-left w-[710] h-[661px] mt-10">
        <Image src={circle4} alt="circle4" width={800} height={300} className="w-800 h-300" />
      </div>
      <div className="w-[748px] flex flex-col justify-center">
      <h2 className="text-black font-Inter font-bold text-[72px]">
      Work together
    </h2>
    <p className="text-black font-Inter text-[18px] mt-4">
    With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.

          </p>
          </div>
    </div>
    </div>
  );
}
