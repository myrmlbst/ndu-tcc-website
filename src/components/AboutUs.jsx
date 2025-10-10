import { TextGenerateEffect } from "./ui/text-generate-effect";

export function AboutUs() {
  const title = `About Us`;
  const subtitle = `Learn about the TCC Community's values and goals`;

  return (
    <div id="aboutus" className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
      <div className="max-w-6xl px-6 pt-20 lg:px-8 lg:pt-44 lg:pl-32">

        <h2 className="text-5xl md:text-4xl lg:text-6xl mb-4 text-black font-bold dark:text-white max-w-4xl">
          <TextGenerateEffect words={title} />
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          <TextGenerateEffect words={subtitle} />
        </p>

      </div>
    </div>
  );
}