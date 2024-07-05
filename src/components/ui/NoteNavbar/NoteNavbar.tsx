"use client";

import { editNoteTitle } from "@/actions/notes";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

type NoteNavbarProps = {
  title: string;
  noteId: string
};

export function NoteNavbar({ title, noteId }: NoteNavbarProps) {
    const [noteTitle, setNoteTitle] = useState(title);
    const [editing, setEditing] = useState(false);
  return (
    <div className="w-full h-12 flex items-center px-4 ml-60 z-10 fixed top-0 border-b bg-[#161616] border-b-[#303030]">
     {editing ? <div className="flex gap-2 items-center">
        <Input value={noteTitle} onChange={(evt) => setNoteTitle(evt.target.value)} placeholder="Note title" aria-label="Note title"  />
        <Button onClick={async() => {
            if(!noteTitle) return;
            editNoteTitle(noteId, noteTitle);
            setEditing(false)
        }} color="primary">Save title</Button>
     </div> :  <p onClick={() => setEditing(true)} className="text-white text-lg font-semibold">{noteTitle}</p>}
    </div>
  );
}
