"use client"

import { createCourse } from "@/app/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon, TrashIcon, UserRoundPlus } from "lucide-react";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod";
import { courseSchema } from "@/lib/zodSchemas";
import Link from "next/link";

export default function NewCoursePage() {

  const [lastResult, action] = useFormState(createCourse, undefined)
  const [form, fields] = useForm({
    lastResult,
    onValidate({formData}) {
      return parseWithZod(formData, {
        schema: courseSchema
      })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput'
  })

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-semibold">Create a New Course</h1>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" asChild>
            <Link href="/teacher/courses">
              Discard
            </Link>
          </Button>
          <Button>Create</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Course Details</CardTitle>
          <CardDescription>Fill out the details for your new course.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Course Name</Label>
            <Input 
              type="text"
              key={fields.title.key}
              name={fields.title.name}
              defaultValue={fields.title.initialValue}
              id="title" 
              placeholder="Enter course name" 
            />
            <p className="text-red-500">{fields.title.errors}</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea key={fields.description.key} name={fields.description.name} defaultValue={fields.description.initialValue} id="description" placeholder="Provide a course description" className="min-h-[120px]" />
            <p className="text-red-500">{fields.title.errors}</p>
          </div>
          <div>
            <input key={fields.status.key} type="hidden" name={fields.status.name} value="NOT_STARTED" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Students</CardTitle>
          <CardDescription>Manage the students enrolled in this course.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">john@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Add student</span>
                </Button>
                <Button variant="outline" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Remove student</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">jane@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Add student</span>
                </Button>
                <Button variant="outline" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Remove student</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Bob Johnson</div>
                  <div className="text-sm text-muted-foreground">bob@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Add student</span>
                </Button>
                <Button variant="destructive" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Remove student</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="ghost" size="sm">
            <UserRoundPlus className="h-4 w-4 mr-2" />
            Enroll Student
          </Button>
        </CardFooter>
      </Card>
      </div>
    </div>
    </form>
  )
}