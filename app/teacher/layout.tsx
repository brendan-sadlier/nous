import Sidebar from "@/components/teacher/Sidebar";
import Header from "@/components/teacher/Header";
import { Button } from "@/components/ui/button";

export default function TeacherDashboardLayout({ children}: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>

  );
}