import { sections } from "@/utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import Navlinks from "./navLinks";

export default function Navbar() {
  return (
    <div className="min-h-screen min-w-[60px]  bg-white border-r border-zinc-300 text-black">
      <div className="navbar">
        <button className="grid place-items-center pt-5 text-2xl">
          <RxHamburgerMenu />
        </button>

        <div>
          {sections.map((i, key) => (
            <Navlinks icon={i.icon} url={i.url || "/"} name={i.name} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
