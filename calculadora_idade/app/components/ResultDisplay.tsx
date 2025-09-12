import React from "react";
import type { Result } from "../types";

const ResultDisplay: React.FC<{ result: Result }> = ({ result }) => (
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center mt-8">
    {["years", "months", "days"].map((key) => (
      <div key={key} className="bg-white p-6 rounded-2xl shadow-lg w-36 md:w-48">
        <span className="block text-purple-600 text-5xl md:text-6xl font-extrabold">
          {result[key as keyof Result]}
        </span>
        <span className="block text-gray-400 uppercase mt-2">{key}</span>
      </div>
    ))}
  </div>
);

export default ResultDisplay;
