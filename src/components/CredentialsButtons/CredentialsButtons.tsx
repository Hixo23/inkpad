'use client'

import { Button } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import { FaDiscord, FaGithub, FaGoogle } from 'react-icons/fa'

export function CredentialsButtons() {
    return (
        <div className="flex flex-col justify-center lg:flex-row gap-6 h-full py-4">
            <Button
                className="flex items-center gap-2"
                size="lg"
                color="secondary"
                onClick={() => signIn('discord', { callbackUrl: '/notes/' })}
            >
                <FaDiscord />
                Login with Discord
            </Button>
            <Button
                className="flex items-center gap-2"
                size="lg"
                color="primary"
                onClick={() => signIn('google', { callbackUrl: '/notes/' })}
            >
                <FaGoogle />
                Login with Google
            </Button>
            <Button
                className="flex items-center gap-2 text-white"
                size="lg"
                color="success"
                onClick={() => signIn('github', { callbackUrl: '/notes/' })}
            >
                <FaGithub />
                Login with Github
            </Button>
        </div>
    )
}
