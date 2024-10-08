"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <Link href="/champions">LOL Info App</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/champions" className="text-white transition-colors duration-300">
              챔피언 목록
            </Link>
          </li>
          <li>
            <Link href="/items" className="text-white transition-colors duration-300">
              아이템 목록
            </Link>
          </li>
          <li>
            <Link href="/rotation" className="text-white transition-colors duration-300">
              로테이션 정보
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
