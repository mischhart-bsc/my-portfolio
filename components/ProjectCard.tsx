import Link from "next/link";

type ProjectCardProps = {
    title: string;
    description: string;
    href?: string;
    tags?: string[];
};

export default function ProjectCard({
    title,
    description,
    href = "#",
    tags = [],
}: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="group block rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-md"
        >
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {description}
            </p>

            {tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs text-gray-500 border rounded-full px-2 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="mt-6 text-sm text-gray-500 group-hover:text-black transition">
                View Project →
            </div>
        </Link>
    );
}