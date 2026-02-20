'use client';

import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";

interface Testimonial {
    author: {
        name: string;
        handle: string;
        avatar: string;
    };
    text: string;
    href?: string;
}

const testimonials: Testimonial[] = [
    {
        author: {
            name: "Rohit Sharma",
            handle: "Founder, Goalzy",
            avatar: "https://avatar.vercel.sh/rohit",
        },
        text: "The AI implementation in Goalzy is transformative. Appsetz took our vision of an intelligent habit tracker and made it a reality with a seamless, user-centric mobile experience.",
        href: "#",
    },
    {
        author: {
            name: "Ananya Iyer",
            handle: "Operations Head, PocketGrocer",
            avatar: "https://avatar.vercel.sh/ananya",
        },
        text: "PocketGrocer's price comparison engine is a game-changer. The Appsetz team delivered a robust, fast, and highly reliable platform that our users love.",
        href: "#",
    },
    {
        author: {
            name: "Karthik Raja",
            handle: "Co-founder, Slipto",
            avatar: "https://avatar.vercel.sh/karthik",
        },
        text: "Slipto needed to be fast and social. Appsetz built exactly that—the real-time settlement and group chat features work flawlessly. Highly professional execution.",
        href: "#",
    },
    {
        author: {
            name: "Suresh Menon",
            handle: "Director, Sunwin Solar",
            avatar: "https://avatar.vercel.sh/suresh",
        },
        text: "Our new landing page has significantly increased our lead generation. Appsetz understood our corporate needs and delivered a clean, professional, and SEO-optimized site.",
        href: "#",
    },
    {
        author: {
            name: "Dr. Kavita Rao",
            handle: "Clinical Psychologist, Vriddhi",
            avatar: "https://avatar.vercel.sh/kavita",
        },
        text: "I wanted a welcoming and calming online presence for my practice. Appsetz exceeded my expectations with a beautiful, approachable design that my clients find very easy to use.",
        href: "#",
    },
];

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: {
    title: string;
    description: string;
    testimonials: Testimonial[];
    className?: string;
}) {
    return (
        <section className={cn(
            "bg-background text-foreground",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                        {title}
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
                        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`track1-${i}`}
                                    {...testimonial}
                                />
                            ))}
                            {/* Duplicate items to ensure smooth loop if screen is wide */}
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`track1-dup-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        <div aria-hidden="true" className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`track2-${i}`}
                                    {...testimonial}
                                />
                            ))}
                            {/* Duplicate items for track 2 as well */}
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`track2-dup-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
                </div>
            </div>
        </section>
    )
}

const Testimonials = () => {
    return (
        <TestimonialsSection
            title="See What Our Clients Said About Our Work"
            description="Real feedback from real clients who trusted us with their projects."
            testimonials={testimonials}
        />
    );
};

export default Testimonials;
