import DeleteButton from "@/components/button/deleteButton";
import { getProducts } from "@/utils/service";
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="page">
      <div className="flex justify-between items-center mb-6">
        <h1 className="title">Ürünler</h1>
        <Link
          href="/products/create"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all delay-50"
        >
          Ürün Ekle
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                unoptimized
                className="object-center"
              />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
                <p className="text-gray-700 mb-2 text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$ {product.price.toFixed(2)}</span>
                  <span className="bg-blue-100 text-sm text-blue-800 px-2 py-1 rounded">
                    Stok: {product.stock}
                  </span>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => {
                    const ratingDiff = product.rating - i;

                    if (ratingDiff >= 1)
                      return <FaStar key={i} className="text-yellow-500" />;
                    if (ratingDiff >= 0.5)
                      return <FaStarHalfAlt key={i} className="text-yellow-500" />;
                    return <FaRegStar key={i} className="text-gray-400" />;
                  })}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.rating} - {product.reviews_count} yorum)
                  </span>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link
                    href={`/products/edit/${product.id}`}
                    className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600 transition-colors"
                  >
                    Düzenle
                  </Link>
                  <DeleteButton id={product.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
