import Sidebar from "@/components/teacher/Sidebar";
import Header from "@/components/teacher/Header";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Claim } from "@/lib/interface";

export default async function TeacherDashboardLayout({ children}: { children: React.ReactNode }) {
  
  const { getUser, getClaim } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/60">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    </div>

  );
}