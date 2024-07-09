import { Construction, Home, Wrench } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-0 lg:gap-6 lg:pr-4 lg:pl-4 min-h-[80vh]">
      <div className="flex items-center">
        <Home className="h-8 w-8 text-primary mr-5" />
        <h1 className="text-lg font-semibold md:text-2xl">Home</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Construction className="h-12 w-12 text-primary" />
        </div>
          <h3 className="text-2xl font-bold tracking-tight">
            This page is under construction
          </h3>
          <p className="text-sm text-muted-foreground">
            We are working on this page, please check back later
          </p>
        </div>
      </div>
    </main>
  )
}