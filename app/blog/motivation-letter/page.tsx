import Container from "@/components/Container";

export default function MotivationLetterPage() {
    return (
        <main className="py-20">
            <Container>
                <article className="max-w-2xl">
                    <h1 className="text-3xl font-semibold">
                        Motivation Letter
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Application for Humanitarian Data Science Intern (OCHA)
                    </p>

                    <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">

                        <p>
                            <strong>
                                Subject: Application for Humanitarian Data Science Intern (Vacancy No. 273706)
                            </strong>
                        </p>

                        <p>Dear Hiring Manager,</p>

                        <p>
                            In today’s interconnected world, data has become one of the most
                            powerful tools for understanding complex global challenges.
                            However, data can be as misleading as it is powerful if interpreted
                            incorrectly or presented without proper context. For this reason,
                            I am particularly motivated to apply for the Humanitarian Data
                            Science Internship at the Office for the Coordination of
                            Humanitarian Affairs (OCHA) in Geneva. The opportunity to
                            contribute analytical skills to humanitarian decision-making
                            strongly aligns with my academic background and personal interest
                            in responsible data analysis.
                        </p>

                        <p>
                            My interest in data science emerged from a simple but memorable
                            experience: a family discussion where arguments were driven more
                            by perception than by evidence. Frustrated by the lack of reliable
                            information guiding the discussion, I became fascinated by the
                            idea that data could provide clarity where opinions often
                            conflict. This curiosity led me to pursue a bachelor’s degree in
                            data science, where I developed a strong foundation in analytical
                            thinking, programming, and statistical reasoning.
                        </p>

                        <p>
                            During my studies, I worked on projects involving data analysis
                            and pattern recognition, including a project analysing seismic
                            earthquake data to identify patterns related to tsunami risk
                            across different regions of the world. Through this experience, I
                            discovered how computational tools and relatively simple models
                            can reveal meaningful insights hidden within large datasets.
                            Alongside technical skills in Python, NumPy, and data analysis
                            workflows, I have also developed a strong interest in
                            communicating insights clearly through data visualizations and
                            structured analysis.
                        </p>

                        <p>
                            Beyond technical capabilities, I bring curiosity, responsibility,
                            and a strong commitment to ethical data practices. I am
                            particularly inspired by the role that organizations like OCHA
                            play in coordinating humanitarian responses and supporting
                            evidence-based decision making in complex crises. Contributing to
                            work that directly supports humanitarian action would be both
                            professionally meaningful and personally motivating for me.
                        </p>

                        <p>
                            I would welcome the opportunity to further develop my analytical
                            and research skills while contributing to the important work
                            carried out by OCHA. Thank you for considering my application. I
                            look forward to the possibility of discussing how my background
                            and enthusiasm for data-driven humanitarian analysis could support
                            your team.
                        </p>

                        <p>Yours sincerely,</p>

                        <p>Mischa Hartmann</p>

                    </div>
                </article>
            </Container>
        </main>
    );
}