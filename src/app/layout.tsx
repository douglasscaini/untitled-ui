import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Untitled UI",
    description: "Untitled UI Rocket",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="antialiased">
            <body className={inter.className}>
                <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
                    <Sidebar />
                    <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8 max-w-[100vw]">{children}</main>
                </div>
            </body>
        </html>
    );
}
