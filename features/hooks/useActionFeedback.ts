import { useEffect, useRef } from "react";
import { ActionState } from "../ticket/components/TicketForm/utils";

type OnArgs = {
  actionState: ActionState;
};
type ActionOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};
export const useActionFeedback = (
  actionState: ActionState,
  { onSuccess, onError }: ActionOptions = {}
) => {
  const prevTimestamp = useRef(actionState.timestamp);

  // eslint-disable-next-line react-hooks/refs
  const isUpdate = prevTimestamp.current !== actionState.timestamp;

  useEffect(() => {
    if (!isUpdate) return;
    if (actionState.status === "SUCCESS") {
      onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      onError?.({ actionState });
    }
    console.log("Action State:", actionState);

    prevTimestamp.current = actionState.timestamp;
  }, [actionState, isUpdate, onError, onSuccess]);
};
