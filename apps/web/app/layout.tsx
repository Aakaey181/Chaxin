import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traxyn",
  description: "Person-centered feed skeleton for Traxyn V0.1"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
