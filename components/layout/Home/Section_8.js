import Image from "next/image";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";

export default function Section_8() {
  return (
    <div className="w-full px-[240px] py-[150px] flex gap-[100px] justify-center relative">
      <Image
        src="/images/section_8/main_bg.png"
        objectFit="cover"
        layout="fill"
        className="absolute top-0 left-0"
        alt="main_bg"
      />

      <div className="flex flex-col items-center justify-center  z-10 w-full text-[#242424]">
        <h1
          className={
            "text-[120px] text-white text-center " + Philosopher.className
          }
        >
          Let's work <span className="text-[#DFE225]">Together</span>
        </h1>
        <h4 className="text-[20px] text-white font-light">
          Just drop us a message here!
        </h4>
        <div className="grid grid-cols-2 w-[70%] gap-[20px] mt-24 mb-5">
          <input
            type="name"
            className="bg-[#333F3D] p-2 border border-[#FCFBEB30] text-gray-100 text-[16px]  focus:ring-1 focus:outline-none block w-full p-2.5 "
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="bg-[#333F3D] p-2 border border-[#FCFBEB30] text-gray-100 text-[16px]  focus:ring-1 focus:outline-none block w-full p-2.5 "
            placeholder="Your Mail"
            required
          />
        </div>
        <input
          type="name"
          className="bg-[#333F3D] p-2 border border-[#FCFBEB30] text-gray-100 text-[16px]  focus:ring-1 focus:outline-none block w-[70%] p-2.5 mb-5 "
          placeholder="Main service you are interested"
          required
        />
        <textarea
          id="message"
          className="block bg-[#333F3D] min-h-[200px] p-2.5 w-[70%] text-[16px] text-gray-100 border border-[#FCFBEB30] focus:ring-1 focus:outline-none mb-5"
          placeholder="Tell us a little more about your project"
        ></textarea>
        <button className="text-black bg-[#DFE225]  w-[70%] font-bold rounded-full text-[18px] px-5 py-2.5 mr-2 mb-2">
          Submit Form
        </button>
      </div>
    </div>
  );
}
