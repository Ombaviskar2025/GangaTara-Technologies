import type { Metadata, Viewport } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ContactModalProvider } from '@/context/ContactModalContext';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { ContactModal } from '@/components/ui/ContactModal';
import { InteractiveUIEffects } from '@/components/ui/InteractiveUIEffects';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GangaTara Technologies | Enterprise IT Solutions & Digital Transformation',
  description: 'GangaTara Technologies engineers world-class cloud solutions, AI & machine learning, cybersecurity systems, and premium custom software applications for global enterprises.',
  keywords: ['Enterprise IT', 'Cloud Solutions', 'AI & Machine Learning', 'Cybersecurity', 'Software Development', 'GangaTara', 'Digital Transformation'],
  authors: [{ name: 'GangaTara Technologies' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-light dark:bg-dark text-dark dark:text-light">
        <ThemeProvider>
          <LanguageProvider>
            <ContactModalProvider>
              {/* Smooth client transitions and visual helpers */}
              <InteractiveUIEffects />

              {/* Global Contact Modal (always mounted, shown via context) */}
              <ContactModal />

              {/* Sticky Header */}
              <Navbar />

              {/* Page content */}
              <main className="flex-grow">
                {children}
              </main>

              {/* Footer */}
              <Footer />
            </ContactModalProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
