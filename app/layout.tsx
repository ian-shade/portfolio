import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Ian Shade | AI Engineer",
  description: "AI Engineer specializing in machine learning and artificial intelligence.",
  icons: {
    icon: "/Ian_profile.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://ianshade.com",
    siteName: "Ian Shade Portfolio",
    title: "Ian Shade | AI Engineer",
    description: "AI Engineer specializing in machine learning and artificial intelligence.",
    images: [
      {
        url: "/Ian_profile.jpg",
        width: 800,
        height: 800,
        alt: "Ian Shade - AI Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Shade | AI Engineer",
    description: "AI Engineer specializing in machine learning and artificial intelligence.",
    images: ["/Ian_profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
