import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="h-full grid place-items-center ">
      <FaSpinner className="animate-spin text-blue-500 text-3xl" />
    </div>
  );
}
