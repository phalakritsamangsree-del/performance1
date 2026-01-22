"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
        <div>
          {/* Logo */}
          <Image
            src="/Brand-Logo-White.png"
            alt="Brand Logo"
            width={180}
            height={50}
            className="mb-6"
          />

         {/* Menu */}
<div className="flex gap-4 text-sm whitespace-nowrap">
  <a href="#" className="hover:underline">หน้าแรก</a>
  <a href="#" className="hover:underline">รวมรีวิว</a>
  <a href="#" className="hover:underline">กระทู้</a>
  <a href="#" className="hover:underline">บทความ</a>
  <a href="#" className="hover:underline">เกี่ยวกับเรา</a>
  <a href="#" className="hover:underline">ติดต่อเรา</a>
  <a href="#" className="hover:underline">ข้อกำหนดและเงื่อนไข</a>
  <a href="#" className="hover:underline">เงื่อนไขความเป็นส่วนตัว</a>
</div>


          {/* Copyright */}
          <p className="text-sm text-gray-300 mt-6">
            Copyright © 2024 Reviewkub Co., Ltd | All Rights Reserved.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-between">

          <div>
            <p className="text-right text-sm mb-3">
              รับข้อมูลอัปเดตและข่าวสารล่าสุด
            </p>

            {/* Email Box (แบบในรูป) */}
            <div className="flex justify-end">
              <div className="bg-white flex items-center rounded-md overflow-hidden shadow-sm">
                <input
                  type="email"
                  placeholder="อีเมล..."
                  className="px-4 py-2 outline-none text-black w-52"
                />
                <button className="bg-yellow-400 text-black px-4 py-2 font-bold">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end gap-4 mt-8 text-xl">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
