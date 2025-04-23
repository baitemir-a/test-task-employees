import type { Metadata } from "next";
import "./globals.scss";
import Providers from "./providers";
import Nav from "@/ui/Nav/Nav";

export const metadata: Metadata = {
  title: "Employee CRUD",
  description: "test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
