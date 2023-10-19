import { Helvetica, Philosopher } from "@/components/ui/fonts";

export default function ProfileSection({ name, role }) {
  return (
    <div className="flex flex-col gap-[20px] w-full h-[100%]">
      <div className="w-full h-full bg-[#C4C4C4]"></div>
      <h2 className={"text-[38px] " + Philosopher.className}>{name}</h2>
      <p className={"text-[14px] " + Helvetica.className}>{role}</p>
    </div>
  );
}
