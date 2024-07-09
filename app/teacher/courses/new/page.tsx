import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Activity, ArrowUpRight, ChevronLeft, CreditCard, DollarSign, Mic, Paperclip, PlusCircle, PlusIcon, TrashIcon, Upload, UserRoundMinus, UserRoundPlus, UserRoundSearch, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewCoursePage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-semibold">Create a New Course</h1>
        <div className="flex gap-2 justify-end">
          <Button variant="outline">Discard</Button>
          <Button>Save</Button>
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
            <Label htmlFor="name">Course Name</Label>
            <Input id="name" placeholder="Enter course name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Provide a course description" className="min-h-[120px]" />
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
  )
}