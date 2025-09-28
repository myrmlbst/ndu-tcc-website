import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="relative w-full bg-white dark:bg-neutral-950">
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl p-8 border border-gray-200 bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)] dark:border-neutral-800 dark:bg-neutral-900">
          
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-bold text-gray-900 dark:text-white">NDU/TCC</span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md">
                NDU/TCC empowers students to transform their potential into real life skills by making technology
                education more accessible, collaborative, and impactful for our community.
              </p>
            </div>
            
            <div className="flex flex-col gap-8 lg:gap-16 mt-10">
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/nduthecomputerclub/"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5"/>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-computer-club-ndu/"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5"/>
                </a>
                <a
                  href="https://github.com/nduthecomputerclub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5"/>
                </a>
                <a
                  href="https://linktr.ee/nduthecomputerclub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-800 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-white border border-gray-200 dark:border-neutral-700"
                  aria-label="Whatsapp"
                >
                  <FaWhatsapp className="h-5 w-5"/>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-12 border-t border-gray-100 pt-6 dark:border-neutral-800">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-col">
              <div className="flex space-x-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  © 2025 NDU/TCC. All rights reserved.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
