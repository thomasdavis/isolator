import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "unsandbox - Remote Code Execution API",
  description: "Run untrusted code in isolated containers via API — as one-shot executions, interactive sessions, or deployable services — with snapshots and zero-trust networking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
