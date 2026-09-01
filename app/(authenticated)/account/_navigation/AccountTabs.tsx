"use client";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { accountPasswordPath, accountProfilePath } from "@/app/utils/paths";
import { usePathname } from "next/navigation";

export const AccountTabs = () => {
  const pathName = usePathname();
  const activePath = pathName.split("/").at(-1);
  return (
    <Tabs value={activePath}>
      <TabsList>
        <TabsTrigger value="profile" asChild>
          <Link href={accountProfilePath}>Profile</Link>
        </TabsTrigger>
        <TabsTrigger value="password" asChild>
          <Link href={accountPasswordPath}>Password</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
