"use server";

import { getNoteById } from "@/actions/notes";
import { Editor } from "@/components/Editor/Editor";
import { NoteNavbar } from "@/components/ui/NoteNavbar/NoteNavbar";

type NotePageProps = {
  params: { id: string };
};

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteById(params.id);

  if (!note) return null;

  return (
    <div className="w-full lg:ml-60 relative min-h-screen text-white flex flex-col items-center py-4">
      <NoteNavbar title={note.title} />
      <Editor note={note} />
    </div>
  );
}
