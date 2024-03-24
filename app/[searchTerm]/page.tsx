import getWikiResults from "@/lib/getWikiResults";
import React from "react";

import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Props) {
  const searchResults: Promise<SearchResult> = getWikiResults(searchTerm);

  const data = await searchResults;

  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className=" w-96  min-h-screen mx-auto bg-white p-4">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2>`${searchTerm} Not Found`</h2>
      )}
    </main>
  );
}
