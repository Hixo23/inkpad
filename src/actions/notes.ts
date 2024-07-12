"use server";

import { db } from "@/database/db";
import { notes } from "@/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createNote = async (userEmail: string) => {
  const noteId = crypto.randomUUID();

  await db.insert(notes).values({
    id: noteId,
    title: "New note",
    userEmail: userEmail,
  });

  return redirect(`/notes/${noteId}`);
};

export const getNoteById = async (noteId: string) => {
  const notesDb = await db.select().from(notes).where(eq(notes.id, noteId));
  const note = notesDb[0];

  if (!note) {
    return null;
  }

  

  return note;
};

export const editNoteContent = async (noteId: string, content: string) => {
  await db.update(notes).set({ content: content }).where(eq(notes.id, noteId));
  revalidatePath("/notes/[id]", "page");
};

export const getUserNotes = async (userEmail: string) => {
  const userNotes = await db
    .select()
    .from(notes)
    .where(eq(notes.userEmail, userEmail));

  return userNotes;
};

export const editNoteTitle = async (noteId: string, newTitle: string) => {
  await db.update(notes).set({ title: newTitle }).where(eq(notes.id, noteId));
  revalidatePath("/notes/[id]");
};
