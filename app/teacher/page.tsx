import { Home, Wrench } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <>
      <div className="flex items-center">
        <Home className="h-5.5 w-5.5 text-primary mr-2" />
        <span className="text-xl font-semibold">Home</span>
        <div className="ml-auto flex items-center gap-2">
        </div>
      </div>

      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border-dashed p-8 text-center animate-in fade-in-50">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Wrench className="h-12 w-12 text-primary" />
        </div>

        <h2 className="text-lg font-semibold mt-4">This Page Is Under Construction</h2>
      </div>
    </>
  )
}