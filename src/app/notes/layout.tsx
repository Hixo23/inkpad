import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type NotesLayoutProps = {
  children: ReactNode;
};

export default async function NotesLayout({ children }: NotesLayoutProps) {
  const session = await auth();

  if (!session?.user?.name) return redirect("/");
  return <>{children}</>;
}
