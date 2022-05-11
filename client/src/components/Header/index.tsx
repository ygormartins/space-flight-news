import React from 'react';
import DropdownMenu from './components/DropdownMenu';
import SearchInput from './components/SearchInput';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({
  menuOptions,
  setMenuOption = () => null,
  selectedMenuOption = menuOptions[0].value,
}) => {
  return (
    <div className="bg-primary fixed right-0 left-0 top-0 flex flex-row items-center justify-end px-24 py-2 space-x-8">
      <SearchInput />
      <DropdownMenu
        values={menuOptions}
        onValueChange={setMenuOption}
        selectedValue={selectedMenuOption}
      />
    </div>
  );
};

export default Header;
