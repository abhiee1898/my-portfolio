"use client";

export function Hero() {
  return (
    <div className="h-screen relative w-full bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl lg:text-7xl sm:text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Hey, I&apos;m Abhishek Yadav
        </h1>
        <h1
          className="mt-6 lg:text-3xl text-xl sm:text-2xl md:text-2xl font-bold bg-clip-text max-w-2xl mx-auto text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          System Engineer @ Infosys
        </h1>

        <div className="relative mt-8 md:mt-8">
          <a href="/resume.pdf" download="Abhishek_Yadav_Resume.pdf">
            <button
              className="px-6 py-3 bg-transparent border border-zinc-500 font-semibold hover:border-emerald-400 shadow-sm text-emerald-400 rounded-md"
            >
              Download My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
