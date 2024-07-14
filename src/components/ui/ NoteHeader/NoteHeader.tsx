'use client'

import { editTitle } from '@/actions/notes'
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

type NoteHeaderProps = {
    title: string
    noteId: string
}

export function NoteHeader({ title, noteId }: NoteHeaderProps) {
    const [noteTitle, setNoteTitle] = useState(title)
    const [editing, setEditing] = useState(false)

    const handleEdit = async () => {
        if (!noteTitle) return
        editTitle(noteId, noteTitle)
        setEditing(false)
    }
    return (
        <div className="w-full h-16 flex items-center lg:px-4 px-16 lg:ml-60 z-10 fixed top-0 border-b bg-[#161616] border-b-[#303030]">
            {editing ? (
                <div className="flex gap-2 items-center">
                    <Input
                        onKeyUp={async (evt) => {
                            if (evt.code === 'Enter') await handleEdit()
                        }}
                        value={noteTitle}
                        onChange={(evt) => setNoteTitle(evt.target.value)}
                        placeholder="Note title"
                        aria-label="Note title"
                    />
                    <Button
                        onClick={async () => await handleEdit()}
                        color="primary"
                    >
                        Save title
                    </Button>
                </div>
            ) : (
                <p
                    onClick={() => setEditing(true)}
                    className="text-white text-lg font-semibold"
                >
                    {title}
                </p>
            )}
        </div>
    )
}
