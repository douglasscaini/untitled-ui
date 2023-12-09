import { SettingsTabs } from "../components/SettingsTabs";
import { Select } from "../components/Form/Select";
import { SelectItem } from "../components/Form/Select/SelectItem";
import { Textarea } from "../components/Form/Textarea";
import * as FileInput from "../components/Form/FileInput";
import * as Input from "../components/Input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

            <SettingsTabs />

            <div className="mt-6 flex flex-col">
                <div className="flex flex-row justify-between items-center pb-5 border-b border-zinc-200">
                    <div className="space-y-1">
                        <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
                        <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
                            form="settings"
                        >
                            Save
                        </button>
                    </div>
                </div>

                <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
                    <div className="grid gap-3 grid-cols-form">
                        <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
                            Name
                        </label>
                        <div className="grid gap-6 grid-cols-2">
                            <Input.InputRoot>
                                <Input.InputControl id="firstName" defaultValue="Douglas" />
                            </Input.InputRoot>

                            <Input.InputRoot>
                                <Input.InputControl id="lastName" defaultValue="Scaini" />
                            </Input.InputRoot>
                        </div>
                    </div>

                    <div className="grid gap-3 grid-cols-form pt-5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                            Email address
                        </label>
                        <Input.InputRoot>
                            <Input.InputPrefix>
                                <Mail className="h-5 w-5 text-zinc-500" />
                            </Input.InputPrefix>
                            <Input.InputControl id="email" type="email" defaultValue="douglasscaini.dev@gmail.com" />
                        </Input.InputRoot>
                    </div>

                    <div className="grid gap-3 grid-cols-form pt-5">
                        <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
                            Your photo
                            <span className="text-sm mt-0.5 font-normal text-zinc-500 block">
                                This will be displayed on your profile.
                            </span>
                        </label>
                        <FileInput.Root className="flex items-start gap-5">
                            <FileInput.ImagePreview />
                            <FileInput.Trigger />
                            <FileInput.Control />
                        </FileInput.Root>
                    </div>

                    <div className="grid gap-3 grid-cols-form pt-5">
                        <label htmlFor="role" className="text-sm font-medium text-zinc-700">
                            Role
                        </label>
                        <Input.InputRoot>
                            <Input.InputControl id="role" defaultValue="Developer" />
                        </Input.InputRoot>
                    </div>

                    <div className="grid gap-3 grid-cols-form pt-5">
                        <label htmlFor="country" className="text-sm font-medium text-zinc-700">
                            Country
                        </label>

                        <Select placeholder="Select a country...">
                            <SelectItem value="br" text="Brazil" />
                            <SelectItem value="us" text="United States" />
                        </Select>
                    </div>

                    <div className="grid gap-3 grid-cols-form pt-5">
                        <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
                            Timezone
                        </label>
                        <Select placeholder="Select a timezone...">
                            <SelectItem value="utc3" text="América São Paulo (UTC-03:00)" />
                            <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
                        </Select>
                    </div>

                    <div className="grid gap-3 grid-cols-form pt-5">
                        <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
                            Bio
                            <span className="text-sm mt-0.5 font-normal text-zinc-500 block">
                                Write a short introduction.
                            </span>
                        </label>
                        <div className="space-y-3">
                            <div className="grid gap-3 grid-cols-2">
                                <Select placeholder="" defaultValue="normal">
                                    <SelectItem value="normal" text="Normal" />
                                    <SelectItem value="markdown" text="Markdown" />
                                </Select>

                                <div className="flex items-center gap-1">
                                    <button type="button" className="p-2 rounded-md hover:bg-zinc-50">
                                        <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </button>
                                    <button type="button" className="p-2 rounded-md hover:bg-zinc-50">
                                        <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </button>
                                    <button type="button" className="p-2 rounded-md hover:bg-zinc-50">
                                        <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </button>
                                    <button type="button" className="p-2 rounded-md hover:bg-zinc-50">
                                        <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </button>
                                    <button type="button" className="p-2 rounded-md hover:bg-zinc-50">
                                        <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                                    </button>
                                </div>
                            </div>

                            <Textarea id="bio" defaultValue="I'm a Developer..." />
                        </div>
                    </div>

                    <div className="grid gap-3 grid-cols-form pt-5">
                        <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
                            Portfolio projects
                            <span className="text-sm mt-0.5 font-normal text-zinc-500 block">
                                Share a few snippets of your work.
                            </span>
                        </label>
                        <FileInput.Root>
                            <FileInput.Trigger />
                            <FileInput.FileList />
                            <FileInput.Control multiple />
                        </FileInput.Root>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-5">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
