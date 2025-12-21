"use client";
import { Placeholder } from "@/components/placeholder";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
      <Placeholder label={error.message || "Something went wrong"} />
    </div>
  );
}
