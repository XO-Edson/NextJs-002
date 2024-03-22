"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [Search, setSearch] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch("");
    router.push(`/${Search}/`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className=" p-2 border-none rounded-xl
         w-80 text-xl"
      />
      <button className=" ml-2 p-2.5 bg-slate-300 rounded-xl text-xl font-bold">
        🚀
      </button>
    </form>
  );
}
