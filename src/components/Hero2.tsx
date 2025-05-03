"use client";

export function Hero2() {
  return (
    <div className="min-h-screen relative w-full bg-gray-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-between p-4">
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-start mb-8 lg:mb-0 h-full">
          <h1 className="lg:px-0 sm:px-10 md:px-10 mt-32 lg:mt-24 lg:text-5xl md:text-5xl sm:text-5xl text-3xl font-semibold bg-clip-text text-transparent text-white text-center lg:text-left lg:ml-48">
            Let Me <span className="text-emerald-400">Introduce</span> Myself
          </h1>
          <p className="lg:px-0 px-4 sm:px-10 md:px-10 mt-16 lg:mt-14 lg:text-lg md:text-lg sm:text-lg text-base lg:text-justify font-sans bg-clip-text text-transparent text-white text-justify lg:ml-24">
            I&apos;m a System Engineer @ <span className="text-purple-400">Infosys</span> with a strong foundation in database administration and a growing passion for software development.
            <br /><br />
            Currently working as an <span className="text-purple-400">Oracle Database Administrator</span>, I ensure data integrity, performance optimization, and system reliability in enterprise environments. Alongside my core role, I have developed solid skills in <span className="text-purple-400">Python scripting</span> and <span className="text-purple-400">Linux system operations</span>, enabling me to automate tasks and streamline backend processes effectively.
            <br /><br />
            I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then feel free to <span className="text-purple-400">contact me</span>.
          </p>
        </div>

        <div className="w-full lg:mt-40 lg:w-1/3 flex items-center justify-center h-full">
          <img
            src="/projects/myimg.png"
            alt="Your Image"
            className="rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[330px] lg:h-[330px] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="relative z-10 flex justify-center mt-12 lg:mt-12 mb-16 lg:mb-16">
        <a href="https://linktr.ee/rao.abhi" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 text-emerald-400 border border-zinc-400 font-semibold rounded-md shadow-sm bg-transparent hover:border-emerald-400">
            Connect with Me
          </button>
        </a>
      </div>
    </div>
  );
}
