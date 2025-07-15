import { GetOrdersResponse, getProductsResponse } from "@/types";

const baseURL = "http://localhost:9090";

const getOrders = async (): Promise<GetOrdersResponse[]> => {
  const res = await fetch(`${baseURL}/orders`);

  return res.json();
};

const getProducts = async (): Promise<getProductsResponse[]> => {
  const res = await fetch(`${baseURL}/products`);
  return res.json();
};

const deleteProduct = async (id: number): Promise<void> => {
  const res = await fetch(`${baseURL}/products/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

export { getOrders, getProducts, deleteProduct };
