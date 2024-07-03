import { auth } from "@/auth";
import { db } from "@/database/db";
import { notes } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { SingleNote } from "../SingleNote/SingleNote";
import { getUserNotes } from "@/actions/notes";

export async function NotesList() {
  const session = await auth();

  if (!session?.user) return redirect("/");

  const userNotes = await getUserNotes(session.user.email!);

  return (
    <nav className="flex flex-col gap-4 overflow-y-scroll">
      {userNotes.map((note) => (
        <SingleNote {...note} key={note.id} />
      ))}
    </nav>
  );
}
