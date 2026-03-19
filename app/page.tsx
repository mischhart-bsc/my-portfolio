import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <section className="flex min-h-[80vh] flex-col justify-center">
          <h1 className="text-5xl font-semibold leading-tight">
            Hi, I’m Mischa Hartmann.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            I build modern web experiences with a focus on clean design,
            performance, and user experience.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-full border px-5 py-2 text-sm hover:bg-black hover:text-white transition"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="rounded-full border px-5 py-2 text-sm hover:bg-gray-100 transition"
            >
              About Me
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}