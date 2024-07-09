import { Helvetica, Philosopher } from "@/components/ui/fonts";
import Image from "next/image";
import ContentBox from "./Section_4/ContentBox";

export default function Section_4() {
  return (
    <div className="w-full px-[30px] sm:px-[120px] xl:px-[240px] py-16 md:py-[150px] flex flex-col lg:flex-row md:gap-[100px] justify-center relative">
      <Image
        src="/images/section_4/main_bg.png"
        objectFit="cover"
        layout="fill"
        className="absolute top-0 left-0"
        alt="main_bg"
      />

      <h1
        className={
          "text-[#000] text-xl font-bold md:text-[16px] z-10 w-auto md:w-[190px] text-start mt-[45px] " +
          Helvetica.className
        }
      >
        SERVICES
      </h1>

      <div className="flex flex-col gap-[80px] z-10 w-full text-[#242424]">
        <h1
          className={
            "text-[50px] sm:text-[80px] lg:text-[120px] " +
            Philosopher.className
          }
        >
          Let's work <span className="text-[#DFE225]">together</span>
        </h1>

        <div className="flex flex-col xl:flex-row gap-0 md:gap-[120px]">
          <div className="flex flex-col gap-10 md:gap-[80px]">
            <ContentBox
              logo={"/images/section_4/logo_1.svg"}
              title="DAO Tooling"
              body="Tailored tools for a smoother decentralized experience. We keep it simple, avoiding unnecessary complexity to ensure your DAO runs effortlessly."
            />

            <ContentBox
              logo={"/images/section_4/logo_2.svg"}
              title="Treasury Manager"
              body="Navigate Web3 confidently with our Treasury Management and Governance expertise, from optimizing DAO tooling to crafting governance models."
            />
          </div>

          <div className="flex flex-col gap-10 md:gap-[80px] pt-10 md:pt-[80px]">
            <ContentBox
              logo={"/images/section_4/logo_3.svg"}
              title="Governance Model Design"
              body="Craft a solid governance plan with our research-backed models. We provide clear documentation and follow up to ensure it's seamlessly integrated for effective decision-making."
            />

            <ContentBox
              logo={"/images/section_4/logo_4.png"}
              title="Tokenomics and Education"
              body="Design a sustainable token model for your governance tokens and ensure its adoption with our curated education and tokenomics programs. We blend insights from both web2 and web3 governance, providing a comprehensive perspective."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
