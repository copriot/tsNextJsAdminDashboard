import { getUsers } from "@/utils/service";
import TableWrapper from "./tableWrapper";

import { PiPencilCircleDuotone } from "react-icons/pi";
import { TbEyeBitcoin, TbTrash } from "react-icons/tb";
import BanButton from "../button/banButton";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";

const UserTable = async () => {
  const user = await getUsers();
  console.log(user);
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>#</th>
          <th>Adı</th>
          <th>Email</th>
          <th>Ülke</th>
          <th>Şehir</th>
          <th>Sipariş Sayısı</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody className="">
        {user.map((user, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td>{user.orders.length}</td>
            <td>
              <div className="flex items-center gap-3">
                <Link
                  href={`?show=${user.id}`}
                  className="text-blue-500 bg-blue-200 p-2 border border-blue-500 rounded-md cursor-pointer hover:opacity-80"
                >
                  <FaEye />
                </Link>
                <BanButton id={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default UserTable;
