"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col gap-4 text-center font-bold  text-red-500 ">
        <h1>Bir hata oluştu</h1>
        <p>{error.message}</p>
        <button
          onClick={reset}
          className="bg-sky-500 cursor-pointer py-1 text-white rounded hover:bg-sky-600 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
