'use client'

import { Note } from '@/repositories/notes/noteRepository'
import { SingleNote } from '../SingleNote/SingleNote'

type NotesListProps = {
    notes: Note[]
}

export function NotesList({ notes }: NotesListProps) {
    return (
        <nav className="flex flex-col gap-4">
            {notes.length >= 1 &&
                notes.map((note) => <SingleNote {...note} key={note.id} />)}
        </nav>
    )
}
