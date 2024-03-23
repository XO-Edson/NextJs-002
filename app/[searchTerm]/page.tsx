import getWikiResults from "@/lib/getWikiResults";
import React from "react";

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
    <main>
      {results ? (
        Object.values(results).map((result) => {
          return (
            <div>
              <h2>{result.title}</h2>
            </div>
          );
        })
      ) : (
        <h2>`${searchTerm} Not Found`</h2>
      )}
    </main>
  );
}
