import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://apexcasino15.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Apex Casino — вход, зеркало, игры онлайн и регистрация 18+',
  description: 'Apex Casino: понятный гид по входу, официальному сайту, зеркалу, регистрации и играм онлайн. Проверяйте адрес, читайте условия и сохраняйте ответственный подход к развлечениям 18+.',
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Apex Casino — вход, зеркало и регистрация онлайн',
    description: 'Навигация по Apex Casino: официальный сайт, вход, зеркало, игры и ответственная регистрация 18+.',
    url: siteUrl,
    siteName: 'Apex Casino',
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
  themeColor: '#f6f7f3',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background"><body>{children}</body></html>
}
