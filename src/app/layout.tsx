import BaseLayout from "@/layouts/base.layout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
