import { getUser } from "@/utils/service";
import Link from "next/link";
import { MdClose } from "react-icons/md";

type Props = {
  userId: string;
};

export default async function UserModal({ userId }: Props) {
  const user = await getUser(userId);

  const userInfo = [
    {
      label: "Adı",
      value: user.name,
    },
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Adres",
      value: user.address.street,
    },
    {
      label: "Şehir",
      value: user.address.city,
    },
    {
      label: "Posta Kodu",
      value: user.address.postal_code,
    },
    {
      label: "Ülke",
      value: user.address.country,
    },
    {
      label: "Sipariş Sayısı",
      value: user.orders.length,
    },
  ];

  return (
    <div className="fixed bg-black/10 inset-0 z-[999] backdrop-blur-[2px] grid place-items-center">
      <div className=" bg-white rounded-lg p-4 w-full max-w-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kullanıcı Bilgileri</h1>
          <Link href="/users" className="button">
            <MdClose />
          </Link>
        </div>

        <div className="flex  flex-col gap-2">
          {userInfo.map((item, key) => (
            <p key={key}>
              <span className="font-bold">{item.label}:</span> {item.value}
            </p>
          ))}
          <Link
            href={`/orders?user=${user.id}`}
            className="button bg-blue-500 text-white text-center"
          >
            Siparişleri Görüntüle
          </Link>

          <hr />
          <div className="grid grid-cols-3 bg-gray-100 font-semibold text-center">
            <span>Ürün Id</span>
            <span>Adet</span>
            <span>Toplam Fiyat</span>
          </div>
          <div>
            {user.orders.map((order) => (
              <div key={order.order_id} className="grid grid-cols-3 mt-2 ">
                <span className="text-center bg-gray-200 p-2">{order.product_id}</span>
                <span className="text-center bg-gray-200 p-2">{order.quantity}</span>
                <span className="text-center bg-gray-200 p-2">{order.total_price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
