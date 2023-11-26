"use client";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function Section_10() {
  return (
    <div className="w-full flex flex-col jusitfy-center items-center gap-[96px] py-[103px] px-[60px] relative bg-[#242424]">
      <div className="flex flex-row items-start justify-between w-full border-b border-[#DFE225]">
        <div className="flex flex-col">
          <h1
            className={"text-[54.68px] text-[#DFE225] " + Philosopher.className}
          >
            We Would Love To Hear
          </h1>
          <h1
            className={
              "text-[54.68px] text-[#DFE225] mb-6 " + Philosopher.className
            }
          >
            From You.
          </h1>
          <div className="flex flex-row gap-[10px] mb-56">
            <button
              onClick={() => {
                window.open("https://hey.xyz/u/daoplomats", "_blank");
              }}
              className={
                "rounded-full px-[13px] py-[4.5px] border-[1px] border-white"
              }
            >
              <p className={"text-[18px] text-white " + Urbanist.className}>
                Hey
              </p>
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://boardroom.io/voter/daoplomats.eth",
                  "_blank"
                );
              }}
              className={
                "rounded-full px-[13px] py-[4.5px] border-[1px] border-white"
              }
            >
              <p className={"text-[18px] text-white " + Urbanist.className}>
                Boardroom
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#DFE225] mb-4">QUICK LINKS</h1>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <h1 className="text-white font-light text-[16px]">About</h1>
            <h1 className="text-white font-light text-[16px]">Services</h1>
            <h1 className="text-white font-light text-[16px]">Case Studies</h1>
            <h1 className="text-white font-light text-[16px]">Blog</h1>
            <h1 className="text-white font-light text-[16px]">Contact</h1>
          </div>
        </div>
        <Image src="/images/section_10/logo.svg" width={108} height={125} />
      </div>
      <div className="flex flex-row justify-between pt-14 w-full text-[#DFE225]">
        <h1>2023</h1>
        <button
          className={
            "rounded-full px-[13px] py-[4.5px] border-[1px] border-[#DFE225]"
          }
        >
          <p className={"text-[14px] " + Urbanist.className}>BACK TO TOP</p>
        </button>
      </div>
    </div>
  );
}
