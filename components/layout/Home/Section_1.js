import Image from "next/image";
import Navbar from "./Section_1/Navbar";
import CenterContent from "./Section_1/CenterContent";

export default function Section_1() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Image
        src="/images/section_1/main_bg.png"
        objectFit="cover"
        layout="fill"
        className="absolute top-0 left-0"
        alt="main_bg"
      />
      <Navbar />
      <CenterContent />
    </div>
  );
}
