'use client'

import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    User,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Link,
} from '@nextui-org/react'
import { signIn, signOut, useSession } from 'next-auth/react'

export function Navbar() {
    const { status, data } = useSession()
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
                {status === 'authenticated' && data.user ? (
                    <Dropdown className="dark text-white">
                        <DropdownTrigger>
                            <User
                                className="text-white"
                                avatarProps={{ src: data.user.image! }}
                                name={data.user.name}
                            />
                        </DropdownTrigger>

                        <DropdownMenu>
                            <DropdownItem href="/notes">Notes</DropdownItem>
                            <DropdownItem onAction={() => signOut()}>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                ) : (
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="secondary"
                            href="/sign-in"
                            variant="flat"
                        >
                            Login
                        </Button>
                    </NavbarItem>
                )}
            </NavbarContent>
        </NextUINavbar>
    )
}
