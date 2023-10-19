import { Philosopher } from "@/components/ui/fonts";
import Image from "next/image";
import ProfileSection from "./Section_6/ProfileSection";

export default function Section_6() {
  return (
    <div className="h-screen w-screen relative flex flex-col justify-center px-[50px] gap-[80px]">
      <Image
        src="/images/section_6/main_bg.png"
        objectFit="cover"
        layout="fill"
        className="absolute top-0 left-0"
        alt="main_bg"
      />
      <h1
        className={"text-[100px] text-[#FCFBEB] z-10 " + Philosopher.className}
      >
        Our <span className="text-[#DFE225]">Team</span>
      </h1>
      <div className="flex gap-[50px] w-[100%] h-[60%] z-10">
        <ProfileSection name="Baer.eth" role="Role" />
        <ProfileSection name="Jengajojo.eth" role="Role" />
        <ProfileSection name="Erren Tag" role="Role" />
        <ProfileSection name="Monica Barker" role="Role" />
      </div>
    </div>
  );
}
