"use server";

import { db } from "@/database/db";
import { notes } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const createNote = async (userEmail: string) => {
  const noteId = crypto.randomUUID();

  await db.insert(notes).values({
    id: noteId,
    title: "New note",
    userEmail: userEmail,
  });

  return redirect(`/notes?id=${noteId}`);
};

export const getNoteById = async (noteId: string) => {
  const notesDb = await db.select().from(notes).where(eq(notes.id, noteId));
  const note = notesDb[0];

  if (!note) {
    return null;
  }

  const plainNote = {
    id: note.id,
    title: note.title,
    content: note.content,
    userEmail: note.userEmail,
  };

  return plainNote;
};

export const editNote = async (noteId: string, content: string) => {
  return await db
    .update(notes)
    .set({ content: content })
    .where(eq(notes.id, noteId));
};

export const getUserNotes = async (userEmail: string) => {
  "use server";
  const userNotes = await db
    .select()
    .from(notes)
    .where(eq(notes.userEmail, userEmail));

  return userNotes;
};
