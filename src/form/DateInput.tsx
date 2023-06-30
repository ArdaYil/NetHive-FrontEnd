import { useState } from "react";
import DaySelect from "../date/DaySelect";
import MonthSelect from "../date/MonthSelect";
import YearSelect from "../date/YearSelect";
import Time from "../services/Time";
import LabelInput from "./LabelInput";

interface Props {
  children: string;
  id: string;
  block?: boolean;
  error?: string;
  value: Date;
  onChange: (date: Date) => void;
}

interface DateInterface {
  [key: string]: number;
  month: number;
  day: number;
  year: number;
}

const DateInput = ({ children, error, onChange }: Props) => {
  const currentDate = new Date();
  const [date, setDate] = useState<DateInterface>({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    day: currentDate.getDate(),
  } as DateInterface);

  const toDate = () => new Date(date.year, date.month, date.day);

  const handleChange = (key: string, value: number | string) => {
    if (typeof value === "string") return;

    setDate({ ...date, [key]: value });
    onChange(toDate());
  };

  return (
    <div className="date-input">
      <h2 className="date-input__heading">{children}</h2>
      <div className="date-input__content">
        <MonthSelect onSelect={(month) => handleChange("month", month)} />
        <DaySelect
          monthId={date.month}
          onSelect={(day) => handleChange("day", day)}
        />
        <YearSelect onSelect={(year) => handleChange("year", year)} />
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default DateInput;
