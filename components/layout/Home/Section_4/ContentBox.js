import { Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function ContentBox({ title, body, logo }) {
  return (
    <div className="flex flex-col gap-8 md:gap-[25px] text-[#242424] border-b-[1px] border-[#242424] pb-14 md:pb-[25px]">
      <h1
        className={
          "text-4xl md:hidden font-bold md:font-normal " + Philosopher.className
        }
      >
        {title}
      </h1>
      <Image src={logo} width={64} height={64} alt="logo" />
      <p
        className={
          "w-full sm:w-[382px] text-[16px] font-medium " + Urbanist.className
        }
      >
        {body}
      </p>
      <h1 className={"text-[54px] hidden md:block " + Philosopher.className}>
        {title}
      </h1>
    </div>
  );
}
