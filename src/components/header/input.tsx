"use client";

import { GoSearch } from "react-icons/go";

export default function Input() {
  return (
    <form className="flex items-center px-2 text-gray-500 border relative rounded-md">
      <button className="absolute right-2">
        <GoSearch className="text-xl text-zinc-700" />
      </button>
      <input type="text" className="p-1 outline-none" placeholder="ara" />
    </form>
  );
}
