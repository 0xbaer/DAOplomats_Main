import { Philosopher } from "@/components/ui/fonts";
import Image from "next/image";
import ContentBox from "./Section_5/ContentBox";
import ContentBox2 from "./Section_5/ContentBox2";

export default function Section_5() {
  return (
    <div className="px-[60px] py-[160px] flex flex-col w-full items-center justify-center relative gap-[70px]">
      <Image
        src="/images/section_5/main_bg.png"
        objectFit="cover"
        layout="fill"
        className="absolute top-0 left-0"
        alt="main_bg"
      />
      <h1
        className={"text-[124px] text-[#FCFBEB] z-10 " + Philosopher.className}
      >
        Case <span className="text-[#DFE225]">Studies</span>
      </h1>
      <ContentBox />
      <ContentBox2 />
    </div>
  );
}
