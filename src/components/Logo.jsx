const Logo = () => {
    return (
        <div className="flex flex-col items-start">
            <div className="flex items-center gap-4">

                <div className="relative h-10 w-10 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-sm rotate-45"></div>
                    <div className="absolute inset-1 bg-white rounded-sm rotate-45"></div>
                    <span className="relative text-lg font-bold text-slate-900">E<span className="text-yellow-500">.</span></span>
                </div>

                <div className="flex flex-col leading-tight items-start">
                    <span className="font-bold text-md tracking-tight text-white">Edu<span className="text-yellow-500">grade</span></span>
                    <span className="italic text-xs uppercase text-slate-400">Eternity Learning</span>
                </div>
            </div>
        </div>
    )
}

export default Logo