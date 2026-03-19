import Container from "@/components/Container";
import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="py-20">
            <Container>
                <h1 className="text-3xl font-semibold">Blog</h1>

                <p className="mt-4 text-gray-600 max-w-xl">
                    Thoughts, writing, and ideas around data science, technology, and more.
                </p>

                <div className="mt-12 space-y-6">
                    <Link
                        href="/blog/motivation-letter"
                        className="block border rounded-xl p-6 hover:shadow-sm transition"
                    >
                        <h2 className="text-xl font-semibold">
                            Motivation Letter
                        </h2>

                        <p className="mt-2 text-sm text-gray-600">
                            Application for Humanitarian Data Science Intern (OCHA)
                        </p>
                    </Link>
                </div>
            </Container>
        </main>
    );
}