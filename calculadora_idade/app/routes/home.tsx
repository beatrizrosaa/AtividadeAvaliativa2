import { useState } from "react";
import AgeCalculatorPage from "../pages/AgeCalculatorPage";
import ResultDisplay from "../components/ResultDisplay";
import type { Result } from "../types";

export default function HomePage() {
  const [result, setResult] = useState<Result>({ years: "--", months: "--", days: "--" });

  return (
    <>
      <AgeCalculatorPage setResult={setResult} />
      <ResultDisplay result={result} />
    </>
  );
}