import { ReactNode } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat box',
  description: 'Tạo ra chatbox dùng để vừa học vừa nghịch',
}



export default function RootLayout({ children,}: {children: React.ReactNode}) {
  return (

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
