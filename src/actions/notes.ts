'use server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import {
    createNote,
    editNoteContent,
    editNoteTitle,
    getNoteById,
    getUserNotesFromDatabase,
    removeNote,
} from '@/services/notes/noteService'

export const create = async (userEmail: string) => {
    const noteId = await createNote(userEmail)
    revalidateTag('notes')
    redirect(`/notes/${noteId}`)
}

export const getNote = async (noteId: string) => {
    return await getNoteById(noteId)
}

export const editContent = async (noteId: string, content: string) => {
    editNoteContent(noteId, content)
    revalidatePath('/notes/[id]', 'page')
}

export const getUserNotes = async (userEmail: string) => {
    return await getUserNotesFromDatabase(userEmail)
}

export const editTitle = async (noteId: string, newTitle: string) => {
    editNoteTitle(noteId, newTitle)
    revalidatePath('/notes/[id]')
}

export const remove = async (noteId: string) => {
    removeNote(noteId)
    revalidateTag('notes')
    redirect('/notes/')
}
