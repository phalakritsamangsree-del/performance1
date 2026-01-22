"use client";

import { useState } from "react";

export default function ReportProblem() {
  const [form, setForm] = useState({
    firstName: "สมชาย",
    lastName: "ใจดี",
    title: "ปุ่มกดไม่ทำงาน",
    detail: "กดปุ่ม submit แล้วไม่มีการตอบสนอง",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true); // เปิด popup
  };

  return (
    <div className="ml-2 w-full px-10 py-10">

      <h1 className="text-center text-2xl font-bold mb-10">
        รายงานปัญหาการใช้งาน
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8"
      >
        <h2 className="font-bold text-lg">รายละเอียด</h2>
        <p className="text-gray-500 text-sm mb-6">
          เขียนรายละเอียดปัญหาการใช้งานที่ท่านพบเจอ เพื่อนำไปปรับปรุง
        </p>

        {/* ชื่อ + นามสกุล */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            value={form.firstName}
            onChange={(e) =>
              setForm({ ...form, firstName: e.target.value })
            }
            placeholder="ชื่อ"
            className="border rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={form.lastName}
            onChange={(e) =>
              setForm({ ...form, lastName: e.target.value })
            }
            placeholder="นามสกุล"
            className="border rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* หัวข้อ */}
        <input
          type="text"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          placeholder="หัวข้อปัญหา"
          className="border rounded-md p-3 w-full outline-none mb-4 focus:ring-2 focus:ring-blue-500"
        />

        {/* รายละเอียด */}
        <textarea
          rows={5}
          value={form.detail}
          onChange={(e) =>
            setForm({ ...form, detail: e.target.value })
          }
          placeholder="เขียนรายละเอียดปัญหา..."
          className="border rounded-md p-3 w-full outline-none mb-6 focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* ปุ่ม */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition"
        >
          รายงานปัญหา
        </button>
      </form>

      {/* 🟢 SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-bold mb-3">ส่งข้อมูลสำเร็จ!</h2>
            <p className="text-gray-600 mb-4">ระบบได้รับรายงานของคุณแล้ว</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              ปิด
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
