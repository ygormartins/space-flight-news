import React, { ChangeEvent } from 'react';
import { DropdownMenuProps, DrowpdownMenuOption } from './types';

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  values,
  selectedValue = values[0].value,
  onValueChange = () => null,
}) => {
  const handleOnValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value);
  };

  const renderMenuOption = (item: DrowpdownMenuOption) => (
    <option value={item.value}>{item.label}</option>
  );

  return (
    <div className="h-10 w-40 bg-white rounded overflow-hidden ">
      <select
        value={selectedValue}
        onChange={handleOnValueChange}
        className="h-full w-full bg-transparent px-3 outline-none border-transparent border-r-[0.75rem]"
      >
        {values.map((item: DrowpdownMenuOption) => renderMenuOption(item))}
      </select>
    </div>
  );
};

export default DropdownMenu;
