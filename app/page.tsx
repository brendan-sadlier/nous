import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      <nav className="bg-transparent h-[15vh] flex items-center max-w-7xl mx-auto">
        <div className="container flex items-center justify-between w-full">

  <div className="ml-auto flex items-center gap-x-5">
    <ModeToggle />

      <div className="flex items-center gap-x-5">
        <LoginLink>
          <Button>
            Sign In
          </Button>
        </LoginLink>
        <RegisterLink>
          <Button variant="secondary">
            Sign Up
          </Button>
        </RegisterLink>
    </div>   
  </div>
</div>
</nav>
    
    <section className="flex items-center justify-center">
      <div className="relative items-center justify-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-1 ">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Nous
              </span>
            </span>
            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl text-secondary-foreground">A Virtual Learning Environment for All</h1>
          </div>
          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
              <Button size="lg">Get Started</Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
