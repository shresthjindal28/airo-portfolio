import type { Metadata, Viewport } from "next";
import { LayoutWrapper } from "@/components/layout-wrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aevomed — AI-Assisted Clinical Operating System",
  description:
    "Automate clinical documentation, SOAP note drafting, and patient visit scheduling in real time. HIPAA-compliant platform for clinics and hospitals.",
  icons: {
    icon: "/aevomed-icon.svg",
    shortcut: "/aevomed-icon.svg",
    apple: "/aevomed-app-icon.svg",
  },
  openGraph: {
    title: "Aevomed — AI-Assisted Clinical Operating System",
    description:
      "Automate clinical documentation, SOAP note drafting, and patient visit scheduling in real time. HIPAA-compliant platform for clinics and hospitals.",
    siteName: "Aevomed OS",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className="antialiased min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
