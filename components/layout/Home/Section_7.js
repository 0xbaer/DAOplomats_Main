import Image from "next/image";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";

export default function Section_7() {
  return (
    <div className="w-full flex flex-col jusitfy-center items-center gap-[96px] py-[103px] px-[10px] md:px-[60px] relative bg-[#242424]">
      <Image
        src="/images/section_7/image.png"
        width={1800}
        height={600}
        className="mb-56 hidden lg:block"
      />
      <div className="flex flex-col 2xl:flex-row justify-center items-center w-[95%] md:w-[80%] p-6 gap-[30px] 2xl:gap-[100px] lg:absolute  lg:bottom-[12%]">
        <h1
          className={
            "text-[#FCFBEB] text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] flex-none  " +
            Philosopher.className
          }
        >
          What Our <br />
          <span className="text-[#DFE225]">Client </span>
          Said
        </h1>
        <div className="bg-[#333333]">
          <div className="text-[#FCFBEB] p-10 w-[280px] md:w-[624.98px] font-normal">
            DAOplomats have been outstanding delegates within the 1inch DAO. We
            have continued to be impressed by their outstanding professionalism
            and their unwavering commitment to their core values. Their
            proactive engagement and collaborative spirit make them an excellent
            addition to any protocol seeking to enhance its governance framework
            and decentralization efforts with confidence and expertise.
            <h1 className="text-[18px] font-medium mt-3">Jordan</h1>
            <h2 className="text-[14px] font-light">1inch</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
