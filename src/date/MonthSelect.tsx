import DropdownList from "../form/DropdownList";

interface Props {
  onSelect: (id: number | string) => void;
}

const MonthSelect = ({ onSelect }: Props) => {
  const months = [
    { name: "January", id: 0 },
    { name: "February", id: 1 },
    { name: "Mars", id: 2 },
    { name: "April", id: 3 },
    { name: "May", id: 4 },
    { name: "June", id: 5 },
    { name: "July", id: 6 },
    { name: "August", id: 7 },
    { name: "September", id: 8 },
    { name: "October", id: 9 },
    { name: "November", id: 10 },
    { name: "December", id: 11 },
  ];

  const currentMonth = months[new Date().getMonth()];

  return (
    <DropdownList
      onSelect={onSelect}
      defaultValue={currentMonth}
      data={months}
    />
  );
};

export default MonthSelect;
