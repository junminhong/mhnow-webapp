import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Monster Hunter Now Wiki - 2023年10月獵人指南',
  description: 'Monster Hunter Now Wiki 是一個集中於《Monster Hunter》遊戲系列的綜合資訊平台。在這個維基（Wiki）網站上，玩家們可以找到與《Monster Hunter》遊戲相關的各種資料，包括怪物的詳細資訊、武器和裝備的數據、任務指南、技巧和策略等。無論您是系列的資深玩家，或是剛入門的新手，Monster Hunter Now Wiki 都將為您提供豐富的遊戲資訊和社群交流平台，協助您在怪物狩獵的世界中獲得更豐富的體驗和樂趣。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
