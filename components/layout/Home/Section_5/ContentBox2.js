import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function ContentBox2() {
  return (
    <div className="flex justify-center flex-row-reverse items-center gap-[70px]">
      <div className="relative">
        <Image
          src="/images/section_5/bg2.png"
          height={600}
          width={900}
          alt="content_box_1"
        />
        <Image
          src="/images/section_5/bg2_part.svg"
          height={120}
          width={120}
          alt="logo_1"
          className="absolute bottom-10 left-10"
        />
      </div>
      <div className="flex flex-col justify-center z-10">
        <h2
          className={
            "text-[#FCFBEB] text-[16px] mb-[12px] " + Urbanist.className
          }
        >
          DeFi
        </h2>
        <h1
          className={
            "text-[55px] text-[#DFE225] mb-[18px] " + Philosopher.className
          }
        >
          Case 2
        </h1>
        <p
          className={
            "text-[#FCFBEB] text-[16px] w-[686px] " + Helvetica.className
          }
        >
          Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id
          feugiat tellus.
          <br /> Donec luctus orci eros, eget mollis turpis gravida sed.
          Vestibulum id feugiat tel.
          <br /> Donec luctus orci eros, eget mollis turpis gravida sed.
          Vestibulum id feugiat tellus.
          <br /> Donec luctus orci eros, eget mollis turpis gravida sed.
          Vestibulum id feugiat tel.
        </p>
        <div className="w-full h-[120px] border-b-[1px] border-[#DFE225] mb-[40px]"></div>
        <div className="flex gap-[30px]">
          <div
            className={
              "rounded-full bg-transparent border-[#DFE225] border-[1px] py-[7px] px-[10px] text-[#DFE225] " +
              Urbanist.className
            }
          >
            GOVERNANCE
          </div>
          <div
            className={
              "rounded-full bg-transparent border-[#DFE225] border-[1px] py-[7px] px-[10px] text-[#DFE225] " +
              Urbanist.className
            }
          >
            TOKEN DEL
          </div>
        </div>
      </div>
    </div>
  );
}
