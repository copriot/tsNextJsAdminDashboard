import { getOrders } from "@/utils/service";
import TableWrapper from "./tableWrapper";

export default async function OrderTable() {
  const orders = await getOrders();

  const getColor = (status: string) => {
    switch (status) {
      case "Shipped":
        return "bg-yellow-500";
      case "Delivered":
        return "bg-green-500";
      case "Processing":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>#</th>
          <th>Sipariş Tarihi</th>
          <th>Ürün Sayısı</th>
          <th>Toplam Fiyat</th>
          <th>Adres</th>
          <th>Durum</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td>{order.order_id}</td>
            <td>
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>
            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>
            <td className="text-green-600">{order.total_price.toFixed(2)}</td>

            <td>{order.shipping_address.city}</td>
            <td>
              <span
                className={`${getColor(
                  order.status
                )} text-white px-2 py-1 rounded-lg shadow-md min-w-[100px] text-center`}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
}
