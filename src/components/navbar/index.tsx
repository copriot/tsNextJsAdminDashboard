import { sections } from "@/utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import Navlinks from "./navLinks";

export default function Navbar() {
  return (
    <div className="min-h-screen min-w-[60px] shadow-lg bg-white text-black">
      <div className="navbar check  bg-white border-r border-zinc-300">
        <button className="flex items-start justify-start pl-5 pt-5 text-2xl">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle">
            <RxHamburgerMenu />
          </label>
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
