import { LucideLoaderCircle } from "lucide-react";

export const Spinner = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
      <LucideLoaderCircle className="w-16 h-16 animate-spin" />
    </div>
  );
};
