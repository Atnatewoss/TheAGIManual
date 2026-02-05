import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-4xl font-bold mb-4">The AGI Manual</h1>
            <p className="text-xl text-muted-foreground mb-8">
                A comprehensive guide to Artificial General Intelligence research and engineering.
            </p>
            <Link
                href="/docs"
                className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
                Read the Docs
            </Link>
        </main>
    );
}
