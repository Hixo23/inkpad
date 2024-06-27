import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export function Navbar() {
  return (
    <NextUINavbar className="bg-[#161616] border-b border-b-[#303030] flex">
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
        <NavbarItem>
          <Button color="primary" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
