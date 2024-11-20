import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio: Abhishek Vaghasiya",
  description:
    "Abhishek Vaghasiya is a Web Developer based in India. He specializes in building web Design & Development  using modern technologies.",
  keywords:
    "Web developer, Abhishek Vaghasiya, software Developer, India",
  authors: [{ name: "Abhishek Vaghasiya" }],
  creator: "Abhishek Vaghasiya",
  publisher: "Abhishek Vaghasiya",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://devabhishek.vercel.app",
    title: "Abhishek Vaghasiya - Web Developer",
    description:
      "Abhishek Vaghasiya is a Web Developer based in India. He specializes in building web Design & Development using modern technologies.",
    siteName: "Abhishek Vaghasiya Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="./icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="./icons/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="me" href="https://x.com/AbhishekVa2001" />
        <link rel="me" href="https://www.linkedin.com/in/abhishek-vaghasiya-b56469254" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ce8f1102-baef-4791-a4c7-d0f1f3f396ed"
        ></script>
      </Head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class">
          <div className="relative min-h-screen overflow-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
