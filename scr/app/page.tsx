'use client';


import { Search, ChevronDown, Check } from 'lucide-react';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Report {
  id: number;
  fullName: string;
  title: string;
  description: string;
  status: 'pending' | 'reviewed' | 'resolved';
  createdAt: string;
}

const mockReports: Report[] = [
  { id: 8, fullName: 'Jane Cooper', title: 'ลืมรหัสผ่านไม่ได้', description: 'Lorem ipsum dolor sit amet, consectetur...', status: 'pending', createdAt: '2000-01-01 00:00:00' },
  { id: 7, fullName: 'Floyd Miles', title: 'แอปค้างบ่อย', description: 'Lorem ipsum dolor sit amet, consectetur...', status: 'pending', createdAt: '2000-01-01 00:00:00' },
  // ... เพิ่มข้อมูลตามภาพอีก 6 รายการ
];

export default function AdminReportsPage() {
  const [reports, setReports] = useState<Report[]>(mockReports);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // ในของจริง ให้ fetch จาก /api/reports
  // useEffect(() => { fetch('/api/reports').then(...) }, []);

  const filteredReports = reports.filter(report =>
    report.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const updateStatus = (id: number, newStatus: 'reviewed' | 'resolved') => {
    setReports(reports.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-blue-800 font-bold text-xl">
              R
            </div>
            REVIEWKUB
          </h1>
        </div>
        <nav className="mt-8">
          {[
            { name: 'แดชบอร์ด', active: false },
            { name: 'เพจรีวิวทั้งหมด', active: false },
            { name: 'จัดการรีวิว', active: true },
            { name: 'จัดการเพจ', active: false },
            { name: 'จัดการผู้ใช้', active: false },
            { name: 'จัดการร้องเรียน', active: false },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-4 px-6 py-4 hover:bg-blue-700 transition ${
                item.active ? 'bg-blue-700 border-l-4 border-yellow-400' : ''
              }`}
            >
              <div className="w-6 h-6 bg-gray-400 rounded opacity-60"></div>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm border-b">
          <div className="px-8 py-6">
            <h2 className="text-2xl font-semibold">จัดการรีวิวรอตรวจ</h2>
            <p className="text-gray-600">แดชบอร์ด / จัดการรีวิวรอตรวจ</p>
          </div>
        </header>

        <main className="p-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">ตารางแสดงข้อมูลรีวิวรอตรวจทั้งหมด</h3>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <select className="px-4 py-2 border rounded-lg flex items-center gap-2">
                    <option>Short by: Newest</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">ชื่อผู้ใช้</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">หัวข้อปัญหา</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">รายละเอียด</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">สถานะ</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">วันที่ส่งปัญหา</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">ดำเนินการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedReports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">{report.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{report.fullName}</td>
                      <td className="px-6 py-4 text-sm">{report.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{report.description}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{report.createdAt}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => updateStatus(report.id, 'resolved')}
                          className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t flex justify-between items-center text-sm text-gray-600">
              <div>
                Showing data {filteredReports.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredReports.length)} of {filteredReports.length} entries
              </div>
              <div className="flex gap-2">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}
                  className="px-3 py-1 border rounded disabled:opacity-50">«</button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'border'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}
                  className="px-3 py-1 border rounded disabled:opacity-50">»</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}