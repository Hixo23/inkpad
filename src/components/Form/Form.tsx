'use client';

import { useFormState } from "react-dom";


interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
    action: (_: any, formData: FormData) => Promise<ActionResult>
}

export function Form({
    children, 
    action,
    ...props
}: FormProps) {
    const [state, formAction] = useFormState(action, {
       error: null
    })
    return (
        <form action={formAction} {...props}>
            {children}
        <p className="text-red-500 text-sm">{state.error}</p>
        </form>
    )
}

export interface ActionResult  {
    error: string | null
}