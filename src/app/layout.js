import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "IOJN — International Online Journal Network | Research. Innovation. Impact.",
  description:
    "IOJN supports researchers, academics, institutions and organizations through protocol development, data analysis, article writing, publication support and journal management.",
};

export const viewport = {
  themeColor: "#0B1F33",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Flags JS availability before paint so reveal animations never flash or hide content without JS */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
