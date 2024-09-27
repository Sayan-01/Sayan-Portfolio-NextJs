import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "SAYAN DAS",
  description: "Web designer and developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
