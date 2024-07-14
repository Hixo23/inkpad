import { create, editContent, editTitle, findById, getUserNotes, Note, remove } from '@/repositories/notes/noteRepository'

export async function createNote(userEmail: string) {
        const noteId = crypto.randomUUID()

        create(userEmail, noteId)

        return noteId
    }

   export async function getNoteById(noteId: string): Promise<Note> {
      return findById(noteId)
    }

    export async function editNoteContent(noteId: string, content: string) {
       editContent(noteId, content)
    }

    export async function getUserNotesFromDatabase(userEmail: string): Promise<Note[]> {
        return getUserNotes(userEmail)
    }

    export async function editNoteTitle(noteId: string, title: string) {
        editTitle(noteId, title)
    }

    export  async function removeNote(noteId: string) {
       remove(noteId)
    }

