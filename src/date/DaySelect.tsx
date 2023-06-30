import DropdownList from "../form/DropdownList";
import Time from "../services/Time";
import ArrayUtil from "../util/ArrayUtil";

interface Props {
  monthId: number;
  onSelect: (day: number | string) => void;
}

const DaySelect = ({ monthId, onSelect }: Props) => {
  const numberOfDays = Time.getNumbersOfDaysFromMonth(monthId);
  const days = ArrayUtil.getArrayFromRange(1, numberOfDays);

  return (
    <DropdownList
      defaultValue={new Date().getDate()}
      data={days}
      onSelect={onSelect}
    />
  );
};

export default DaySelect;
