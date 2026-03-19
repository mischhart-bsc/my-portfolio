"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Container from "./Container";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/other", label: "Other" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="border-b">
            <Container>
                <nav className="flex items-center justify-between py-6">

                    <div className="flex gap-6 text-sm">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "transition-opacity hover:opacity-60",
                                    pathname === link.href
                                        ? "text-black"
                                        : "text-gray-500"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </Container>
        </header>
    );
}