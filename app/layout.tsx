import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '素材管理系統',
  description: '智能素材管理系統',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
