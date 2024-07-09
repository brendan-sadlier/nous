"use client"

import { School, Settings } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import teacherSidebarOptions from "@/constants/TeacherSidebarOptions";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {

  const path = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <div
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <School className="h-4 w-4 transition-all" />
            <span className="sr-only">Nous</span>
          </div>

          { teacherSidebarOptions.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.path}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:scale-110",
                      path == item.path
                      ? "bg-accent text-primary transition-colors hover:text-foreground md:h-8 md:w-8"
                      : "text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground md:h-8 md:w-8 transition-all hover:scale-110"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
  )
}