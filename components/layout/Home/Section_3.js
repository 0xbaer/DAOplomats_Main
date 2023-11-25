import Image from "next/image";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";

export default function Section_3() {
  return (
    <div className="w-full flex flex-col gap-[96px] py-[103px] relative bg-[#333F3D]">
      <div className="flex items-center justify-between w-full px-[60px] h-[331px] relative">
        <h1
          className={
            "text-[#FCFBEB] text-[120px] leading-[125px] " +
            Philosopher.className
          }
        >
          Working to
          <span className="text-[#DFE225]"> DAO it</span>
        </h1>
        <div className="flex items-center justify-center w-[408px] text-white text-center">
          Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id
          feugiat tellus.Donec luctus orci eros, eget mollis turpis gravida sed.
          Vestibulum id feugiat tellus.
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Image
          src="/images/section_3/panel1.png"
          width={350}
          height={68}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel2.png"
          width={350}
          height={68}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel3.png"
          width={350}
          height={68}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel4.png"
          width={350}
          height={68}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel5.png"
          width={350}
          height={68}
          alt="logo_1"
        />
      </div>
    </div>
  );
}
