import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardCompactProps } from "./types";

export const CardCompact = ({
  title,
  description,
  content,
  footer,
  className,
}: CardCompactProps) => {
  return (
    <Card className={className ?? "w-full max-w-[420] self-center"}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
