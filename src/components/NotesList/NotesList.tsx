import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SingleNote } from "../SingleNote/SingleNote";
import { getUserNotes } from "@/actions/notes";

export async function NotesList() {
  const session = await auth();


  const userNotes = await getUserNotes(session!.user!.email!);

  return (
    <nav className="flex flex-col gap-4 overflow-y-scroll">
      {userNotes.map((note) => (
        <SingleNote {...note} key={note.id} />
      ))}
    </nav>
  );
}
