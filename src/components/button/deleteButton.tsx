"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const handleDelete = async () => {
    //silme işlemi için onay al
    if (!confirm("Bu ürünü silmek istediğinizden emin misiniz?")) return;
    try {
      await deleteProduct(id); //
      toast.success("Ürün başarıyla silindi.");
      router.refresh();
    } catch (error) {
      toast.error("Ürün silinirken bir hata oluştu.");
      console.error("Silme hatası:", error);
    }
  };
  // console.log(window);
  return (
    <button
      onClick={handleDelete}
      className={`bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors w-19 cursor-pointer`}
    >
      Sil
    </button>
  );
}
