import { useState } from "react";
import CountdownPage from "../pages/CountdownPage";
import ResultDisplay from "../components/ResultDisplay";
import type { Result } from "../types";

export default function CountdownRoute() {
  const [result, setResult] = useState<Result>({ years: "--", months: "--", days: "--" });

  return (
    <>
      <CountdownPage setResult={setResult} />
      <ResultDisplay result={result} />
    </>
  );
}