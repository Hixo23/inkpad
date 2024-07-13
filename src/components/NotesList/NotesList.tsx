import { auth } from "@/auth";
import { SingleNote } from "../SingleNote/SingleNote";
import { getUserNotes } from "@/actions/notes";

export async function NotesList() {
  const session = await auth();

  const userNotes = await getUserNotes(session!.user!.email!);

  return (
    <nav className="flex flex-col gap-4">
      {userNotes.map((note) => (
        <SingleNote {...note} key={note.id} />
      ))}
    </nav>
  );
}
