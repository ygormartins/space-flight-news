import { DrowpdownMenuOption } from './components/DropdownMenu/types';

export interface HeaderProps {
  menuOptions: DrowpdownMenuOption[];
  setMenuOption?: (newValue: string) => void;
  selectedMenuOption?: string;
}
