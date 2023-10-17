import { Helvetica } from "./fonts";

export default function Button({ className, label, onClick }) {
  return (
    <button
      className={
        "rounded-full px-[40px] py-[14px] border-[1px] bg-transparent border-[#FCFBEB] text-[#FCFBEB] uppercase " +
        className
      }
      onClick={onClick}
    >
      <p className={"text-[18px] " + Helvetica.className}>{label}</p>
    </button>
  );
}
