import { TiHome } from "react-icons/ti";
import { FaUsers, FaHeart, FaBox, FaChartArea, FaDiceD6, FaCog } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { Option } from "@/types";

export const sections: Option[] = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },

  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },

  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparişler",
    url: "/orders",
  },

  {
    icon: <FaChartArea />,
    name: "Grafikler",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
];

export const inputs = [
  {
    label: "Ürün Adı",
    name: "name",
    type: "text",
  },
  {
    label: "Marka",
    name: "brand",
    type: "text",
  },
  {
    label: "Fiyat (₺)",
    name: "price",
    type: "number",
  },
  {
    label: "Stok",
    name: "stock",
    type: "number",
  },
  {
    label: "Rayting (0-5)",
    name: "rating",
    type: "number",
    defaultValue: 0,
    min: 0,
    max: 5,
  },
  {
    label: "Yorum Sayısı",
    name: "reviews_count",
    type: "number",
    defaultValue: 0,
  },
];

export const categories = ["Elektronik", "Giyim", "Aksesuar", "Ev", "Kitap"];
