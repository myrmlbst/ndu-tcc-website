import React from 'react';
// import { cn } from '../lib/utils';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="relative w-full">
      
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl p-8 bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950">
          
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            
            <div className="flex-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 dark:bg-gray-200">
                  <div className="h-4 w-4 rounded-sm bg-gray-600 dark:bg-gray-400"></div>
                </div>
                <span className="text-xl font-bold text-black dark:text-white">NDU/TCC</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-neutral-400 max-w-md">
                NDU/TCC empowers students to transform their potential into real life skills by making technology
                education more accessible, collaborative, and impactful for our community.
              </p>
            </div>
            
            <div className="flex flex-col gap-8 lg:gap-16 mt-10">
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/nduthecomputerclub/"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5"/>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-computer-club-ndu/"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5"/>
                </a>
                <a
                  href="https://github.com/nduthecomputerclub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5"/>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  aria-label="Whatsapp"
                >
                  <FaWhatsapp className="h-5 w-5"/>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-700">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-col">
              <div className="flex space-x-6">
                {/* Copyright */}
                <p className="text-xs text-gray-500 dark:text-gray-500">
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
