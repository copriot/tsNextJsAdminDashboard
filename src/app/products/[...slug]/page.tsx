import Field from "@/components/form/field";
import ImagePreview from "@/components/form/imagePreview";
import { categories, inputs } from "@/utils/constants";
import { handleSubmit } from "./actions";
import { getProduct } from "@/utils/service";
import { getProductsResponse } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";

//form komponenti
function ProductForm({ product }: { product: getProductsResponse | null }) {
  return (
    <form action={handleSubmit(product?.id)} className="mx-5 ">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol Sütun */}
        <div className="space-y-4">
          {inputs.map((input) => (
            <div key={input.name}>
              <Field htmlFor={input.name} label={input.label}>
                <input
                  type={input.type}
                  name={input.name}
                  id={input.name}
                  className="input"
                  required
                  step={input.step}
                  min={input.min}
                  max={input.max}
                  defaultValue={
                    product
                      ? product[input.name as keyof getProductsResponse]
                      : input.defaultValue
                  }
                />
              </Field>
            </div>
          ))}
          <Field htmlFor="category" label="Kategori *">
            <select name="category" id="category" className="input" required>
              <option value="">Kategori Seçiniz</option>
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  defaultValue={product?.category}
                  selected={product?.category === category}
                >
                  {category}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Sağ Sütun */}
        <div className="space-y-6">
          {/* Resim Inputu */}
          <Field htmlFor="image_url" label="Resim URL">
            <input
              type="text"
              name="image_url"
              id="image_url"
              className="input"
              required
              defaultValue={product?.image_url}
            />
          </Field>
          {/* Resim Önizleme */}
          <ImagePreview imageInputId="image_url" />
          {/* Açıklama */}
          <Field htmlFor="description" label="Açıklama">
            <textarea
              name="description"
              id="description"
              className="input sm:text-sm md:min-h-[180px]"
              required
              rows={5}
              defaultValue={product?.description}
            />
          </Field>
        </div>
      </div>
      <div className=" flex justify-end mt-4">
        <button
          type="submit"
          className="button cursor-pointer transition-colors bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {product ? "Güncelle" : "Ekle"}
        </button>
      </div>
    </form>
  );
}

type Props = {
  params: Promise<{ slug: string[] }>;
};

//Form Sayfası
export default async function FormPage({ params }: Props) {
  const { slug } = await params;
  let product: getProductsResponse | null = null;

  //edit sayfasındaysak düzenlenecek ürünün bilgilerini getir
  if (slug[0] === "edit" && slug[1]) {
    try {
      product = await getProduct(slug[1]);
      if (!product) {
        notFound();
      }
    } catch (error) {
      notFound();
    }
  }
  console.log(product);
  return (
    <div className="page container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">
          {product ? "Ürün bilgilerini düzenle" : "Yeni ürün oluştur"}
        </h1>
        <Link
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors"
          href={"/products"}
        >
          Geri
        </Link>
      </div>
      <div className=" bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
}
