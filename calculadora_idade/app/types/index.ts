export type Page = 'age' | 'countdown';

export type FormInputs = {
  day: number;
  month: number;
  year: number;
};

export type Result = {
  years: string | number;
  months: string | number;
  days: string | number;
};
