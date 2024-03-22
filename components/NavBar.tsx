import Link from "next/link";
import Search from "./Search";

export default function NavBar() {
  return (
    <nav className=" w-full p-4 bg-slate-600 flex flex-col center items-center md:flex-row justify-between drop-shadow-xl">
      <Link href="/">
        <h1 className=" text-3xl font-bold  text-white">WikiRockets</h1>
      </Link>
      <Search />
    </nav>
  );
}
