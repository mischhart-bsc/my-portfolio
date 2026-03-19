import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio built with Next.js and Tailwind CSS, focusing on minimal design and performance.",
        href: "#",
        tags: ["Next.js", "Tailwind", "Vercel"],
    },
    {
        title: "Blog Platform",
        description:
            "A modern blog platform with dynamic routing, markdown support, and clean UI.",
        href: "#",
        tags: ["React", "Markdown", "CMS"],
    },
    {
        title: "E-Commerce UI",
        description:
            "Frontend design for an e-commerce experience with smooth interactions and responsive layout.",
        href: "#",
        tags: ["UI/UX", "Frontend"],
    },
    {
        title: "Dashboard App",
        description:
            "A data dashboard with charts, filtering, and real-time updates.",
        href: "#",
        tags: ["Dashboard", "Data"],
    },
];

export default function ProjectsPage() {
    return (
        <main className="py-20">
            <Container>
                <h1 className="text-3xl font-semibold">Projects</h1>

                <p className="mt-4 text-gray-600 max-w-xl">
                    A selection of projects I’ve worked on, focusing on design, performance,
                    and user experience.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </Container>
        </main>
    );
}