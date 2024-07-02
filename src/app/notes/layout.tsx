import { auth } from "@/auth";
import { NotesList } from "@/components/NotesList/NotesList";
import { Sidebar } from "@/components/ui/Sidebar/Sidebar";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type NotesLayoutProps = {
  children: ReactNode;
};

export default async function NotesLayout({ children }: NotesLayoutProps) {
  const session = await auth();

  if (!session?.user) return redirect("/");
  return (
    <main className="flex">
      <Sidebar>
        <NotesList />
      </Sidebar>
      {children}
    </main>
  );
}
