import type { Metadata } from 'next'
import { Comfortaa, Caveat } from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
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
      <body className={`${comfortaa.variable} ${caveat.variable} font-comfortaa`}>
        {children}
      </body>
    </html>
  )
}
