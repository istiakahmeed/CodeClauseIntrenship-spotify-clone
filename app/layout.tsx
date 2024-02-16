import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProviders from "@/providers/SupabaseProviders";
import ToasterProvider from "@/providers/Toasterprovider";
import UseProvider from "@/providers/UseProvider";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export const revalidate = 0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSong = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProviders>
          <UseProvider>
            <ModalProvider />
            <Sidebar songs={userSong}>{children}</Sidebar>
            <Player />
          </UseProvider>
        </SupabaseProviders>
      </body>
    </html>
  );
}
