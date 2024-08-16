import { Note } from '@/repositories/notes/noteRepository'
import { Input } from '@nextui-org/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

type NotesSearchBarProps = {
    notes: Note[]
    setNotes: Dispatch<SetStateAction<Note[] | []>>
}

export function NotesSearchBar({ notes, setNotes }: NotesSearchBarProps) {
    const [titleFilter, setTitleFilter] = useState('')
    useEffect(() => {
        if (!titleFilter) return setNotes(notes)
        return setNotes(
            notes.filter((note) => note.title.includes(titleFilter))
        )
    }, [notes, setNotes, titleFilter])
    return (
        <Input
            placeholder="Your note title"
            size="sm"
            className="w-full mb-4"
            variant="flat"
            startContent={<BiSearch color="#ffffff" />}
            onChange={(evt) => setTitleFilter(evt.target.value)}
        />
    )
}
