import type { Metadata } from 'next'
import { Dancing_Script, Mali, Playfair_Display } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700'],
})

const mali = Mali({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-mali',
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Thiệp Chúc Mừng Ngày 20/10 - FIA',
  description: 'Thiệp chúc mừng ngày Phụ Nữ Việt Nam từ câu lạc bộ FIA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${dancingScript.variable} ${mali.variable} ${playfairDisplay.variable} font-mali`}>
        {children}
      </body>
    </html>
  )
}
