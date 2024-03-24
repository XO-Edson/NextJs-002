import React from "react";

type Props = {
  result: Result;
};

export default function item({ result }: Props) {
  return <div>{result.title}</div>;
}
