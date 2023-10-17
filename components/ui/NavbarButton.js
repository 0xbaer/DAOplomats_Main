import { Urbanist } from "./fonts";

export default function NavbarButton({ className, label, onClick, isActive }) {
  return (
    <button
      className={"rounded-full px-[13px] py-[4.5px] border-[1px] " + className}
      style={{
        backgroundColor: isActive ? "#DFE225" : "#000000",
        color: isActive ? "#000000" : "#DFE225",
        border: isActive ? "none" : "1px solid #DFE225",
      }}
      onClick={onClick}
    >
      <p className={"text-[14px] " + Urbanist.className}>{label}</p>
    </button>
  );
}
