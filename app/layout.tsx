import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MusicShare",
    description: "A way to share what you listen with your friends",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Toaster position="top-center" richColors />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
