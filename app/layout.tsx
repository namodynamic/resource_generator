import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resource Generator",
  description: "Generate a resource from a template",
  icons: {
    icon: "/icon1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col bg-[#161B48]">
          {children}
        </main>
      </body>
    </html>
  );
}
