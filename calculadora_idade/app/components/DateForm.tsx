import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { FormInputs } from "../types";
import DateInput from "./DateInput";

interface DateFormProps {
  onCalculate: (data: FormInputs) => void;
  defaultValues?: FormInputs;
  title: string;
  description: string;
}

const DateForm: React.FC<DateFormProps> = ({ onCalculate, defaultValues, title, description }) => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormInputs>({ defaultValues });

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    const { day, month, year } = data;
    const date = new Date(year, month - 1, day);

    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      setError('day', { type: 'manual', message: 'Data inválida' });
      setError('month', { type: 'manual', message: '' });
      setError('year', { type: 'manual', message: '' });
      return;
    }

    onCalculate(data);
  };

  return (
    <div className="bg-white p-8 rounded-3xl rounded-br-[100px] md:rounded-br-[200px] shadow-lg w-full max-w-3xl">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-500 mb-6">{description}</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-wrap gap-4 gap-y-4 md:gap-10 w-full max-w-lg">
          <DateInput label="Dia" placeholder="DD" name="day" register={register} error={errors.day} maxValue={31} />
          <DateInput label="Mês" placeholder="MM" name="month" register={register} error={errors.month} maxValue={12} />
          <DateInput label="Ano" placeholder="AAAA" name="year" register={register} error={errors.year} maxValue={new Date().getFullYear() + 100} />
        </div>

        <div className="flex items-center my-8 md:my-0">
          <hr className="w-full border-t border-gray-300" />
          <button
            type="submit"
            aria-label="Calcular"
            className="bg-purple-600 hover:bg-black rounded-full p-5 flex-shrink-0 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
          <hr className="w-full border-t border-gray-300 md:hidden" />
        </div>
      </form>
    </div>
  );
};

export default DateForm;
