import { CircleUser, GraduationCap, Home, LineChart, Menu, Package, Package2, School, ShoppingCart, Users2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ModeToggle } from "../ModeToggle";
import teacherSidebarOptions from "@/constants/TeacherSidebarOptions";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import BreadcrumbBar from "../BreadcrumbBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="sm:hidden">
            <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <School className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Nous</span>
                </Link>

                { teacherSidebarOptions.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <BreadcrumbBar />
          <div className="relative ml-auto flex-1 md:grow-0">
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <LogoutLink>
                    Log Out
                  </LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
  )
}