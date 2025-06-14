import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'バグという名の心 - ノベルゲーム',
  description: 'ゲーム開発者とNPCの心の物語',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}