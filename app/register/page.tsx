export default async function login() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-0 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="w-full text-center text-5xl">Register</h1>
        <form className="flex gap-4 items-center flex-col" action="post">
          <div className="relative">
            <label className="relative left-1" htmlFor="nameLogin">Name:</label>
            <input
              type="text"
              placeholder="Joe Smith"
              className="outline-none bg-transparent rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              name="name"
              id="nameLogin" />
          </div>
          <div className="relative">
            <label className="relative left-1" htmlFor="passwordLogin">Password:</label>
            <input
              type="password"
              placeholder="JoeSmith123"
              className="outline-none bg-transparent rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              name="password"
              id="passwordLogin" />
          </div>
          <div className="relative">
            <label className="relative left-1" htmlFor="confirmPassword">Confirm your password:</label>
            <input
              type="password"
              placeholder="JoeSmith123"
              className="outline-none bg-transparent rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              name="password"
              id="confirmPassword" />
          </div>
          <input
            type="submit"
            value="Create your account"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            name="password"
            id="passwordLogin" />
        </form>
      </main>
    </div>
  )
}