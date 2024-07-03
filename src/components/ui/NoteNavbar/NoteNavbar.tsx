type NoteNavbarProps = {
  title: string | null;
};

export function NoteNavbar({ title }: NoteNavbarProps) {
  return (
    <div className="w-full h-16 flex items-center px-4 ml-60 z-10 fixed top-0 border-b bg-[#161616] border-b-[#303030]">
      <p className="text-white text-lg font-semibold">{title}</p>
    </div>
  );
}
