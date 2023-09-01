import { Logo } from "./Logo";
import { Search } from 'lucide-react'
import { MainNavigation } from "./MainNavigation";

export function Sidebar() {
    return (
        <>
            <aside className="border-r border-zinc-200 px-5 py-8 space-y-6">
                <Logo />

                <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
                    <Search className="h-5 w-5 text-zinc-500" />
                    <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Search"/>
                </div>

                <MainNavigation />
            </aside>
        </>
    )
}