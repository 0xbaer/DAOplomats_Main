import Button from "@/components/ui/Button";
import { Philosopher, Helvetica } from "@/components/ui/fonts";
import Image from "next/image";

export default function CenterContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="flex flex-col w-fit items-center z-10">
        <h1 className={"text-[140px] text-[#DFE225] " + Philosopher.className}>
          Governance
        </h1>
        <h1
          className={
            "text-[140px] text-[#FCFBEB] -mt-[70px] " + Philosopher.className
          }
        >
          Solved Professionally
        </h1>
        <div className="mt-[60px] w-full flex items-center justify-between">
          <p
            className={
              "text-[#fcfbeb] text-[20px] font-normal " + Helvetica.className
            }
          >
            Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum
            id <br />
            feugiat tellus.
          </p>
          <Button label={"Delegate"} />
        </div>
      </div>
      <Image
        src="/images/section_1/bg_o.png"
        height={600}
        width={372}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-0 mix-blend-color-dodge"
        alt="main_bg"
      />
      <Image
        src="/images/section_1/bg_l.png"
        height={844}
        width={323}
        className="absolute top-[10%] left-0"
        alt="main_bg"
      />
      <Image
        src="/images/section_1/bg_r.png"
        height={844}
        width={323}
        className="absolute top-[50%] right-0"
        alt="main_bg"
      />
    </div>
  );
}
