import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DAOplomats",
  description: "Working to DAO it",
  icons: {
    shortcut: [{ url: "/favicon.ico", sizes: "16x16", type: "image/ico" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"overflow-x-hidden bg-[#242424]" + inter.className}>
        {children}
      </body>
    </html>
  );
}
