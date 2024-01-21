import { Helvetica, Philosopher } from "@/components/ui/fonts";
import Image from "next/image";

export default function Section_12() {
  return (
    <div className="w-full flex flex-col gap-[96px] py-[103px] relative bg-[#333F3D]">
      <div className="w-full px-[240px] py-[150px] flex gap-[100px] justify-center relative">
        <h1
          className={
            "text-[#000] text-[16px] z-10 w-[190px] text-start mt-[45px] text-[#DFE225] " +
            Helvetica.className
          }
        >
          ABOUT US
        </h1>

        <div className="flex flex-col gap-[80px] z-10 w-full ">
          <h1
            className={
              "text-[32px] w-[918px] text-white " + Helvetica.className
            }
          >
            Our seasoned team brings diverse expertise to the DAO ecosystem,
            offering tailored solutions for decentralized governance that meet
            the unique needs of each DAO we collaborate with.
          </h1>
          <div className="flex flex-row gap-[60px]  ">
            <Image
              src="/images/section_3/image1.png"
              width={345}
              height={517}
              className="mix-blend-luminosity"
            />
            <div className={"flex flex-col"}>
              <h1
                className={
                  "text-[#FCFBEB] text-[120px] leading-[125px] " +
                  Philosopher.className
                }
              >
                Our
                <span className="text-[#DFE225]"> Values</span>
              </h1>
              <div className="flex flex-row gap-[50px]">
                <div className="flex flex-col gap-[40px] w-[271px]">
                  <div>
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
                  <div>
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
                <div className="flex flex-col gap-[40px] w-[271px]">
                  <div>
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
                  <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
