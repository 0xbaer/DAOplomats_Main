import React from 'react'
import Image from 'next/image'
import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts"

function Cards({ title, body, logo }) {
    return (
        <div className="flex flex-col gap-[25px] text-[#242424] border-b-[1px] border-[#242424] pb-[25px]">
            <Image src={logo} width={579} height={375} alt="logo" />
            <p className={"w-[382px] text-[16px] text-white " + Urbanist.className}>{title}</p>
            <h1 className={"text-[37.85px] text-white " + Philosopher.className}>{body}</h1>
        </div>
    )
}

export default Cards
