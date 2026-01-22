import Link from "next/link";
import { 
  Home, 
  FileText, 
  Tags, 
  AlertTriangle, 
  Settings, 
  LogOut, 
  Users, 
  Grid 
} from "lucide-react"; // แก้มาใช้ lucide-react ที่คุณลงไว้แล้ว

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // กำหนดเมนูที่นี่
  const menuItems = [
    { name: "แดชบอร์ด", href: "/admin", icon: Home, active: false },
    { name: "โพสต์รีวิวทั้งหมด", href: "#", icon: FileText, active: false },
    { name: "จัดการประเภท", href: "#", icon: Grid, active: false },
    { name: "จัดการแท็ก", href: "#", icon: Tags, active: false },
    { name: "จัดการรีพอร์ต", href: "/admin/reports", icon: AlertTriangle, active: true },
    { name: "จัดการผู้ใช้", href: "#", icon: Users, active: false },
    { name: "ตั้งค่าเว็บไซต์", href: "#", icon: Settings, active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F7FE] font-sans text-gray-800">
      {/* --- SIDEBAR --- */}
      <aside className="w-[280px] bg-white flex flex-col fixed h-full z-20 border-r border-gray-100 shadow-sm">
        {/* Logo */}
        <div className="h-20 flex items-center px-8 text-2xl font-bold text-blue-900 tracking-wide gap-2 border-b border-gray-50">
           <div className="w-8 h-8 bg-blue-600 rounded-lg text-white flex items-center justify-center text-sm shadow-blue-200 shadow-lg">★</div>
           REVIEWKUB
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 space-y-2 py-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                item.active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-50">
          <button className="flex items-center justify-center gap-2 w-full bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl text-sm font-bold transition-colors">
            <LogOut size={20} />
            ออกจากระบบ
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 ml-[280px] flex flex-col relative">
        {/* Top Header */}
        <header className="h-20 bg-white/50 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between border-b border-gray-100/50">
            <div className="text-gray-500 text-sm">
                Pages / <span className="font-bold text-gray-800">Admin Dashboard</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-600 shadow-sm">
                <Users size={20} />
            </div>
        </header>

        {/* Page Content (เนื้อหาของแต่ละหน้าจะมาโผล่ตรงนี้) */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}