import Container from "@/components/Container";

const timeline = [
    {
        title: "FHNW – Data Science & AI",
        period: "2025 – Now",
        description:
            "Currently studying Data Science & AI with focus on machine learning, databases, and statistical modeling.",
    },
    {
        title: "ETH Zürich – Mathematics",
        period: "2023 – 2025",
        description:
            "Strong foundation in mathematics including analysis, algebra, and algorithmic thinking.",
    },
    {
        title: "Kantonsschule Solothurn",
        period: "2018 – 2022",
        description:
            "Graduated with a focus on mathematics and physics.",
    },
];

export default function AboutPage() {
    return (
        <main className="py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT SIDE – IMAGE */}
                    <div className="relative">
                        <div className="md:sticky md:top-24">
                            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border bg-gray-100">
                                {/* Replace with your image */}
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE – TIMELINE */}
                    <div className="relative">
                        <div className="absolute left-2 top-0 h-full w-px bg-gray-200" />

                        <div className="space-y-16">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-8">

                                    {/* Dot */}
                                    <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-black" />

                                    <p className="text-sm text-gray-500">{item.period}</p>

                                    <h3 className="mt-1 text-xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </main>
    );
}