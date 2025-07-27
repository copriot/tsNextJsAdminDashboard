import icon1 from "@/assets/images/icon-1.webp";
import icon2 from "@/assets/images/icon-2.webp";
import icon3 from "@/assets/images/icon-3.webp";
import icon4 from "@/assets/images/icon-4.png";
import InfoCard from "@/components/card/infoCard";
import CategoryChart from "@/components/home/categoryChart";
import SalesChart from "@/components/home/salesChart";
import { getValues } from "@/utils/service";
import { InfoCardItem } from "@/types";

export default async function Page() {
  const values = await getValues();
  const cards: InfoCardItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcılar",
      value: values.total_users,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: values.total_orders,
    },
    {
      icon: icon3,
      label: "Toplam Ürün",
      value: values.total_products,
    },
    {
      icon: icon4,
      label: "Toplam Satış",
      value: values.total_price.toLocaleString() + "$",
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Admin Paneli</h1>
      <section className="grid sm:grid-cols-2 gap-5 mt-5 lg:grid-cols-4">
        {cards.map((i, key) => (
          <InfoCard item={i} key={key} />
        ))}
      </section>
      <section className="grid lg:grid-cols-14 gap-5 mt-10">
        <div className="lg:col-span-9">
          <SalesChart />
        </div>
        <div className="lg:col-span-5">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
}
