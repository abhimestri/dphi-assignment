import React from "react";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove-chip.svg";

interface FilterChipProps {
  title: string;
  onRemove: (id?: any) => void;
}
const FilterChip = ({ title, onRemove }: FilterChipProps) => {
  return (
    <div className="w-fit bg-[#7A8F9A] flex justify-between items-center gap-x-6 rounded-[50px] px-6 py-2 text-white text-[14px] font-medium ">
      <p className="capitalize">{title}</p>
      <RemoveIcon className="cursor-pointer" onClick={onRemove} />
    </div>
  );
};

export default FilterChip;
