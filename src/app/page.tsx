import icon1 from "@/assets/images/icon-1.webp";
import icon2 from "@/assets/images/icon-2.webp";
import icon3 from "@/assets/images/icon-3.webp";
import icon4 from "@/assets/images/icon-4.png";
import InfoCard from "@/components/card/infoCard";
import CategoryChart from "@/components/home/categoryChart";
import SalesChart from "@/components/home/salesChart";
import { InfoCardItem } from "@/types";

export default function Page() {
  const cards: InfoCardItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcılar",
      value: 1576,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: 788,
    },
    {
      icon: icon3,
      label: "Toplam Ürün",
      value: 1576,
    },
    {
      icon: icon4,
      label: "Toplam Satış",
      value: "419,123,12" + "$",
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
