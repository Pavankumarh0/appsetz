import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    return (
        <div className={cn(
            "relative flex md:w-[400px] w-[300px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl border p-6 hover:shadow-md transition-all duration-300 bg-white",
            className
        )}>
            <blockquote className="mt-2 text-sm text-gray-600 leading-relaxed">
                "{text}"
            </blockquote>
            <div className="flex flex-row items-center gap-2 mt-6">

                <div className="flex flex-col">
                    <span className="text-sm font-medium dark:text-white">{author.name}</span>
                    <p className="text-xs font-medium dark:text-white/40 text-gray-500">{author.handle}</p>
                </div>
            </div>
        </div>
    )
}
