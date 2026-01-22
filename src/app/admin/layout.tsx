import Link from "next/link";
import { 
  HomeIcon, DocumentTextIcon, TagIcon, 
  ExclamationTriangleIcon, Cog6ToothIcon, 
  ArrowRightOnRectangleIcon, UsersIcon,
  Squares2X2Icon
} from "lucide-react"; 

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: "แดชบอร์ด", href: "#", icon: HomeIcon, active: false },
    { name: "จัดการรีพอร์ต", href: "/admin/reports", icon: ExclamationTriangleIcon, active: true },
    // ... เมนูอื่นๆ ของคุณ
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-800">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
         {/* ... (ใส่ส่วน Header ของ Sidebar และ Loop เมนูตรงนี้) ... */}
         {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 px-3 py-2.5">
               <item.icon className="w-5 h-5" /> {item.name}
            </Link>
         ))}
      </aside>

      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}