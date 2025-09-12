import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DateForm from "../components/DateForm";
import type { FormInputs, Result } from "../types";
import { Link } from "react-router-dom";

const CountdownPage: React.FC<{ setResult: (result: Result) => void }> = ({ setResult }) => {
  const navigate = useNavigate();
  const nextYear = new Date().getFullYear() + 1;
  const defaultEventDate = { day: 1, month: 1, year: nextYear };

  const handleCountdownCalculation = useCallback((data: FormInputs) => {
    const { day, month, year } = data;
    const futureDate = new Date(year, month - 1, day);
    const today = new Date();

    if (futureDate < today) {
      alert("A data do evento deve ser no futuro!");
      setResult({ years: '--', months: '--', days: '--' });
      return;
    }

    let years = futureDate.getFullYear() - today.getFullYear();
    let months = futureDate.getMonth() - today.getMonth();
    let days = futureDate.getDate() - today.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
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
        onCalculate={handleCountdownCalculation}
        defaultValues={defaultEventDate}
        title="Contagem Regressiva para Evento"
        description={`Calcule o tempo até um evento. Exemplo: Ano Novo ${nextYear}.`}
      />
      <Link
        to="/" // O destino do link para a página inicial
        className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors"
      >
        Voltar para Calculadora de Idade
      </Link>
    </div>
  );
};

export default CountdownPage;
