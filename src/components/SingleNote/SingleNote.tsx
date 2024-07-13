"use client";

import { editNoteTitle, removeNote } from "@/actions/notes";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoDocumentTextOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { LiaEdit } from "react-icons/lia";

type SingleNoteProps = {
  id: string;
  title: string;
};

export function SingleNote({ id, title }: SingleNoteProps) {
  const path = usePathname();
  const [noteTitle, setNoteTitle] = useState(title);
  const [editing, setEditing] = useState(false);

  const handleEdit = async (evt: React.KeyboardEvent) => {
    if (evt.code !== "Enter") return;
    if (!noteTitle) return;
    editNoteTitle(id, noteTitle);
    setEditing(false);
  };

  const handleRemove = async() => {
    await removeNote(id);
  }
  return (
    <div
      className={`flex justify-between text-gray-300 items-center w-full hover:bg-[#303030] rounded-lg py-1 px-2 cursor-pointer group  ${path === `/notes/${id}` && "bg-[#303030]"}`}
    >
      {editing ? (
        <>
          <Input
            onKeyUp={handleEdit}
            variant="faded"
            value={noteTitle}
            onChange={(evt) => setNoteTitle(evt.target.value)}
          />
        </>
      ) : (
        <>
          <Link
            href={`/notes/${id}`}
            key={id}
            className={`text-sm font-semibold flex gap-2 w-full items-center`}
          >
            <IoDocumentTextOutline /> {title}
          </Link>
         <div className="flex gap-2 items-center">
         <button
            className="hidden group-hover:block"
            onClick={() => setEditing(true)}
          >
            <LiaEdit />
          </button>
          <button
            className="hidden group-hover:block"
            onClick={() => handleRemove()}
          >
           <IoRemoveCircleOutline />
          </button>
         </div>
        </>
      )}
    </div>
  );
}
