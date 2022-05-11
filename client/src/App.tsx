import React, { useState } from 'react';
import Header from './components/Header';
import { DrowpdownMenuOption } from './components/Header/components/DropdownMenu/types';
import NewsList from './components/NewsList';

const MENU_LIST: DrowpdownMenuOption[] = [
  { label: 'Sem ordem', value: '' },
  { label: 'Mais antigas ', value: 'publishedAt: -1' },
  { label: 'Mais novas', value: 'publishedAt: 1' },
];

function App() {
  const [menuOption, setMenuOption] = useState<string>(MENU_LIST[0].value);

  return (
    <div className="min-h-screen text-text">
      <Header
        menuOptions={MENU_LIST}
        setMenuOption={setMenuOption}
        selectedMenuOption={menuOption}
      />
      <NewsList />
    </div>
  );
}

export default App;
