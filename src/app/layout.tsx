import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'Inkpad',
    description: 'Your favorite note app!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={poppins.variable}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
