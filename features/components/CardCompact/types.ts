import { ReactNode } from "react";

export type CardCompactProps = {
  title: string;
  description: string;
  className?: string;
  content: ReactNode;
  footer?: ReactNode;
};
