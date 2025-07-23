import { Topbar } from "@/components/shared/Topbar";
import { Sidebar } from "@/components/shared/Sidebar";
import { ReactNode } from "react";
import { Footer } from "@/components/shared/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Topbar nằm ngang */}
      <Topbar />

      <div className="flex flex-1">
        {/* Sidebar nằm bên trái */}
        <div className="w-56 md:block hidden">
          <Sidebar />
        </div>

        {/* Nội dung chính + Footer */}
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
