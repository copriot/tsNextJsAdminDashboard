import { GetOrdersResponse, getProductsResponse } from "@/types";

const baseURL = "http://localhost:9090";

//Siparişleri getir
const getOrders = async (): Promise<GetOrdersResponse[]> => {
  const res = await fetch(`${baseURL}/orders`);

  return res.json();
};
//Tüm ürünleri getir
const getProducts = async (): Promise<getProductsResponse[]> => {
  const res = await fetch(`${baseURL}/products`);
  return res.json();
};

//Tek bir ürünü getir
const getProduct = async (id: string): Promise<getProductsResponse> => {
  const res = await fetch(`${baseURL}/products/${id}`);
  return res.json();
};

//Bir ürünü güncelle
const updateProduct = async (
  id: string,
  product: Partial<getProductsResponse>
): Promise<getProductsResponse> => {
  const res = await fetch(`${baseURL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

const deleteProduct = async (id: number | string): Promise<void> => {
  const res = await fetch(`${baseURL}/products/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
//Yeni ürün oluştur
const createProduct = async (
  product: Omit<getProductsResponse, "id">
): Promise<getProductsResponse> => {
  try {
    console.log("Sending product data:", product);

    const res = await fetch(`${baseURL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    console.log("Response status:", res.status);
    console.log("Response ok:", res.ok);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Server error response:", errorText);
      throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
    }

    const result = await res.json();
    console.log("Created product:", result);
    return result;
  } catch (error) {
    console.error("Create product error:", error);
    throw error;
  }
};

export {
  getOrders,
  getProducts,
  deleteProduct,
  createProduct,
  getProduct,
  updateProduct,
};
