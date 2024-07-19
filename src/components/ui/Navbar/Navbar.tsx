'use client'

import {
    Button,
    User,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export function Navbar() {
    const { status, data } = useSession()
    return (
        <header className="top-0 flex sticky left-0  backdrop-blur-lg w-screen justify-between px-8 py-4 z-40 text-white items-center">
            <h1 className="text-3xl font-bold">Inkpad</h1>
            <nav className="flex gap-4">
                <Link
                    className="text-gray-400 hover:text-white transition-colors duration-150"
                    href="#features"
                >
                    Features
                </Link>
            </nav>
            {status === 'authenticated' && data.user?.image ? (
                <Dropdown className="dark text-white">
                    <DropdownTrigger>
                        <button>
                            <User
                                name={data.user?.name}
                                avatarProps={{ src: data.user.image }}
                            />
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link className="w-full h-full" href={'/notes'}>
                                Notes
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <button
                                className="w-full text-left"
                                onClick={() => signOut()}
                            >
                                Sign out
                            </button>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            ) : (
                <Button
                    as={Link}
                    variant="flat"
                    color="primary"
                    href="/sign-in"
                >
                    Login
                </Button>
            )}
        </header>
    )
}
