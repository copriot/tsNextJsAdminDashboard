import { getProducts } from "@/utils/service";
import DoughnutGraph from "../graphic/doughnutGraph";
import { ChartData } from "@/types";

export default async function CategoryChart() {
  const products = await getProducts();
  console.log("PRODUCTSS", products);
  //kategorileri new set ile o elemandan 1 tane olan bir diziye çevir
  const labelNames: string[] = [...new Set(products.map((product) => product.category))];

  //Ts de record ile objenin key ve valuesini ayarla
  const object: Record<string, number> = {};

  //productsta bulunan herbir kategory i gez ilk kez karşılaştığında valueyi 0 al 2zkez karsılastıgında 1 arttır
  products.map((product) => {
    object[product.category] = (object[product.category] || 0) + 1;
  });
  const values = Object.values(object);
  const data: ChartData = {
    labels: labelNames,
    datasets: [
      {
        label: "Kategorideki ürün sayısı",
        data: values,
      },
    ],
  };

  return (
    <div className="graphic">
      <h2 className="subtitle">Kategori Grafiği</h2>
      <DoughnutGraph data={data} />
    </div>
  );
}
