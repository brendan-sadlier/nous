"use server"

import getUserFromDB from "@/lib/dbCalls";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { courseSchema } from "@/lib/zodSchemas";
import prisma from "@/lib/db";

export async function createCourse(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userFromDB = await getUserFromDB(user?.id as string); 
  const userRole = userFromDB.role;

  if (!user || userRole !== "TEACHER") {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: courseSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.course.create({
    data: {
      title: submission.value.title,
      description: submission.value.description,
      status: submission.value.status,
      teacher: {
        connect: {
          id: user.id,
        },
      },
    }
  })

  redirect("/teacher/courses");
}