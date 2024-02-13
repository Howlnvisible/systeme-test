import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header";
import DefaultLayout from "@/shared/layouts/defaultLayout/default";
import {
  ManagedModal,
  ModalProvider,
} from "./providers/modalProvider/modalProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Systeme test",
  description: "Made by Aleksei Bychkov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <DefaultLayout header={<Header />}>{children}</DefaultLayout>
          <ManagedModal />
          <ToastContainer />
        </ModalProvider>
      </body>
    </html>
  );
}
