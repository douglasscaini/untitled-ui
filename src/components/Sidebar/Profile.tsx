import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="grid grid-cols-profile items-center gap-3">
            <img
                src="https://github.com/douglasscaini.png"
                alt="Imagem do usuário"
                className="w-10 h-10 rounded-full"
            />

            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Douglas Scaini</span>
                <span className="truncate text-sm text-zinc-500">douglasscaini.dev@gmail.com</span>
            </div>

            <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50">
                <LogOut className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    );
}
