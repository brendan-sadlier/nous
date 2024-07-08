import { Button } from "@/components/ui/button";
import { LibrarySquare, PlusCircle } from "lucide-react";

export default function TeacherCoursesPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">Your Courses</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5 mr-2" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              New Course
            </span>
          </Button>
        </div>
      </div>

      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border-dashed p-8 text-center animate-in fade-in-50">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <LibrarySquare className="h-12 w-12 text-primary" />
        </div>

        <h2 className="text-lg font-semibold mt-4">No courses found</h2>
        <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">Click &quot;New Course&quot; to get started</p>
      </div>
    </>
  )
}