import type { NextAuthConfig } from "next-auth";
import discord from "next-auth/providers/discord";

export default {
  providers: [discord],
} satisfies NextAuthConfig;
