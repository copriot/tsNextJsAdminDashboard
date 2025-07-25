import { BiSolidBellRing } from "react-icons/bi";
import Input from "./input";
import Image from "next/image";
import avatar from "@/assets/images/user_image.webp";
export default function Header() {
  return (
    <div className="border-b border-zinc-300 px-5 py-2 md:px-8 bg-white flex justify-between items-center">
      <Input />
      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer text-zinc-700" />

        <div>
          <Image src={avatar} alt="avatar" className="rounded-full size-12" />
        </div>
        <div>
          <p className="font-semibold text-zinc-700">Developer Zeki</p>
          <p className="text-sm text-zinc-500">Admin</p>
        </div>
      </div>
    </div>
  );
}
