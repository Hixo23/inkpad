"use server";

import { getNoteById } from "@/actions/notes";
import { Editor } from "@/components/Editor/Editor";

type NotePageProps = {
  params: { id: string };
};

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteById(params.id);

  if(!note) return null;


  return (
    <div className="w-screen min-h-screen text-white flex justify-center items-center py-4">
      <Editor note={note} />
    </div>
  );
}
