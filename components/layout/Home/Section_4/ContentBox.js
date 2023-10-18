import { Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function ContentBox({ title, body, logo }) {
  return (
    <div className="flex flex-col gap-[25px] text-[#242424] border-b-[1px] border-[#242424] pb-[25px]">
      <Image src={logo} width={64} height={64} alt="logo" />
      <p className={"w-[382px] text-[16px] " + Urbanist.className}>{body}</p>
      <h1 className={"text-[54px] " + Philosopher.className}>{title}</h1>
    </div>
  );
}
