import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pages = [
  { name: "Page One", path: "fristpage" },
  { name: "Page Two", path: "page-2" },
  { name: "Page Three", path: "page-3" },
  
  
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex gap-6 font-bold text-2xl m-10 flex-wrap">
          {pages.map((page) => (
            <Link key={page.path} href={page.path}>
              {page.name}
            </Link>
          ))}
        </div>        
        {children}
      </body>
    </html>
  );
}
