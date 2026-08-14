import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const apxSans = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-apx-sans' })
const apxSerif = Playfair_Display({ subsets: ['cyrillic', 'latin'], variable: '--font-apx-serif' })

export const metadata: Metadata = {
  title: 'Apex Casino: вход, зеркало и официальный сайт — честный обзор 2026',
  description: 'Подробный обзор Apex Casino: как найти официальный сайт, выполнить вход, проверить зеркало, пройти регистрацию и играть осознанно. Ключевые условия, безопасность и ответы на частые вопросы без лишних обещаний.',
  generator: 'Next.js',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Apex Casino — спокойный обзор и навигатор',
    description: 'Вход, зеркало, официальный сайт, регистрация и правила ответственной игры в одном понятном материале.',
    type: 'article',
    locale: 'ru_RU',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f4ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${apxSans.variable} ${apxSerif.variable}`}><body>{children}</body></html>
}
