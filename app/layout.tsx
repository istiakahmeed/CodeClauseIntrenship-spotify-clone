import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProviders from "@/providers/SupabaseProviders";
import ToasterProvider from "@/providers/Toasterprovider";
import UseProvider from "@/providers/UseProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <SupabaseProviders>
          <UseProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UseProvider>
        </SupabaseProviders>
      </body>
    </html>
  );
}
