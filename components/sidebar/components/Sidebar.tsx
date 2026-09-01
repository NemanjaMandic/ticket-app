"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { navItems } from "../constants";
import { SidebarItem } from "./SidebarItem";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { usePathname } from "next/navigation";
import { getActivePath } from "@/lib/utils/getActivePath";
import { signinPath, signupPath } from "@/app/utils/paths";

export const Sidebar = () => {
  const { user, isFetched } = useAuth();
  const pathName = usePathname();

  const { activeIndex } = getActivePath(
    pathName,
    navItems.map((item) => item.href),
    [signinPath, signupPath],
  );
  const [sidebarState, setSidebarState] = useState({
    isTransition: false,
    isOpen: false,
  });

  const handleToggle = (open: boolean) => {
    setSidebarState({
      ...sidebarState,
      isTransition: true,
      isOpen: open,
    });
  };

  if (!user || !isFetched) {
    return null;
  }

  return (
    <nav
      className={cn(
        "h-screen border-r pt-24",
        sidebarState.isTransition && "duration-200",
        sidebarState.isOpen ? "md:w-60 w-[78px]" : "w-[78px]",
      )}
      onMouseEnter={() => handleToggle(true)}
      onMouseLeave={() => handleToggle(false)}
    >
      <div className="px-3 py-2">
        <nav className="space-y-2">
          {navItems.map((navItem, index) => (
            <SidebarItem
              key={navItem.title}
              isOpen={sidebarState.isOpen}
              navItem={navItem}
              isActive={activeIndex === index}
            />
          ))}
        </nav>
      </div>
    </nav>
  );
};
