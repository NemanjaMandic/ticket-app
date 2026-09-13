"use client";

import { useQueryState } from "nuqs";
import { useDebouncedCallback } from "use-debounce";
import { searchParser } from "@/features/ticket/utils";
import { Input } from "../ui/input";

type SearchInputProps = {
  placeholder: string;
};
export const SearchInput = ({ placeholder }: SearchInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    250,
  );
  return (
    <div className="max-w-[420px] w-full">
      <Input
        defaultValue={search}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};
