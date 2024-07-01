"use server";

import { db } from "@/database/db";
import { notes } from "@/database/schema";
import { redirect } from "next/navigation";


export const createNote = async (userEmail: string) => {
  
    const noteId = crypto.randomUUID();
  
    await db.insert(notes).values({
      id: noteId,
      title: "New note",
      userEmail: userEmail
    })
  
    return redirect(`/notes?id=${noteId}`)
  }