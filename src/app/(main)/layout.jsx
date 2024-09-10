import { Nunito } from "next/font/google";
import "../globals.css";
import Header from "@/components/common/header";
import SideBar from "@/components/common/sideBar";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "My Project",
  description: "miao miao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class={inter.className}>
        <Header />
        <main class="flex content pt-[40px] translate-y-12">
          <SideBar />
          <div class="ml-[379px] w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}