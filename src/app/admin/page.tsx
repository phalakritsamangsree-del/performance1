export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">แดชบอร์ด</h1>
      
      {/* Cards สรุปยอด */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">ยอดผู้ใช้งานทั้งหมด</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,240</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">รีพอร์ตที่รอดำเนินการ</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">8</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">โพสต์ทั้งหมด</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">856</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-64 flex items-center justify-center text-gray-400">
        กราฟแสดงสถิติ (Mockup)
      </div>
    </div>
  );
}