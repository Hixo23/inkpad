import { auth } from '@/lib/auth'
import { Sidebar } from '@/components/ui/Sidebar/Sidebar'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { unstable_cache } from 'next/cache'
import { getUserNotes } from '@/actions/notes'

type NotesLayoutProps = {
    children: ReactNode
}

const getCachedNotes = unstable_cache(async(session) => getUserNotes(session.user.email))

export default async function NotesLayout({ children }: NotesLayoutProps) {
    const session = await auth()

    if (!session?.user) return redirect('/')

     const cachedUserNotes = await getCachedNotes(session)
    return (
        <main className="flex overflow-hidden">
            <Sidebar notes={cachedUserNotes}/>
                
            {children}
        </main>
    )
}
