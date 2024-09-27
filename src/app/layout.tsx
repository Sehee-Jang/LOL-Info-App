import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "League of Legends Info App",
  description:
    "Get the latest information on champions, items, and more from Riot Games API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className='bg-gray-800 text-white p-4'>
          <ul className='flex space-x-6 justify-center'>
            <li>
              <Link href='/' className='hover:text-gray-400'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/champions' className='hover:text-gray-400'>
                Champions
              </Link>
            </li>
            <li>
              <Link href='/items' className='hover:text-gray-400'>
                Items
              </Link>
            </li>
            <li>
              <Link href='/rotation' className='hover:text-gray-400'>
                Rotation
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
