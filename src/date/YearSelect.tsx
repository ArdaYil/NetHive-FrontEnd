import DropdownList from "../form/DropdownList";
import { get, set } from "../services/cache";
import ArrayUtil from "../util/ArrayUtil";

interface Props {
  onSelect: (id: number | string) => void;
}

interface YearData {
  years: number[];
  currentYear: number;
}

const YearSelect = ({ onSelect }: Props) => {
  const calculateYears = (): YearData => {
    const ageRange = 100;
    const currentYear = new Date().getFullYear();
    const start = currentYear - ageRange;
    return {
      years: ArrayUtil.getArrayFromRange(currentYear, start),
      currentYear,
    };
  };

  let currentYear;
  let years;

  const cachedYears = get<YearData>("yearData");

  if (!cachedYears) {
    const calculatedYears = calculateYears();
    currentYear = calculatedYears.currentYear;
    years = calculatedYears.years;
    set("yearData", { currentYear, years });
  } else {
    currentYear = cachedYears.currentYear;
    years = cachedYears.years;
  }

  return (
    <DropdownList defaultValue={currentYear} data={years} onSelect={onSelect} />
  );
};

export default YearSelect;
