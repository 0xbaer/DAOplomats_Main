import Image from "next/image";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";

export default function Section_3() {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-[96px] py-[103px] relative bg-[#333F3D]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full px-[60px] md:h-[331px] relative">
        <h1
          className={
            "text-[#FCFBEB] text-[50px] sm:text-[80px] lg:text-[120px] md:leading-[125px] " +
            Philosopher.className
          }
        >
          Working to
          <span className="text-[#DFE225] block md:inline-block"> DAO it</span>
        </h1>
        {/* <div className="flex items-center justify-center w-[350px] md:w-[408px] text-white text-center">
          Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id
          feugiat tellus.Donec luctus orci eros, eget mollis turpis gravida sed.
          Vestibulum id feugiat tellus.
        </div> */}
      </div>
      <div className="flex flex-col lg:flex-row  justify-between items-center">
        <Image
          src="/images/section_3/panel1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto", padding: "10px 0px" }}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel2.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto", padding: "10px 0px" }}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel3.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto", padding: "10px 0px" }}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel4.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto", padding: "10px 0px" }}
          alt="logo_1"
        />
        <Image
          src="/images/section_3/panel5.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80%", height: "auto", padding: "10px 0px" }}
          alt="logo_1"
        />
      </div>
      {/* <div className="w-full flex-col xl:flex-row px-[90px] xl:px-[240px] py-[150px] flex gap-[100px] justify-center relative">
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
              "text-[14px] sm:text-[22px] xl:text-[32px] xl:w-[918px] text-white " + Helvetica.className
            }
          >
            Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum
            id feugiat tellus. Donec luctus orci eros, eget mollis turpis
            gravida sed. Vestibulum id feugiat tellus.
          </h1>
          <div className="flex flex-col justify-center items-center xl:flex-row gap-[60px]  ">
            <Image
              src="/images/section_3/image1.png"
              width={345}
              height={517}
              className="mix-blend-luminosity"
            />
            <div className={"flex flex-col justify-center items-center lg:items-start"}>
              <h1
                className={
                  "text-[#FCFBEB] text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] " +
                  Philosopher.className
                }
              >
                Our
                <span className="text-[#DFE225]"> Values</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-[50px]">
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
      </div> */}
    </div>
  );
}
