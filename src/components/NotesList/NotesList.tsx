'use client'

import { Note } from '@/repositories/notes/noteRepository'
import { SingleNote } from '../SingleNote/SingleNote'

type NotesListProps = {
    notes: Note[]
}

export function NotesList({ notes }: NotesListProps) {
    return (
        <nav className="flex flex-col gap-4">
            {notes.map((note) => (
                <SingleNote {...note} key={note.id} />
            ))}
        </nav>
    )
}
