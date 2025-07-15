import { getOrders } from "@/utils/service";
import LineGraph from "../graphic/lineGraph";
import { ChartData } from "@/types";

export default async function SalesChart() {
  const orders = await getOrders();
  const labels: string[] = orders.map((order) => order.order_date);
  const totalPrice: number[] = orders.map((order) => order.total_price);
  const data: ChartData = {
    labels,
    datasets: [
      {
        label: "Satış Tutarı",
        data: totalPrice,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="graphic">
      <h2 className="subtitle">Satış Grafiği</h2>

      <LineGraph data={data} />
    </div>
  );
}
