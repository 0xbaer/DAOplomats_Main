import Image from "next/image"
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts"

export default function Section_7() {
    return (
        <div className="w-full flex flex-col jusitfy-center items-center gap-[96px] py-[103px] px-[60px] relative bg-[#242424]">
            <Image
                src='/images/section_7/image.png'
                width={1800}
                height={600}
                className="mb-56"
            />
            <div className="flex flex-row justify-center items-center w-[80%] p-6 gap-[100px] absolute bottom-[12%]">
                <h1
                    className={
                        "text-[#FCFBEB] text-[120px] leading-[125px] flex-none  " +
                        Philosopher.className
                    }
                >
                    What Our <br/>
                    <span className="text-[#DFE225]">Client </span>
                    Said
                </h1>
                <div className="bg-[#333333]">
                    <div className="text-[#FCFBEB] p-10 w-[624.98px] font-normal">
                        Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tellus. Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tel.
                        Donec luctus orci eros, eget mollis turpis gravida sed. Vestibulum id feugiat tellus. Donec luctus orci eros.
                        <h1 className="text-[18px] font-medium mt-3">Delina Shmicell</h1>
                        <h2 className="text-[14px] font-light">Fashnap Model</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
