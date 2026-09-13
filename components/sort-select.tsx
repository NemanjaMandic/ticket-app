"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useQueryStates } from "nuqs";
import { sortOptions, sortParser } from "@/features/ticket/utils";

type SortSelectProps = {
  options: { sortKey: string; sortValue: string; label: string }[];
};

export const SortSelect = ({ options }: SortSelectProps) => {
  const [sort, setSort] = useQueryStates(sortParser, sortOptions);

  const handleSort = (compositeKey: string) => {
    const [sortKey, sortValue] = compositeKey.split("_");
    setSort({ sortKey, sortValue });
  };

  return (
    <Select
      defaultValue={sort.sortKey + "_" + sort.sortValue}
      onValueChange={handleSort}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((item) => (
            <SelectItem
              key={item.sortKey + item.sortValue}
              value={item.sortKey + "_" + item.sortValue}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
