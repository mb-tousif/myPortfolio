import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/ui/Footer';
import RootProvider from '@/libs/RootProvider';
import Header from '@/components/ui/Header';
export const metadata: Metadata = {
  title: "< 𝕯𝖊𝖛 𝕿𝖔𝖚𝖘𝖎𝖋 />",
  description: "Azizul Haque Tousif | MERN Developer | Full Stack Developer",
  icons: "./favicon.png",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RootProvider>
          <Header />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
