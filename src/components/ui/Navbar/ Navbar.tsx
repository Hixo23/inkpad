"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  User,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { status, data } = useSession();
  return (
    <NextUINavbar className="bg-[#161616] border-b border-b-[#303030] flex fixed">
      <NavbarBrand>
        <p className="text-white font-bold text-2xl">Inkpad</p>
      </NavbarBrand>
      <NavbarContent justify="center" className="text-white">
        <NavbarItem>
          <Link href="#features">Benefits</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#pricing">Pricing</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {status === "authenticated" && data.user ? (
          <User
            className="text-white"
            avatarProps={{ src: data.user.image! }}
            name={data.user.name}
          />
        ) : (
          <NavbarItem>
            <Button
              onClick={() => signIn("discord")}
              color="secondary"
              variant="flat"
            >
              Login using Discord
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
}
