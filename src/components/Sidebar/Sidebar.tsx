"use client";

import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoAdd, IoDocumentTextOutline } from "react-icons/io5";

const notesMock = [
  "Elorzelo",
  "Chemia",
  "React",
  "Typescript",
  "Twitch",
  "Elorzelo",
  "Elorzelo",
  "Elorzelo",
];

export function Sidebar() {
  const { data, status } = useSession();

  if (status === "loading") return <p>Loading</p>;
  return (
    <div className="w-60 h-screen border-r-2 border-r-[#303030] flex flex-col gap-12 p-4">
      <User
        className="text-white justify-start"
        avatarProps={{ src: data!.user!.image! }}
        name={data?.user?.name}
      />
      <div>
        <div className="font-semibold text-sm text-gray-500 flex justify-between items-center mb-4">
          <p className="">Notes</p>
          <button><IoAdd  size={24}/></button>
        </div>
        <nav className="flex flex-col gap-4">
          {notesMock.map((name, index) => (
            <Link
              href={index.toString()}
              key={index}
              className=" text-sm font-semibold text-gray-300 flex gap-2 w-full hover:bg-[#303030] rounded-lg py-1 px-2 cursor-pointer items-center"
            >
              {" "}
              <IoDocumentTextOutline size={16} /> {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
