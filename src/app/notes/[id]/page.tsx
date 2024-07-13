"use server";

import { getNoteById } from "@/actions/notes";
import { Editor } from "@/components/Editor/Editor";
import { NoteHeader } from "@/components/ui/ NoteHeader/NoteHeader";

type NotePageProps = {
  params: { id: string };
};

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteById(params.id);

  if (!note) return null;

  return (
    <div className="w-full lg:ml-60 relative min-h-screen bg-[#1f1f1f] text-white flex flex-col lg:items-center py-4">
      <NoteHeader noteId={note.id} title={note.title} />
      <Editor note={note} />
    </div>
  );
}
