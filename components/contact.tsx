"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { uploadToCloudflare } from "@/actions/uploadToCloudflare";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ian.shade@outlook.com">
          ian.shade@outlook.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        encType="multipart/form-data"
        action={async (formData) => {
          const asset = formData.get("asset");

          if (asset && typeof asset !== "string") {
            const { data: upload, error: uploadError } =
              await uploadToCloudflare(formData);

            if (uploadError) {
              toast.error(uploadError);
            } else if (upload?.url) {
              formData.set("assetUrl", upload.url);
            }
          }

          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="flex flex-col gap-2 rounded-lg border border-dashed border-gray-300 p-4 text-left dark:border-white/30">
          <label className="text-sm font-medium text-gray-700 dark:text-white/80">
            Optional attachment for Cloudflare upload
          </label>
          <input
            className="text-sm"
            name="asset"
            type="file"
            accept="image/*"
          />
          <p className="text-xs text-gray-600 dark:text-white/70">
            Images are uploaded to Cloudflare Images and the resulting link is
            included in your message.
          </p>
        </div>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
