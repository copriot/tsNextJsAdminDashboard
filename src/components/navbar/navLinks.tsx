import { Option } from "@/types";
import Link from "next/link";

export default function Navlinks({ name, icon, url }: Option) {
  return (
    <Link
      className={`flex items-center gap-2 p-5 hover:bg-gray-100 transition border-l-2 border-transparent`}
      href={url || "/"}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
}
