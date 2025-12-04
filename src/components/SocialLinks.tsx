

"use client";

import Link from "next/link";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import React from "react";

const SocialLinks = function() {
  const links = [
    {
      href: "https://github.com",
      icon: <IoLogoGithub />,
      color: "hover:text-gray-800", // GitHub black
    },
    {
      href: "https://linkedin.com/in/abdulhamid-abdulsalam-ba3634331",
      icon: <FaLinkedin />,
      color: "hover:text-blue-600", // LinkedIn blue
    },
    {
      href: "https://x.com/Abdul_Lanre001",
      icon: <BsTwitterX />,
      color: "hover:text-black", // X black
    },
    {
      href: "https://instagram.com/devlifediariez",
      icon: <IoLogoInstagram />,
      color: "hover:text-pink-500", // Insta pink
    },
    {
      href: "https://tiktok.com/@devlifediaries",
      icon: <FaTiktok />,
      color: "hover:text-gray-900", // TikTok black
    },
  ];

  return (
    <div className="flex gap-4 justify-center items-center mt-6">
      {links.map((link, i) => (
        <Link key={i} href={link.href} target="_blank">
          <div
            className={`p-2 text-lg md:text-2xl lg:text-3xl cursor-pointer transition-colors duration-300 ${link.color}`}
          >
            {link.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default React.memo(SocialLinks);