import { InfoCardItem } from "@/types";
import Image from "next/image";

type Props = {
  item: InfoCardItem;
};

export default function InfoCard({ item }: Props) {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center">
      <div>
        <h4 className="text-gray-700 whitespace-nowrap text-sm sm:text-base">
          {item.label}
        </h4>
        <p className="font-bold text-xl md:text-2xl">{item.value}</p>
      </div>
      <Image src={item.icon} alt={item.label} width={56} height={56} />
    </div>
  );
}
