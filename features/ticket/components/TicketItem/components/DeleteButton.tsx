import { Button } from "@/components/ui/button";
import { LucideTrash } from "lucide-react";

export const DeleteButton = () => {
  return (
    <Button variant="outline" size="icon">
      <LucideTrash className="w-4 h-4" />
    </Button>
  );
};
