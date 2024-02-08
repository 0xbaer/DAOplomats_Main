"use client";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function Section_10({ about, services, contact, client }) {
  return (
    <div className="w-full flex flex-col jusitfy-center items-center gap-[96px] py-[103px] px-[60px] relative bg-[#242424]">
      <div className="flex lg:flex-row flex-col items-start lg:justify-between w-full border-b border-[#DFE225]">
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
          <div className="flex flex-row gap-[10px] lg:mb-56 mb-20">
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
        <div className="flex flex-col mb-20">
          <h1 className="text-[#DFE225] mb-4">QUICK LINKS</h1>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <h1
              className="text-white font-light text-[16px]"
              onClick={() => {
                about.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </h1>
            <h1
              className="text-white font-light text-[16px]"
              onClick={() => {
                services.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
            </h1>
            <h1
              className="text-white font-light text-[16px]"
              onClick={() => {
                client.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Case Studies
            </h1>
            <h1 className="text-white font-light text-[16px]">Blog</h1>
            <h1
              className="text-white font-light text-[16px]"
              onClick={() => {
                contact.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </h1>
          </div>
        </div>
        <Image
          src="/images/section_10/logo.svg"
          width={108}
          height={125}
          className="mb-5"
        />
      </div>
      <div className="flex flex-row justify-between pt-14 w-full text-[#DFE225]">
        <h1>2023</h1>
        <button
          className={
            "rounded-full px-[13px] py-[4.5px] border-[1px] border-[#DFE225]"
          }
        >
          <p
            className={"text-[14px] " + Urbanist.className}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            BACK TO TOP
          </p>
        </button>
      </div>
    </div>
  );
}
