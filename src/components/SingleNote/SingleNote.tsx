import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

type SingleNoteProps = {
  id: string;
  title: string | null;
};

export function SingleNote({ id, title }: SingleNoteProps) {
  return (
    <Link
      href={`/notes/${id}`}
      key={id}
      className=" text-sm font-semibold text-gray-300 flex gap-2 w-full hover:bg-[#303030] rounded-lg py-1 px-2 cursor-pointer items-center"
    >
      {" "}
      <IoDocumentTextOutline size={16} /> {title}
    </Link>
  );
}
