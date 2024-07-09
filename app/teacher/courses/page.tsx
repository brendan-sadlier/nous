import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { LibrarySquare, PlusCircle } from "lucide-react";
import { unstable_noStore } from "next/cache";
import Link from "next/link";

async function getCourses() {
  const data = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc"
    },
  });

  return data;
}

export default async function TeacherCoursesPage() {

  unstable_noStore();
  const data = await getCourses();

  return (
    <main className="flex flex-1 flex-col gap-4 p-0 lg:gap-6 lg:pr-4 lg:pl-4 min-h-[80vh]">
          <div className="flex items-center">
            <LibrarySquare className="h-8 w-8 text-primary mr-5" />
            <h1 className="text-lg font-semibold md:text-2xl">Courses</h1>
          </div>

          { data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((course) => (
                <div key={course.id} className="flex flex-col gap-2 rounded-lg border shadow-sm p-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/teacher/courses/${course.id}`}>
                        Edit
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/teacher/courses/${course.id}/students`}>
                        Students
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </main>
  )
}