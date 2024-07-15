import { CredentialsButtons } from '@/components/CredentialsButtons/CredentialsButtons'

export default function signInPage() {
    return (
        <main className="w-screen min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center   bg-[#303030] h-96 lg:w-1/2 w-2/3 gap-6 rounded-xl p-6">
                <div className="flex flex-col items-center py-4 text-white text-center gap-2">
                    <h1 className="text-4xl font-bold">Hello!</h1>
                    <p className="text-gray-400 text-sm">
                        You must be logged in to use inkpad!
                    </p>
                </div>
                <CredentialsButtons />
            </div>
        </main>
    )
}
