"use client";

import { deleteUser } from "@/utils/service";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function BanButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleDeleteUser = async () => {
    if (!confirm("Bu kullanıcı hesabını silmek istediğinize emin misiniz ?"))
      setLoading(true);
    await deleteUser(id)
      .then(() => {
        toast.success("Kullanıcı silindi");
        router.refresh();
      })
      .catch(() => {
        toast.error("Kullanıcı silinemedi");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <button
      disabled={loading}
      className="button bg-red-200 text-red-500 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      onClick={handleDeleteUser}
    >
      {loading ? <FaSpinner className="animate-spin" /> : <FaTrash />}
    </button>
  );
}
