import { ActionState } from "@/features/ticket/components/TicketForm/utils";

type FieldErrorProps = {
  actionState: ActionState;
  name: string;
};
export const FieldError = ({ actionState, name }: FieldErrorProps) => {
  const errorMessages = actionState?.fieldErrors?.[name]?.[0];

  if (!errorMessages) return null;
  return <span className="text-sm text-red-500">{errorMessages}</span>;
};
