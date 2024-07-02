"use server";

import { getNoteById } from "@/actions/notes";
import { Editor } from "@/components/Editor/Editor";

type NotePageProps = {
  params: { id: string };
};

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteById(params.id);

  console.log(note)

  const data = JSON.parse(JSON.stringify(note).toString())

  return (
    <div className="w-screen text-white flex justify-center items-center py-4">
      <Editor note={data} />
    </div>
  );
}
