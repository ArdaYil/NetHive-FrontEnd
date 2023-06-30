import { useEffect, useRef, useState } from "react";

interface SelectData {
  name: string;
  id: number | string;
}

type Id = number | string;

interface Props {
  data: SelectData[] | Array<any>;
  defaultValue: SelectData | Id;
  onSelect: (id: Id) => void;
}

const DropdownList = ({ data, defaultValue, onSelect }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const className = isExpanded ? "expanded" : "";
  const dropdown = useRef<HTMLDivElement>(null);

  const handleExpanded = () => setIsExpanded(true);

  document.addEventListener("click", (e) => {
    const rect = dropdown.current?.getClientRects();

    if (!rect || !rect[0]) return;

    const width = rect[0].width;
    const height = rect[0].height;
    const left = rect[0].x;
    const top = rect[0].y;

    if (!width || !height || !left || !top) return;

    const right = left + width;
    const bottom = top + height;

    const xClick = e.clientX;
    const yClick = e.clientY;

    const xWidthin = xClick > left && xClick < right;
    const yWidthin = yClick > top && yClick < bottom;

    if (xWidthin && yWidthin) return;

    setIsExpanded(false);
  });

  const handleChange = (value: any) => {
    setValue(value);
    onSelect(typeof value === "object" ? value.id : value);
  };

  return (
    <div className="dropdown-list">
      <div
        ref={dropdown}
        onClick={handleExpanded}
        className="dropdown-list__default-value-container"
      >
        <p className="dropdown-list__default-value-container__value">
          {typeof value === "object" ? value.name : value}
        </p>
        <img
          className="dropdown-list__default-value-container__icon"
          src="/src/assets/down-arrow.png"
        />
      </div>
      <div className={`dropdown-list__dropdown ${className}`}>
        {data.map((datum) => (
          <p
            onClick={() => handleChange(datum)}
            className="dropdown-list__dropdown__item"
            key={typeof datum === "object" ? datum.id : datum}
          >
            {typeof datum === "object" ? datum.name : datum}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DropdownList;
