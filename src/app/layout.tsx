import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { PageLoaderWrapper } from '@/components/page-loader-wrapper';
import { CursorTrail } from '@/components/cursor-trail';

export const metadata: Metadata = {
  title: "Olaniran Pamilerin's Portfolio",
  description: "Frontend Developer (React.js, Tailwind, Bootstrap, JavaScript) | Python Programmer | Building Functional & Beautiful User Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoaderWrapper>
            {children}
          </PageLoaderWrapper>
          <CursorTrail />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
