import { Button } from "@/components/ui/button";
import { LibrarySquare, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function TeacherCoursesPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-0 lg:gap-6 lg:pr-4 lg:pl-4 min-h-[80vh]">
          <div className="flex items-center">
            <LibrarySquare className="h-8 w-8 text-primary mr-5" />
            <h1 className="text-lg font-semibold md:text-2xl">Courses</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no courses
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start teaching as soon as you add a course.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/teacher/courses/new">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Course
                </Link>
              </Button>
            </div>
          </div>
        </main>
  )
}