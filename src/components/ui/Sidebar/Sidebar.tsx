"use client";

import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoAdd, IoMenu } from "react-icons/io5";
import { Loading } from "../Loading/Loading";
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
        className={`flex ${open ? "justify-end w-60" : "justify-start bg-[#303030] rounded-full"} p-4  md:hidden absolute z-30`}
      >
        <button
          className="text-white text-2xl top-0 "
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoMenu />
        </button>
      </div>

      <div
        className={`w-60 h-screen border-r-2 overflow-hidden fixed border-r-[#303030] bg-[#161616] flex flex-col gap-12 p-4 z-20 md:translate-x-0  ${open ? "translate-x-0" : "-translate-x-96"}`}
      >
        <User
          className="text-white justify-start"
          avatarProps={{ src: data!.user!.image! }}
          name={data!.user?.name}
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
