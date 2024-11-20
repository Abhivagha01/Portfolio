import { socialLinks } from "@/lib/Constant";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Intro = () => {
  return (
    <div className="flex flex-col gap-4 text-gray-600 dark:text-neutral-400">
      <div className="flex items-center gap-4">
        <img
          src="/Abhishek.jpeg"
          className="rounded-full"
          height={120}
          width={120}
          alt="logo"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">
            I’m Abhishek vaghasiya. I live in India, where I build the Software
            Solutions.
          </h1>
          <span>Web Developer</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                {<link.icon height={20} width={20} />}
              </a>
            ))}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <hr />
      <p className="flex flex-col gap-4 text-justify">
        <div>
          <ul className="pl-5 list-disc">
            <li className="text-sm">
              From a young age, I've been driven by curiosity, constantly
              seeking to understand the whats, whys, and hows of everything
              around me.In the world of technology, my journey began with
              programming and web development.
            </li>
            <br />
            <li className="text-sm">
              AThroughout my entire career, I have honored my skills as a
              frontend developer, specializing in various web domains like
              trading, e-commerce, business-related platforms, and marketing
              websites. Starting my career at Anv Tech, I quickly adapted to new
              frameworks and languages.
            </li>
            <br />
            <li className="text-sm">
              Currently, I am applying my expertise at Editsh Technology, where
              I lead the development of a quiz web application. I am also
              responsible for designing and developing data pipelines and the
              admin panel for an innovative sports system. My journey reflects
              my dedication to continuous learning, my adaptability to diverse
              technical environments, and my commitment to excellence.
            </li>
            <br />
            <li className="text-sm">
              With every project, I strive to push the boundaries of what's
              possible, combining my technical skills with a creative approach
              to problem-solving. My goal is to continue making impactful
              contributions to the tech world, leveraging my experience and
              knowledge to drive innovation and progress.
            </li>
          </ul>
        </div>
      </p>
    </div>
  );
};

export default Intro;
