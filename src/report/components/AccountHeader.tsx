export default function AccountHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-10 px-6 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute left-10 top-10 w-40 h-2 bg-blue-300 rounded-full rotate-12"></div>
        <div className="absolute right-20 top-16 w-56 h-3 bg-blue-200 rounded-full rotate-45"></div>
        <div className="absolute left-1/2 top-1/3 w-24 h-24 bg-blue-400 rounded-full blur-lg opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">จัดการบัญชีของฉัน</h1>
        <p className="text-lg">ยินดีต้อนรับ, คุณ <span className="font-semibold text-yellow-300">Jacqueline Wright</span></p>
      </div>
    </div>
  );
}