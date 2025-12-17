import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

export const TICKET_ICONS: Record<string, React.ReactNode> = {
  DONE: <LucideCircleCheck />,
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
};
