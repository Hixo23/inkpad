"use client";

import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoAdd, IoMenu } from "react-icons/io5";
import { Loading } from "../Loading/Loading";
import { db } from "@/database/db";
import { notes } from "@/database/schema";
import { redirect } from "next/navigation";
import { createNote } from "@/actions/notes";

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();

  if (!data?.user && status === "loading") return <Loading />;
  return (
    <>
      <div
        className={`flex ${open ? "justify-end" : "justify-start"}  w-60 md:hidden absolute z-10`}
      >
        <button
          className="text-white text-2xl  p-4 top-0 "
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoMenu />
        </button>
      </div>

      <div
        className={`w-60 h-screen border-r-2 overflow-hidden fixed border-r-[#303030] z-0 flex flex-col gap-12 p-4 md:translate-x-0  ${open ? "translate-x-0" : "-translate-x-96"}`}
      >
        <User
          className="text-white justify-start"
          avatarProps={{ src: data!.user!.image! }}
          name={data!.user!.id}
        />
        <div>
          <div className="font-semibold text-sm text-gray-500 flex justify-between items-center mb-4">
            <p className="">Notes</p>
            <button
              onClick={async () => {
                if (!data?.user?.email) return;
                await createNote(data.user.email);
              }}
            >
              <IoAdd size={24} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
