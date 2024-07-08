import { Home, SquareLibrary, UsersRound } from "lucide-react";

const teacherSidebarOptions = [
  {
    name: "Home",
    path: "/teacher",
    icon: Home,
  },
  {
    name: "Courses",
    path: "/teacher/courses",
    icon: SquareLibrary,
  },
  {
    name: "Students",
    path: "/teacher/students",
    icon: UsersRound,
  }
];

export default teacherSidebarOptions;