import { db } from '@/lib/database/db'
import { notes } from '@/lib/database/schema'
import { eq } from 'drizzle-orm'

export interface Note {
    id: string
    userEmail: string | null
    title: string
    content: string | null
    creating?: boolean | undefined
    createdAt: string
}

export const create = async (userEmail: string, noteId: string) => {
    return await db.insert(notes).values({
        id: noteId,
        title: 'New note',
        userEmail: userEmail,
    })
}

export const remove = async (noteId: string) => {
    await db.delete(notes).where(eq(notes.id, noteId))
}

export const findById = async (noteId: string) => {
    const [note] = await db.select().from(notes).where(eq(notes.id, noteId))

    return note
}

export const editContent = async (noteId: string, content: string) => {
    await db.update(notes).set({ content }).where(eq(notes.id, noteId))
}

export const getUserNotes = async (userEmail: string) => {
    const userNotes = await db
        .select()
        .from(notes)
        .where(eq(notes.userEmail, userEmail))

    return userNotes
}

export const editTitle = async (noteId: string, title: string) => {
    await db.update(notes).set({ title }).where(eq(notes.id, noteId))
}
