import { Features } from '@/components/Sections/Features'
import { Hero } from '@/components/Sections/Hero'
import { Navbar } from '@/components/ui/Navbar/Navbar'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <Hero />
            <Features />
        </main>
    )
}
