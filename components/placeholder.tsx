import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

export const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button,
}: {
  label: string;
  icon?: React.ReactNode;
  button?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-1 self-center items-center justify-center flex-col gap-y-2">
      {cloneElement(icon as React.ReactElement, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      <div className="h-8">{button}</div>
    </div>
  );
};
