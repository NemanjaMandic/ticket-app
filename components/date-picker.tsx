"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type DatePickerProps = {
  id?: string;
  name?: string;
  defaultValue?: string;
};

export const DatePicker = ({ id, name, defaultValue }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date(),
  );

  const [open, setOpen] = useState(false);
  const formatedStringDate = date ? format(date, "yyy-MM-dd") : "";

  const handleSelectDate = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild id={id} className="w-full">
        <Button
          variant="outline"
          data-empty={!date}
          className="justify-start text-left font-normal"
        >
          {formatedStringDate}
          <input type="hidden" name={name} value={formatedStringDate} />
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelectDate}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  );
};
