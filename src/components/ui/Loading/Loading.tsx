export function Loading() {
    return (
        <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center z-20 bg-[#161616]">
            <span className="w-32 h-32 border-4 border-blue-500 border-t-4 border-t-blue-600 rounded-full animate-spin "></span>
        </div>
    )
}
