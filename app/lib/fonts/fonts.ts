import localFont from "next/font/local";

import { Unbounded } from "next/font/google";

export const unbounded = Unbounded({ subsets: ["latin"], display: "swap" });

export const rust2 = localFont({ src: "./local/Rust2.woff2" });
export const rust3 = localFont({ src: "./local/Rust3.woff2" });

export const urbanjungle = localFont({ src: "./local/UrbanJungle.otf" });
