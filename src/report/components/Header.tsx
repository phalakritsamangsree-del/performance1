"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaSearch } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { SiLine } from "react-icons/si";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    {/* TOP SOCIAL BAR */}
<div className="relative flex items-center justify-between px-6 py-2 bg-white">

  {/* ซ้าย: Facebook + LINE */}
  <div className="flex items-center gap-4">
    <FaFacebookF className="text-blue-600 text-xl cursor-pointer" />
    <SiLine className="text-green-500 text-[22px] cursor-pointer" />
  </div>

  {/* กลาง: LOGO */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <Image
      src="/Brand-Logo-Main1.png"
      alt="Brand Logo"
      width={480}
      height={120}
      className="object-contain"
    />
  </div>

  {/* ขวา: เขียนโพสต์ + ไอคอนคน */}
  <div className="flex items-center gap-6">
    {/* ไอคอนเขียนโพสต์ + ข้อความ */}
    <div className="flex items-center gap-2 cursor-pointer">
      <FaRegEdit className="text-xl text-blue-600" />
      <span className="text-black text-[16px]">เขียนโพสต์</span>
    </div>

    {/* ไอคอนโปรไฟล์ */}
    <IoPersonCircleOutline className="text-3xl text-zinc-700 cursor-pointer" />
  </div>

</div>


  {/* ขวา: ถ้ามีไอคอน/ปุ่มอื่นใส่ตรงนี้ */}
  <div className="flex items-center gap-4">
    {/* ตัวอย่าง ถ้ามีปุ่มเพิ่มเติม */}
</div>



      {/* MAIN NAV BAR */}
<nav className="w-full bg-blue-700 text-white px-6 py-3 flex items-center">

  {/* LEFT EMPTY SPACE (ดันเมนูไปกลาง) */}
  <div className="flex-1"></div>

  {/* MENU (อยู่ตรงกลางจริง ๆ) */}
  <ul className="flex-1 hidden md:flex justify-center gap-8 text-white font-medium">
    <li><Link href="/">หน้าแรก</Link></li>
    <li><Link href="/">รวมรีวิว</Link></li>
    <li><Link href="/">กระทู้</Link></li>
    <li><Link href="/">บทความ</Link></li>
    <li><Link href="/">เกี่ยวกับเรา</Link></li>
    <li><Link href="/">ติดต่อเรา</Link></li>
  </ul>

  {/* RIGHT ICONS (ไปขวาสุด) */}
  <div className="flex-1 flex justify-end items-center gap-6 text-white text-xl">
    <FaSearch className="cursor-pointer" />
  </div>
</nav>


    </header>
  );
}
