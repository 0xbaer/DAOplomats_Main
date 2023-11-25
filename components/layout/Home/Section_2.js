import Button from "@/components/ui/Button";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function Section_2() {
  return (
    <div className="w-full flex flex-col gap-[96px] py-[103px] px-[60px] relative">
      <Image
        src="/images/section_2/bg_main.png"
        layout="fill"
        alt="bg"
        className="absolute top-0 left-0 z-0 object-cover"
      />
      <div className="flex items-center justify-between w-full h-[331px] relative">
        <h1
          className={
            "text-[#FCFBEB] text-[120px] leading-[125px] " +
            Philosopher.className
          }
        >
          Enabling <br />
          <span className="text-[#DFE225]">Decentralization</span>
        </h1>
        <div className="flex items-center justify-center gap-[100px]">
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <p
              className={
                "text-[120px] leading-[125px] " + Philosopher.className
              }
            >
              5M
            </p>
            <p className={"text-[24px] text-center " + Urbanist.className}>
              Token Delegated
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <div
              className={
                "text-[120px] leading-[125px] relative " + Philosopher.className
              }
            >
              10
              <p
                className={
                  "-top-[35%] -right-[25%] text-[48px] absolute " +
                  Philosopher.className
                }
              >
                +
              </p>
            </div>
            <p className={"text-[28px] text-center " + Urbanist.className}>
              Years on the market
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <p
              className={
                "text-[120px] leading-[125px] " + Philosopher.className
              }
            >
              5
            </p>
            <p className={"text-[28px] " + Urbanist.className}>DAOS</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-[60px] relative">
        <p className={"text-[#DFE225] text-[36px] " + Philosopher.className}>
          We are delegate of
        </p>
        <div className="w-full flex justify-between items-center">
          <Image
            src="/images/section_2/logo_1.png"
            width={300}
            height={58}
            alt="logo_1"
          />
          <Image
            src="/images/section_2/logo_2.png"
            width={300}
            height={58}
            alt="logo_2"
          />
          <Image
            src="/images/section_2/logo_3.png"
            width={300}
            height={58}
            alt="logo_3"
          />
          <Image
            src="/images/section_2/logo_4.png"
            width={300}
            height={58}
            alt="logo_4"
          />
        </div>
      </div>
      <hr className="w-[100%] h-[1px] bottom-[0] left-[0] z-10"></hr>
      <div className="w-full flex justify-start">
        <div className="flex flex-col justify-center items-start gap-[60px] relative">
          <p className={"text-[#DFE225] text-[36px] " + Philosopher.className}>
            Our governance partners
          </p>
          <div className="w-full flex justify-between items-center gap-[50px]">
            <Image
              src="/images/section_2/logo_2.png"
              width={300}
              height={58}
              alt="logo_2"
            />
            <Image
              src="/images/section_2/logo_5.png"
              width={300}
              height={58}
              alt="logo_5"
              className="mb-3"
            />
            <Image
              src="/images/section_2/logo_6.png"
              width={300}
              height={58}
              alt="logo_6"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-[60px] relative ml-[200px]">
          <p className={"text-[#DFE225] text-[36px] " + Philosopher.className}>
            Our voting history
          </p>
          <Button label={"Check Here"} icon={true} />
        </div>
      </div>
    </div>
  );
}
