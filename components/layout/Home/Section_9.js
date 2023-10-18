import Image from "next/image"
import Cards from "./Section_9/Cards"
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts"

export default function Section_9() {
    return (
        <div className="w-full flex flex-col jusitfy-center items-center gap-[96px] py-[103px] px-[60px] relative bg-[#242424]">
            <div className="flex flex-col justify-center items-center w-[100%] p-6 gap-[100px]">
                <h1
                    className={
                        "text-[#FCFBEB] text-[120px] leading-[125px]  " +
                        Philosopher.className
                    }
                >
                    Read Us!
                </h1>
                <div className="flex flex-row gap-[20px]">
                    <Cards
                        logo={"/images/section_9/image1.png"}
                        title="By a nice guy • March 31, 2023 "
                        body="Cool Title to read"
                    />
                    <Cards
                        logo={"/images/section_9/image2.png"}
                        title="By a nice guy • March 31, 2023 "
                        body="Cool Title to read"
                    />
                    <Cards
                        logo={"/images/section_9/image3.png"}
                        title="By a nice guy • March 31, 2023 "
                        body="Cool Title to read"
                    />
                </div>
            </div>
        </div>
    )
}
