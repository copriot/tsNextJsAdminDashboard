import UserTable from "@/components/table/userTable";
import { Suspense } from "react";
import Loading from "../loading";
import UserModal from "@/components/modal/userModal";

type Props = {
  searchParams: Promise<{ show?: string }>;
};

export default async function UsersPage({ searchParams }: Props) {
  //urldeki show parametresini al
  const { show } = await searchParams;
  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>
      {/* suspense  sadece tablo bölümünü yükler h1 gibi başlıkları statik elementler sabit kalır bütün sayfasının yüklenmesi yerine sadece spesifik bölümü yüklemek için kullanılır genelde async componentleri suspense ile sarmalanır fallback propu ile yüklenme sırasında ekrana basılcak conponenti ver*/}
      <Suspense fallback={<Loading designs="my-20" />}>
        <UserTable />
      </Suspense>
      {show && <UserModal userId={show} />}
    </div>
  );
}
