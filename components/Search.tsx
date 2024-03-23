"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${search}`);
    setSearch("");
  };

  return (
    <form
      className=" w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
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
