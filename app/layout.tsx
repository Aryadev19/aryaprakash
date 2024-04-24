import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aryaprakash.vercel.app/"),
	title:"Aryadev",
	authors: {
		name: "Aryadev",
	},

	description:
		"Born in India, I'm a Frontend developer passionate about building modern web application that users love.",
	openGraph: {
		title: "Aryadev",
		description:
			"Born in India, I'm a Frontend developer passionate about building modern web application that users love.",
		siteName: "Aryadev",
		images: "/og.png",
		type: "website",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
