import { redirect } from "next/navigation";

type notePageProps = {
  searchParams?:{ [key: string]: string | undefined };
}

export default function NotesPage({ searchParams}: notePageProps) {
  if(!searchParams?.id) return redirect('/')
  return <div className="w-screen min-h-screen text-white flex justify-center items-center py-4">

  </div>;
}
