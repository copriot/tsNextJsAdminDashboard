import OrderTable from "@/components/table/orderTable";
import { Suspense } from "react";
import Loading from "../loading";

export default function OrdersPage() {
  return (
    <div className="page">
      <h1 className="title">Siparişler</h1>

      <Suspense fallback={<Loading designs="my-20" />}>
        <OrderTable />
      </Suspense>
    </div>
  );
}
