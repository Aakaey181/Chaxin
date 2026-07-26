import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zhuixun",
  description: "Person-centered feed skeleton for Zhuixun V0.1"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
