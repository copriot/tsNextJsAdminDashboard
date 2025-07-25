"use client";

import { useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

type Props = {
  imageInputId: string;
};

const ImagePreview = ({ imageInputId }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const imageInput = document.getElementById(imageInputId) as HTMLInputElement;
    //input değiştiğinde çalışacak fonksiyon
    const handleChange = () => {
      const newUrl = imageInput.value;
      setImageUrl(newUrl);

      if (newUrl) {
        //urlin gereçli bir resim url'i oldugunu kontrol et
        const testImg = new globalThis.Image();

        //resmin yüklendiğini kontrol et
        testImg.onload = () => {
          setIsValid(true);
          setIsLoading(false);
        };
        //resim yüklenmediğinde
        testImg.onerror = () => {
          setIsValid(false);
          setIsLoading(false);
        };

        //test resminin kaynağını ayarla
        testImg.src = newUrl;
      }
    };
    //inputa olay izleyicisi ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleChange);
    }
    //component unmount olduğunda event listener'ı kaldırıyoruz
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleChange);
      }
    };
  }, [imageInputId]);
  return (
    <Field htmlFor={imageInputId} label="Resim Önizleme">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div>Resim yükleniyor...</div>
        ) : isValid && imageUrl ? (
          <Image
            src={imageUrl}
            alt="Resim Önizleme"
            fill
            className="object-center"
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            {imageUrl ? "Geçersiz resim URL" : "Resim yok"}
          </div>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
