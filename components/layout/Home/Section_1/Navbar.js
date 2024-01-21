"use client";
import Image from "next/image";
import { Philosopher, Urbanist } from "@/components/ui/fonts";
import NavbarButton from "@/components/ui/NavbarButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-[100px] flex items-center justify-between  z-10 relative  px-[8px] lg:px-[60px]">
      <div className="flex items-center justify-center gap-[10px] relative">
        <Image
          src="/images/section_1/logo.svg"
          width={45}
          height={45}
          alt="logo"
        />
        <h1 className={"text-[20px] text-[#DFE225] " + Philosopher.className}>
          DAO<span className="text-[#E8E8E8] ml-[3.25px]">PLOMATS</span>
        </h1>
      </div>
      <div className="flex gap-[10px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden lg:flex">
        <NavbarButton label="HOME" isActive={true} />
        <NavbarButton label="ABOUT" />
        <NavbarButton label="SERVICES" />
        <NavbarButton label="CONTACT" />
      </div>


      <div className="flex gap-[18px]">
        <Image
          src="/images/section_1/logo_2.svg"
          width={30}
          height={30}
          alt="twitter"
          onClick={() => {
            window.open("https://x.com/daoplomats", "_blank");
          }}
        />
        <Link href="/">
          <NavbarButton label="CONTACT US" />
        </Link>
      </div>
    </div>
  );
}
