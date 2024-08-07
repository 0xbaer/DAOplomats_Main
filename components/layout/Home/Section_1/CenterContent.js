"use client";

import Button from "@/components/ui/Button";
import { Philosopher, Helvetica } from "@/components/ui/fonts";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function CenterContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="flex flex-col w-fit items-center z-10">
        <h1
          className={
            "-ml-3 sm:-ml-0 text-[60px] sm:text-[80px] lg:text-[140px] text-[#DFE225] " +
            Philosopher.className
          }
        >
          Governance
        </h1>
        <h1
          className={
            "-ml-3 sm:-ml-0 text-[60px] sm:text-[80px] lg:text-[140px] text-[#FCFBEB] lg:-mt-[70px] text-center " +
            Philosopher.className
          }
        >
          Solved Professionally
        </h1>

        <div className="mt-[60px] px-[10px] gap-[20px] w-full flex flex-col lg:flex-row items-center justify-between">
          <p
            className={
              "text-[#fcfbeb] text-[16pxß] sm:text-[20px] text-center lg:text-left font-normal " +
              Helvetica.className
            }
          >
            <span className="md:block">
              Tailored governance solutions by our experts streamline decision-
            </span>

            <span className="md:block">
              making in your DAO, blending the best of traditional and
              decentralized
            </span>

            <span className="md:block">
              frameworks for enhanced transparency and accountability.
            </span>
          </p>
          <Button
            label={"Delegate"}
            icon={true}
            onClick={() => {
              window.open(
                "https://boardroom.io/voter/daoplomats.eth",
                "_blank"
              );
            }}
          />
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
        className="absolute top-[10%] left-0 hidden lg:block"
        alt="main_bg"
      />
      <Image
        src="/images/section_1/bg_r.png"
        height={844}
        width={323}
        className="absolute top-[50%] right-0 hidden lg:block"
        alt="main_bg"
      />
    </div>
  );
}
