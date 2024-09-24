"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, type ComponentPropsWithRef } from "react";

export const SuperLink = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<typeof Link>>((props, ref) => {
    const router = useRouter();
    const strHref = typeof props.href === "string" ? props.href : props.href.href;
    return (
        <Link
            {...props}
            ref={ref}
            prefetch={false}
            onMouseEnter={(e) => {
                if (strHref) {
                    void router.prefetch(strHref);
                }
                return props.onMouseEnter?.(e);
            }}
        />
    );
});

SuperLink.displayName = "SuperLink";
