import React from 'react'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { cn } from '@/utilities/ui'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <body>
        <main className="flex flex-col items-center py-24 mx-auto contatiner h-dvh bg-background text-primary border-border">
          {children}
        </main>
      </body>
    </html>
  )
}
