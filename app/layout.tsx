import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://restorationrapidresponse.com'),
  title: 'Restoration Rapid Response | AI Receptionist for Restoration Companies',
  description:
    'AI receptionist and missed-call text back for restoration companies. Capture emergency leads 24/7, qualify calls, collect insurance details, and alert dispatch faster.',
  keywords: [
    'AI receptionist for restoration companies',
    'restoration lead response',
    'missed call text back for restoration',
    'water damage lead capture',
    'fire damage call answering',
    'mold remediation lead response',
    'emergency restoration call handling',
  ],
  openGraph: {
    title: 'Never Miss Another Restoration Call',
    description:
      'Capture every emergency lead, recover missed calls instantly, and dispatch faster with Restoration Rapid Response.',
    url: 'https://restorationrapidresponse.com',
    siteName: 'Restoration Rapid Response',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
