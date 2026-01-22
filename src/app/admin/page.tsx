"use client";
import { useState, useEffect } from "react";
import { Search, Check, Clock } from 'lucide-react';

interface Report {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  detail: string;
  status: string;
  createdAt: string;
}

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("PENDING");

  // Fetch Data
  const fetchReports = async () => {
    try {
      const res = await fetch("/api/reports");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setReports(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReports(); }, []);

  // Update Status Action
  const handleResolve = async (id: number) => {
    if (!confirm("ยืนยันการแก้ไขเสร็จสิ้น?")) return;
    await fetch(`/api/reports/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: "RESOLVED" })
    });
    fetchReports();
  };

  const filtered = reports.filter(r => activeTab === "ALL" ? true : r.status === activeTab);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">จัดการรีพอร์ต</h1>
      <p className="text-gray-500 mb-8">แดชบอร์ด / จัดการรีพอร์ต</p>

      <div className="bg-white rounded-[20px] shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
             {["PENDING", "RESOLVED"].map(tab => (
               <button key={tab} onClick={() => setActiveTab(tab)} 
                 className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab ? "bg-white shadow text-blue-600" : "text-gray-500"}`}>
                 {tab === "PENDING" ? "รอดำเนินการ" : "เสร็จสิ้น"}
               </button>
             ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 w-64" />
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="text-gray-400 text-xs uppercase font-medium border-b border-gray-50">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">ชื่อผู้แจ้ง</th>
              <th className="px-6 py-4">หัวข้อปัญหา</th>
              <th className="px-6 py-4">รายละเอียด</th>
              <th className="px-6 py-4">สถานะ</th>
              <th className="px-6 py-4">วันที่แจ้งปัญหา</th>
              <th className="px-6 py-4">ดำเนินการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? <tr><td colSpan={7} className="p-8 text-center">Loading...</td></tr> : 
             filtered.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-700">{item.id}</td>
                <td className="px-6 py-4 font-bold text-gray-800">{item.firstName} {item.lastName}</td>
                <td className="px-6 py-4 text-gray-600">{item.title}</td>
                <td className="px-6 py-4 text-gray-500 truncate max-w-[200px]">{item.detail}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded text-xs font-bold ${item.status === 'PENDING' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{new Date(item.createdAt).toLocaleDateString('th-TH')}</td>
                <td className="px-6 py-4">
                  {item.status === 'PENDING' && (
                    <button onClick={() => handleResolve(item.id)} className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 shadow-md transition-transform hover:scale-105">
                      <Check size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}