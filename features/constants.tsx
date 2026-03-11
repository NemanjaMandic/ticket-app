import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

export const TICKET_ICONS: Record<string, React.ReactNode> = {
  DONE: <LucideCircleCheck />,
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
};

export const TICKET_STATUS_LABELS: Record<string, string> = {
  DONE: "Done",
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
};
