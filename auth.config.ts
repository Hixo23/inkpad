import type { NextAuthConfig } from 'next-auth'
import discord from 'next-auth/providers/discord'
import github from 'next-auth/providers/github'
import google from 'next-auth/providers/google'

export default {
    providers: [discord, github, google],
} satisfies NextAuthConfig
