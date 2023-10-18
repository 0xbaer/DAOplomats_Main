import { Helvetica, Philosopher } from "@/components/ui/fonts";
import Image from "next/image";
import ContentBox from "./Section_4/ContentBox";

export default function Section_4() {
  return (
    <div className="w-full px-[240px] py-[150px] flex gap-[100px] justify-center relative">
      <Image
        src="/images/section_4/main_bg.png"
        objectFit="cover"
        layout="fill"
        className="absolute top-0 left-0"
        alt="main_bg"
      />
      <h1
        className={
          "text-[#000] text-[16px] z-10 w-[190px] text-start mt-[45px] " +
          Helvetica.className
        }
      >
        SERVICES
      </h1>

      <div className="flex flex-col gap-[80px] z-10 w-full text-[#242424]">
        <h1 className={"text-[120px] " + Philosopher.className}>
          Let's work together
        </h1>
        <div className="flex gap-[120px]">
          <div className="flex flex-col gap-[80px]">
            <ContentBox
              logo={"/images/section_4/logo_1.svg"}
              title="DAO Tooling"
              body="Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tellus. Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tel."
            />
            <ContentBox
              logo={"/images/section_4/logo_2.svg"}
              title="Treasury Manager"
              body="Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tellus. Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tel."
            />
          </div>
          <div className="flex flex-col gap-[80px] pt-[80px]">
            <ContentBox
              logo={"/images/section_4/logo_3.svg"}
              title="DAO Consulting"
              body="Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tellus. Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tel."
            />
            <ContentBox
              logo={"/images/section_4/logo_4.png"}
              title="Others"
              body="Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tellus. Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tel."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
