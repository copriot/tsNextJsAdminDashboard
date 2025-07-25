"use server";

import { getProductsResponse } from "@/types";
import { createProduct, updateProduct } from "@/utils/service";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
export async function handleSubmit(id: string | null, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const brand = formData.get("brand") as string;
    const price = formData.get("price") as string;
    const stock = formData.get("stock") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const image_url = formData.get("image_url") as string;
    const rating = formData.get("rating") as string;
    const reviews_count = formData.get("reviews_count") as string;

    // Validation
    if (!name || !brand || !price || !stock || !category || !description || !image_url) {
      throw new Error("Tüm alanlar zorunludur");
    }

    const productData: Omit<getProductsResponse, "id"> = {
      name,
      price: parseFloat(price),
      stock: parseInt(stock),
      category,
      description,
      image_url,
      rating: parseFloat(rating) || 0,
      reviews_count: parseInt(reviews_count) || 0,
      brand,
    };

    if (id) {
      await updateProduct(id, productData);
      redirect(`/products`);
    } else {
      await createProduct(productData);
      redirect(`/products`);
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Form submission error:", error);
    throw new Error("Ürün oluşturulurken bir hata oluştu");
  }
}
