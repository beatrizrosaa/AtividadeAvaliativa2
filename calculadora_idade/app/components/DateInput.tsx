import React from "react";
import type { FormInputs } from "../types";


interface DateInputProps {
  label: string;
  placeholder: string;
  register: any; 
  error: any; 
  name: keyof FormInputs;
  maxValue: number;
}

const DateInput: React.FC<DateInputProps> = ({ label, placeholder, register, error, name, maxValue }) => (
  <div className="flex flex-col gap-2 w-24 md:w-32">
    <label 
      htmlFor={name}
      className={`text-sm font-bold uppercase tracking-[0.2em] ${error ? 'text-red-500' : 'text-gray-500'}`}
    >
      {label}
    </label>
    <input
      id={name}
      type="number"
      placeholder={placeholder}
      className={`p-4 border rounded-lg text-2xl md:text-3xl font-bold w-24 md:w-32 appearance-none focus:outline-none focus:ring-2 placeholder-gray-400 ${error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
      {...register(name, {
        required: 'Este campo é obrigatório',
        valueAsNumber: true,
        min: { value: 1, message: 'Valor inválido' },
        max: { value: maxValue, message: 'Valor inválido' },
      })}
    />
    {error && <p className="text-red-500 text-xs italic mt-1">{error.message}</p>}
  </div>
);

export default DateInput;
