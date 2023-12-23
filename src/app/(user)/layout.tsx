import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[url('/assets/images/bg.png')] h-screen bg-cover">
          <div className="flex w-full h-screen py-8 px-6">
            <div className="w-1/6 bg-white flex justify-center rounded-s-lg">
              <Sidebar />
            </div>
            <div className="w-5/6 bg-slate-100 rounded-e-lg flex flex-col">
              <div className=""></div>
              <div className="mx-8 w-fit"></div>
              <div className="overflow-auto">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
