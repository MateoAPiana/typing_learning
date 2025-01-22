import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Typing Learning</h1>
        <h3>Why do you need to learn typing?</h3>
        <ol className="max-w-xl list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Learning typing allows you to type <b>faster</b> and with <b>fewer errors</b>, boosting your productivity in tasks that involve writing.
          </li>
          <li>Proper typing technique can reduce hand <b>fatigue</b> and <b>improve posture</b>, helping to avoid physical discomfort over the long term.</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/register"
            rel="noopener noreferrer"
          >
            Get started
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/login"
            rel="noopener noreferrer"
          >
            Welcome again
          </Link>
        </div>
      </main>
    </div>
  );
}
