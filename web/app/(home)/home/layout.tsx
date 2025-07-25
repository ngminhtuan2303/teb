import { Topbar } from "@/components/shared/Topbar";
import { Sidebar } from "@/components/shared/Sidebar";
import { ReactNode } from "react";
import { Footer } from "@/components/shared/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Topbar cố định trên cùng */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Topbar />
      </div>

      {/* Sidebar cố định bên trái dưới Topbar */}
      <div className="fixed top-[10vh] left-0 z-40 hidden md:block">
        <Sidebar />
      </div>

      {/* Nội dung chính scroll được */}
      <main className="ml-0 md:ml-84 mt-16 bg-[#1a1a1a] flex flex-col h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
