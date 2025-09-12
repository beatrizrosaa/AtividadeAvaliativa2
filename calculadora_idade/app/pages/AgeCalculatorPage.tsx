import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DateForm from "../components/DateForm";
import type { FormInputs, Result } from "../types";
import { Link } from "react-router-dom";

const AgeCalculatorPage: React.FC<{ setResult: (result: Result) => void }> = ({ setResult }) => {
  const navigate = useNavigate();

  const handleAgeCalculation = useCallback((data: FormInputs) => {
    const { day, month, year } = data;
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
      alert("A data de nascimento não pode ser no futuro!");
      setResult({ years: '--', months: '--', days: '--' });
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  }, [setResult]);

  return (
    <div className="flex flex-col items-center gap-8">
      <DateForm 
        onCalculate={handleAgeCalculation}
        title="Calculadora de Idade"
        description="Insira sua data de nascimento abaixo."
      />
      <Link
        to="/countdown" // O destino do link
        className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors"
      >
        Ir para Contagem Regressiva
      </Link>
    </div>
  );
};

export default AgeCalculatorPage;
