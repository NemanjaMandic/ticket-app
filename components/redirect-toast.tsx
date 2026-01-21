"use client";
import { deleteCookieByKey, getCookieByKey } from "@/app/actions/cookies";
import { useEffect } from "react";
import { toast } from "sonner";

export const RedirectToast = () => {
  useEffect(() => {
    const fetchToast = async () => {
      const message = await getCookieByKey("toast");
      if (message) {
        toast.success(message);
        await deleteCookieByKey("toast");
      }
    };
    fetchToast();
  }, []);
  return null;
};
