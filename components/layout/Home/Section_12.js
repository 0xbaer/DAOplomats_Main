import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function Section_12() {
  return (
    <div className="w-full flex flex-col gap-[96px] md:py-[103px] relative bg-[#333F3D]">
      <div className="w-full xl:px-[100px] px-[50px] md:py-[150px] flex flex-col 2xl:flex-row gap-14 md:gap-[100px] justify-center relative">
        <h1
          className={
            "text-[50px] md:text-[16px] z-10 w-auto md:w-[190px] text-start mt-[45px] text-[#DFE225] " +
            Helvetica.className
          }
        >
          ABOUT US
        </h1>

        <div className="flex flex-col gap-[80px] z-10 w-full ">
          <h1
            className={
              "text-xl md:text-[32px] text-white " + Philosopher.className
            }
            style={{
              textWrap: "wrap",
            }}
          >
            Our seasoned team brings diverse expertise to the DAO ecosystem,
            offering tailored solutions for decentralized governance that meet
            the unique needs of each DAO we collaborate with.
          </h1>

          <div className="flex lg:flex-row flex-col gap-[60px]  ">
            <Image
              src="/images/section_3/image1.png"
              width={345}
              height={517}
              className="mix-blend-luminosity md:w-auto w-full -ml-3 md:-ml-0"
            />
            <div className={"flex flex-col mb-24"}>
              <h1
                className={
                  "text-[#FCFBEB] text-[120px] leading-[125px] mb-16 md:mb-10 " +
                  Philosopher.className
                }
              >
                Our
                <span className="text-[#DFE225]"> Values</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-16 md:gap-[50px]">
                <div className="flex flex-col gap-16 md:gap-[40px] w-full md:w-[271px]">
                  <div className="w-full">
                    <h1
                      className={
                        "text-[#DFE225] text-[18px] " + Philosopher.className
                      }
                    >
                      {" "}
                      Objective decision making{" "}
                    </h1>
                    <p className="text-[#FCFBEB] text-[16px]">
                      We design and implement decision making frameworks which
                      enable us to perform qualitative and quantative analysis
                      in order to arrive at conclusions.
                    </p>
                  </div>

                  <div className="w-full">
                    <h1
                      className={
                        "text-[#DFE225] text-[18px] " + Philosopher.className
                      }
                    >
                      Decentralisation{" "}
                    </h1>
                    <p className="text-[#FCFBEB] text-[16px]">
                      We believe in a highly distributed power structures and
                      strive to push decision making power to the edges
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-16 md:gap-[40px] w-full md:w-[271px]">
                  <div>
                    <h1
                      className={
                        "text-[#DFE225] text-[18px] " + Philosopher.className
                      }
                    >
                      {" "}
                      Positive sum{" "}
                    </h1>
                    <p className="text-[#FCFBEB] text-[16px]">
                      We strive to make our interactions positive sum whenever
                      possible to allow maximum number of stakeholders to
                      benefit via collaboration.
                    </p>
                  </div>
                  <div>
                    <h1
                      className={
                        "text-[#DFE225] text-[18px] " + Philosopher.className
                      }
                    >
                      United we stand{" "}
                    </h1>
                    <p className="text-[#FCFBEB] text-[16px]">
                      We believe decentralisation is paramount in web3
                      governance. We aim to be the voice of everyday users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
