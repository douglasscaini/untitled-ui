"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface SelectProps extends SelectPrimitive.SelectProps {
    children: ReactNode;
    placeholder: string;
}

export function Select({ children, placeholder, ...props }: SelectProps) {
    return (
        <SelectPrimitive.Root {...props}>
            <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
                <SelectPrimitive.Value placeholder={placeholder} className="text-black" />
                <SelectPrimitive.Icon>
                    <ChevronDown className="h-5 w-5 text-zinc-500" />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content
                    sideOffset={8}
                    side="bottom"
                    position="popper"
                    className="z-10 rounded-lg shadow-sm border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden animate-slideDownAndFade"
                >
                    <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    );
}
