"use client";

import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal, BiX } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
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

export default function ProjectModal({
  isOpen,
  onClose,
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
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="sticky top-2 float-right mr-2 mt-2 p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition z-20 shadow-lg"
                aria-label="Close modal"
              >
                <BiX className="text-2xl text-gray-700 dark:text-gray-300" />
              </button>

              {/* Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-100 dark:bg-gray-800">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover object-top rounded-t-xl"
                  quality={95}
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {title}
                </h2>

                {/* Icons/Tech Stack */}
                <div className="mb-6">
                  <p className="font-bold text-gray-600 dark:text-gray-400 mb-3">
                    Made with:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {icons.map((icon, iconIndex) => (
                      <Icon key={iconIndex} icon={icon} className="text-3xl" />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {urlLink && (
                    <a
                      href={urlLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-[#111827] text-white py-2 px-4 rounded-lg hover:scale-105 transition"
                    >
                      <BiLinkExternal className="mr-1" /> Live
                    </a>
                  )}

                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-[#111827] text-white py-2 px-4 rounded-lg hover:scale-105 transition"
                    >
                      <BiLinkExternal className="mr-1" /> Website
                    </a>
                  )}

                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center border border-[#111827] py-2 px-4 rounded-lg text-[#111827] hover:scale-105 transition dark:border-white dark:text-white dark:border-opacity-40"
                    >
                      <AiFillGithub className="mr-1 opacity-70" />
                      <span className="opacity-70">GitHub</span>
                    </a>
                  )}

                  {appStoreLink && (
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-[#111827] text-white py-2 px-4 rounded-lg hover:scale-105 transition"
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
                      className="flex items-center bg-[#111827] text-white py-2 px-4 rounded-lg hover:scale-105 transition"
                    >
                      <Icon icon="logos:google-play-icon" className="mr-1 text-xl" />
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
