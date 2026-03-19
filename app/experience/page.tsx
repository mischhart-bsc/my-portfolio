import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

const skills = [
    {
        title: "Python",
        description:
            "Extensive experience using Python for data analysis, scripting, and building scalable applications.",
        href: "#",
        tags: ["Data Analysis", "Automation", "Backend"],
    },
    {
        title: "C++",
        description:
            "Strong foundation in C++ for high-performance applications and understanding of low-level systems.",
        href: "#",
        tags: ["Performance", "Algorithms", "Systems"],
    },
    {
        title: "R",
        description:
            "Applied R for statistical analysis, data modeling, and research-focused workflows.",
        href: "#",
        tags: ["Statistics", "Data Science"],
    },
    {
        title: "SQL",
        description:
            "Proficient in designing queries, managing relational databases, and optimizing data retrieval.",
        href: "#",
        tags: ["Databases", "Query Optimization"],
    },
    {
        title: "MongoDB",
        description:
            "Experience working with NoSQL databases, schema design, and scalable data storage solutions.",
        href: "#",
        tags: ["NoSQL", "Backend"],
    },
    {
        title: "Neo4j",
        description:
            "Worked with graph databases to model relationships and perform complex graph queries.",
        href: "#",
        tags: ["Graph DB", "Cypher"],
    },
    {
        title: "Data Visualization",
        description:
            "Creating clear and impactful visualizations to communicate insights effectively.",
        href: "#",
        tags: ["Charts", "Dashboards", "UX"],
    },
    {
        title: "Website Building",
        description:
            "Building modern, responsive websites using frameworks like React and Next.js with a focus on UX.",
        href: "#",
        tags: ["Frontend", "Next.js", "Design"],
    },
];

export default function SkillsPage() {
    return (
        <main className="py-20">
            <Container>
                <h1 className="text-3xl font-semibold">Skills & Experience</h1>

                <p className="mt-4 text-gray-600 max-w-xl">
                    A summary of my technical skills and experience across programming,
                    data analysis, and modern web development.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {skills.map((skill) => (
                        <ProjectCard
                            key={skill.title}
                            title={skill.title}
                            description={skill.description}
                            href={skill.href}
                            tags={skill.tags}
                        />
                    ))}
                </div>
            </Container>
        </main>
    );
}