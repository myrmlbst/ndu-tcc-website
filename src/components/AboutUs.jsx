import { TextGenerateEffect } from "./ui/text-generate-effect";

export function AboutUs() {
  const title = `About Us`;
  const subtitle = `Empowering the next generation of tech innovators and leaders`;

  const stats = [
    { value: "50+", label: "Events & Workshops" },
    { value: "300+", label: "Community Members" },
    { value: "3+", label: "Years of Excellence" }
  ];

  return (
    <section id="aboutus" className="relative w-full min-h-screen overflow-hidden flex items-center dark:text-white scroll-mt-24">
      {/* Background elements - matching Hero component */}
      <div className="pointer-events-none absolute inset-0 -z-30 hidden dark:block bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/4 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/30 dark:bg-pink-400/20 blur-3xl animate-first" />
        <div className="absolute right-[15%] top-[10%] h-64 w-64 rounded-full bg-fuchsia-500/20 dark:bg-fuchsia-400/20 blur-3xl animate-second" />
        <div className="absolute left-[10%] bottom-[5%] h-80 w-80 rounded-full bg-violet-500/20 dark:bg-violet-400/20 blur-3xl animate-third" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 dark:bg-rose-400/10 blur-3xl animate-fifth" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 w-full">
        {/* Hero Section */}
        <div className="text-left mb-20 max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white mb-6">
            <TextGenerateEffect words={title} />
          </h1>
          <p className="text-lg text-gray-600 md:text-xl dark:text-gray-300">
            <TextGenerateEffect words={subtitle} className="" />
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="rounded-3xl p-8 border-2 border-transparent bg-white/60 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200/40 dark:hover:border-blue-400/20 hover:bg-white/80 dark:hover:bg-white/10"
              style={{ willChange: 'transform' }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To provide a dynamic platform for students to explore, learn, and excel in technology. 
                We're committed to making tech education accessible and fostering a community where 
                innovation thrives through hands-on experiences and collaborative learning.
              </p>
            </div>
            <div 
              className="rounded-3xl p-8 border-2 border-transparent bg-white/60 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200/40 dark:hover:border-blue-400/20 hover:bg-white/80 dark:hover:bg-white/10"
              style={{ willChange: 'transform' }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be the leading student tech community that bridges the gap between academic learning 
                and real-world technology applications, empowering the next generation of tech leaders 
                and innovators.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div className="group rounded-2xl p-6 border-2 border-transparent bg-white/60 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-white/5 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200/40 dark:hover:border-blue-400/20 hover:bg-white/80 dark:hover:bg-white/10" style={{ willChange: 'transform' }}>
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-300 mb-2">{stat.value}</div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Who We Are</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                NDU/TCC is a student-run organization that provides a platform for students to learn about technology 
                and its applications in real life. We believe that technology should be accessible to everyone and 
                that it should be used to make a positive impact on society.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our community brings together passionate individuals who are eager to learn, share knowledge, and 
                collaborate on innovative projects that make a difference.
              </p>
            </div>
            <div 
              className="rounded-2xl p-8 border-2 border-transparent bg-white/60 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200/40 dark:hover:border-blue-400/20 hover:bg-white/80 dark:hover:bg-white/10" 
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What We Do</h3>
              <ul className="space-y-3 pl-1">
                {[
                  "Organize workshops and hackathons",
                  "Host tech talks and networking events",
                  "Provide mentorship and learning resources",
                  "Work on real-world projects",
                  "Connect students with industry professionals"
                ].map((item, index) => (
                  <li key={index} className="flex items-baseline group transition-all duration-200 hover:pl-1">
                    <span className="text-blue-400 dark:text-blue-300 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200">•</span>
                    <span className="text-gray-700 dark:text-gray-300 transition-all duration-200 group-hover:text-blue-500 dark:group-hover:text-blue-300 group-hover:italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}