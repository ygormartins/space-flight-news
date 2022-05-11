export interface DrowpdownMenuOption {
  label: string;
  value: string;
}

export interface DropdownMenuProps {
  values: DrowpdownMenuOption[];
  selectedValue?: string;
  onValueChange?: (newValue: string) => void;
}
