import { redirect } from 'next/navigation'
import { getUserNotes } from '@/actions/notes'
import { auth } from '@/lib/auth'
import { Loading } from '@/components/ui/Loading/Loading'

export default async function NotesPage() {
    const session = await auth()
    if(!session?.user?.email) return null;
    const notes = await getUserNotes(session.user.email);
    redirect(`/notes/${notes[0].id}`)
    return <Loading />
}
