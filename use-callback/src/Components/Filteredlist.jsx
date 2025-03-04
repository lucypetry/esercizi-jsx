import React, { useMemo } from "react";

const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h2>Lista filtrata (età 18):</h2>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} anni
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
