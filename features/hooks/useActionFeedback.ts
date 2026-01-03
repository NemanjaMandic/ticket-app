import { useEffect } from "react";
import { ActionState } from "../ticket/components/TicketForm/utils";

export const useActionFeedback = (actionState: ActionState) => {
  useEffect(() => {
    if (actionState.status === "SUCCESS") {
      alert("Ticket saved successfully!");
    }
    console.log("Action State:", actionState);
  }, [actionState]);
};
