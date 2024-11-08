import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
// import localFont from "next/font/local";

// const robotoRegular = localFont({
//   src: "./fonts/RobotoRegular.ttf",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const robotoLight = localFont({
//   src: "./fonts/RobotoLight.ttf",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include normal (400), semi-bold (500), and bold (700)
});

export const metadata: Metadata = {
  title: "StockClubs",
  description: "Build by Sofix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
