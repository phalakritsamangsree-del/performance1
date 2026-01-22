import Header from "./components/Header";
import AccountHeader from "./components/AccountHeader";
import Sidebar from "./components/Sidebar";
import ReportProblem from "./components/ReportProblem";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Header />

      {/* ดัน AccountHeader ลงมาไม่ให้โดนทับ */}
      <div className="pt-[80px]">
        <AccountHeader />
      </div>

      {/* MAIN CONTENT กลางจอ */}
      <main className="flex justify-center mt-10">

        {/* กล่องรวม content (center wrapper) */}
        <div className="flex gap-0 max-w-6xl w-full">

          <Sidebar />

          <div className="flex-1">
            <ReportProblem />
          </div>

        </div>
      </main>
            <Footer />

    </div>
  );
}
