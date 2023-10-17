import { Helvetica } from "./fonts";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Button({ className, label, onClick, icon = false }) {
  return (
    <button
      className={
        "rounded-full px-[40px] py-[14px] border-[1px] bg-transparent border-[#FCFBEB] text-[#FCFBEB] uppercase " +
        className
      }
      onClick={onClick}
    >
      <p className={"text-[18px] " + Helvetica.className}>
        {label}
        {icon && (
          <ArrowUpRightIcon className="inline-block ml-[10px] w-[20px] h-[20px] text-[#FCFBEB]" />
        )}
      </p>
    </button>
  );
}
