import Header from "@/components/Header";
import MobileWarning from "@/components/MobileWarning";
import "../styles/globals.css";
import { WindowProvider } from "@/context/WindowsContext";

export const metadata = {
  title: "Abdelrahman Mostafa",
  description:
    "Proof I know what I’m doing. Or at least that I can Google really well.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-quicksand `}>
        <WindowProvider>
          <Header />
          {children}
          <MobileWarning />
        </WindowProvider>
      </body>
    </html>
  );
}
