"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";
import ProjectModal from "./project-modal";
import { useProjectModalContext } from "@/context/project-modal-context";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: StaticImageData;
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
};

export default function Project({
  title,
  description,
  tags,
  icons,
  imageUrl,
  githubLink,
  demoLink,
  urlLink,
  appStoreLink,
  playStoreLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setIsProjectModalOpen } = useProjectModalContext();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsProjectModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsProjectModalOpen(false);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section
          onClick={handleOpenModal}
          className="bg-gray-100 max-w-[75rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer"
        >
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[45%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <ul className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
            <p className="font-bold text-gray-500 dark:text-white/70">
              Made with:{" "}
            </p>
            {icons.map((icon, iconIndex) => (
              <Icon key={iconIndex} icon={icon} className="mr-3 text-2xl" />
            ))}
          </ul>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
            {description}
          </p>
          <div className="flex">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-lg hover:scale-105"
              >
                <BiLinkExternal className="mr-1" /> Live
              </a>
            )}

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-lg hover:scale-105"
              >
                <BiLinkExternal className="mr-1" /> Website
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-[#111827] py-2 px-4 rounded-lg mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
              >
                <AiFillGithub className="mr-1 opacity-70" />{" "}
                <span className="opacity-70">GitHub</span>
              </a>
            )}

            {appStoreLink && (
              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-lg hover:scale-105"
              >
                <Icon icon="ic:baseline-apple" className="mr-1 text-xl" />
                App Store
              </a>
            )}

            {playStoreLink && (
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-lg hover:scale-105"
              >
                <Icon icon="logos:google-play-icon" className="mr-1 text-xl" />
                Play Store
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden lg:block top-8 right-0 w-[52%] h-[calc(100%-4rem)] rounded shadow-2xl
          transition
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          object-cover object-top
          "
        />
      </section>
    </motion.div>

    <ProjectModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title={title}
      description={description}
      tags={tags}
      icons={icons}
      imageUrl={imageUrl}
      githubLink={githubLink}
      demoLink={demoLink}
      urlLink={urlLink}
      appStoreLink={appStoreLink}
      playStoreLink={playStoreLink}
    />
    </>
  );
}
