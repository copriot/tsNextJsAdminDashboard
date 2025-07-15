"use client";

import { ChartData } from "@/types";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
type Props = {
  data: ChartData;
};

export default function DoughnutGraph({ data }: Props) {
  return (
    <div className="flex items-center justify-center">
      <Doughnut data={data} className="!w-full !h-full max-w-[449px]" />
    </div>
  );
}
