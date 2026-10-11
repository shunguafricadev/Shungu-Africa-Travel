"use client";

import { formatDateForInput } from "./dateUtils";

type DateSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function DateSelector({
  value,
  onChange,
}: DateSelectorProps) {
  const today = formatDateForInput(new Date());

  return (
    <div className="mt-6 min-w-0">
      <label
        htmlFor="activity-date"
        className="mb-2 block text-sm font-medium text-foreground"
      >
        Preferred Travel Date
      </label>

      <input
        id="activity-date"
        type="date"
        min={today}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="block w-full min-w-0 box-border appearance-none border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
      />

      <p className="mt-2 text-xs leading-5 text-neutral-500">
        You can change this date if needed.
      </p>
    </div>
  );
}
