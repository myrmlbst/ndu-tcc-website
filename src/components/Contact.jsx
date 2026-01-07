import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

export function Contact() {
  const title = `Contact`;
  const subtitle = `Let’s build something together. Reach out to out team!`;

  return (
    <section id="contact" className="relative w-full min-h-screen overflow-hidden flex items-center dark:text-white scroll-mt-24"> {/* to make bg black: ```bg-neutral-950``` */}
      <div className="pointer-events-none absolute inset-0 -z-30 hidden dark:block bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950" />
      
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/4 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/30 dark:bg-pink-400/20 blur-3xl animate-first" />
        <div className="absolute right-[15%] top-[10%] h-64 w-64 rounded-full bg-fuchsia-500/20 dark:bg-fuchsia-400/20 blur-3xl animate-second" />
        <div className="absolute left-[10%] bottom-[5%] h-80 w-80 rounded-full bg-violet-500/20 dark:bg-violet-400/20 blur-3xl animate-third" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 dark:bg-rose-400/10 blur-3xl animate-fifth" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 w-full">
        <div className="text-left mb-10 max-w-4xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white mb-6">
            <TextGenerateEffect words={title} />
          </h2>
          <p className="text-lg text-gray-600 md:text-xl dark:text-gray-300">
            <TextGenerateEffect words={subtitle} />
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div
            className="rounded-3xl p-8 border-2 border-transparent bg-white/60 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200/40 dark:hover:border-blue-400/20 hover:bg-white/80 dark:hover:bg-white/10"
            style={{ willChange: "transform" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a message</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              For partnerships, events, or collaborations, email us and we’ll get back to you.
            </p>

            <a
              href="mailto:nduthecomputerclub@gmail.com"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors"
            >
              Email NDU/TCC
            </a>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-white/70 px-5 py-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">General</div>
                <div className="mt-1 text-sm font-medium text-gray-900 dark:text-white">nduthecomputerclub@gmail.com</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/70 px-5 py-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Socials</div>
                <div className="mt-1 text-sm font-medium text-gray-900 dark:text-white">@nduthecomputerclub</div>
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl p-8 border-2 border-transparent bg-white/60 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200/40 dark:hover:border-blue-400/20 hover:bg-white/80 dark:hover:bg-white/10"
            style={{ willChange: "transform" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Find us online</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Follow updates, events, and resources on our official channels.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/nduthecomputerclub/"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-computer-club-ndu/"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/nduthecomputerclub"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linktr.ee/nduthecomputerclub"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                aria-label="Whatsapp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-6 dark:border-neutral-800 dark:bg-neutral-900/40">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Want to sponsor an event?</div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                We’re open to collaborations with companies and organizations that support student growth.
              </p>
              <a
                href="mailto:nduthecomputerclub@gmail.com?subject=Sponsorship%20Opportunity"
                className="mt-4 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900 transition-colors"
              >
                Sponsor / Partner
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
