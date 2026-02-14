import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NeuroKernel Dashboard',
  description: 'AI Self Healing System'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-white">
        {children}
      </body>
    </html>
  )
}
