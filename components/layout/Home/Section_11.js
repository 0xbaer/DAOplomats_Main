"use client";
import Image from "next/image";
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";
import { Button, Card, Typography } from "@material-tailwind/react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Date", "Description", "Protocol", "Type", "Info"];

const TABLE_ROWS = [
  {
    date: "19-05-2023",
    desc: "Orbit Program Participant",
    logo: "logo_1",
    type: "Milestone",
  },
  {
    date: "20-04-2023",
    desc: "Uniswap Accountability Committee",
    logo: "logo_2",
    type: "Milestone",
  },
  {
    date: "13-04-2023",
    desc: "1000 Governance Votes",
    logo: "logo_3",
    type: "Milestone",
  },
  {
    date: "02-04-2023",
    desc: "Formed Growth AVC",
    logo: "logo_4",
    type: "Milestone",
  },
  {
    date: "22-03-2023",
    desc: "Aave Governance Process Improvements",
    logo: "logo_1",
    type: "Proposal",
  },
  {
    date: "10-03-2023",
    desc: "Euler Governance Facilitator Role",
    logo: "logo_5",
    type: "Milestone",
  },
  {
    date: "04-03-2023",
    desc: "[HIP-21] Hop DAO Ambassador Program",
    logo: "logo_6",
    type: "Proposal",
  },
  {
    date: "05-12-2022",
    desc: "CGP 2.0 by Questbook",
    logo: "logo_7",
    type: "Milestone",
  },
  {
    date: "25-10-2022",
    desc: "$DAI - Collateral Onboarding Vote",
    logo: "logo_8",
    type: "Proposal",
  },
  {
    date: "02-06-2022",
    desc: "Should Jet Protocol list USDC as a collateral type?",
    logo: "logo_8",
    type: "Proposal",
  },
];

export default function Section_11() {
  return (
    <div className=" py-[120px] w-full gap-[80px] flex flex-col items-center justify-center relative">
      <Image
        src="/images/section_11/bg.png"
        objectFit="cover"
        layout="fill"
        className="absolute top-0 left-0"
        alt="main_bg z-0"
      />
      <h1
        className={
          "text-[#FCFBEB] text-[120px] leading-[125px] z-10 " +
          Philosopher.className
        }
      >
        Our <span className="text-[#DFE225]">Governance</span> Feed
      </h1>

      <Card className="h-full overflow-scroll bg-transparent border-2 border-[#DFE225]">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th key={head} className=" border-b-2 border-[#DFE225] p-4">
                  <Typography
                    variant="small"
                    color="white"
                    className={
                      "font-normal leading-none text-[20px] " +
                      (index === 3 ? "ml-[60px]" : "")
                    }
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ date, desc, logo, type }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal pr-[60px] text-[16.5px]"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal pr-[60px] text-[16.5px]"
                    >
                      {desc}
                    </Typography>
                  </td>
                  <td
                    className={
                      classes + " flex w-full items-center justify-center"
                    }
                  >
                    <Image
                      src={"/images/section_11/" + logo + ".svg"}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt="logo"
                    />
                  </td>
                  <td className={classes + " pl-[75px] pr-[50px]"}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="white"
                      className="font-medium text-[16.5px]"
                    >
                      {type}
                    </Typography>
                  </td>
                  <td className={classes + " pr-[85px]"}>
                    <ArrowRightCircleIcon className="w-[30px] h-[30px] text-white" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      <Button className="z-10 rounded-full text-black px-[300px] text-[18px] bg-[#DFE225]">
        Delegate with us
      </Button>
    </div>
  );
}
