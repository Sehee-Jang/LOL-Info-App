"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className='bg-white shadow'>
      <nav className='container mx-auto px-4 py-4 flex justify-between'>
        <h1 className='text-xl font-bold'>
          <Link href='/champions'>LOL Info App</Link>
        </h1>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/champions' className='text-blue-500 hover:underline'>
              챔피언 목록
            </Link>
          </li>
          <li>
            <Link href='/items' className='text-blue-500 hover:underline'>
              아이템 목록
            </Link>
          </li>
          <li>
            <Link href='/rotation' className='text-blue-500 hover:underline'>
              로테이션 정보
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
