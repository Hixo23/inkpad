'use client'

import { Button } from '@nextui-org/react'
import { signIn, useSession } from 'next-auth/react'

export function Hero() {
    const { status } = useSession()
    return (
        <section className="min-h-[70vh] w-screen flex gap-6 flex-col text-white items-center justify-center">
            <div className="flex flex-col gap-6 text-center">
                <h1 className="text-6xl font-semibold">Note app you'll love</h1>
                <p className="text-gray-300 text-center">
                    All your notes, synced on all your devices!
                </p>
            </div>
            {status === 'unauthenticated' && (
                <Button onClick={() => signIn('discord')} color="primary">
                    Sign in now!
                </Button>
            )}
        </section>
    )
}
