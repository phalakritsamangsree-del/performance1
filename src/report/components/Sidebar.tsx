"use client";

import { FaImage, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { MdArticle, MdSettings, MdReportProblem } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="w-80 ml-10"> 

      <div className="bg-white shadow-md rounded-xl p-6 border">

        <ul className="flex flex-col gap-4 text-gray-700 font-medium">

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition">
            <FaImage /> ภาพรวม
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition">
            <FaFileAlt /> โพสต์ของฉัน
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition">
            <MdArticle /> บทความของฉัน
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition">
            <MdSettings /> ตั้งค่าบัญชี
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition">
            <MdReportProblem /> รายงานปัญหา
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer text-red-600 hover:bg-red-50 transition mt-4">
            <FaSignOutAlt /> ออกจากระบบ
          </li>

        </ul>
      </div>
    </aside>
  );
}
