import Link from "next/link";
import { ticketsPath } from "@/app/utils/paths";
import { Heading } from "@/components/heading";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Home"
        description="Your home place to start your journey."
      />

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath} className="text-blue-500 underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
}
