"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChartData } from "@/types";
type Props = {
  data: ChartData;
};

export default function LineGraph({ data }: Props) {
  return (
    <div className=" flex items-center justify-center">
      <Line data={data} className="!w-full !h-full max-w-[900px]" />
    </div>
  );
}
