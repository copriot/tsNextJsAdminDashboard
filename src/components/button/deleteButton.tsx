"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function DeleteButton({ id }: { id: number | string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleDelete = async () => {
    //silme işlemi için onay al
    if (!confirm("Bu ürünü silmek istediğinizden emin misiniz?")) return;
    try {
      await deleteProduct(id); //
      setLoading(true);
      toast.success("Ürün başarıyla silindi.");
      router.refresh();
    } catch (error) {
      toast.error("Ürün silinirken bir hata oluştu.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  // console.log(window);
  return (
    <button
      disabled={loading}
      onClick={handleDelete}
      className={`bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors w-19 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? "Siliniyor..." : "Sil"}
    </button>
  );
}
