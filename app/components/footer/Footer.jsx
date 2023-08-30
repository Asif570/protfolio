"use client";
import Link from "next/link";
import { AiFillLinkedin,AiFillGithub,AiOutlineWhatsApp } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#161B58]">
      <div className="container mx-auto px-5 py-8 ">
        <div className="flex items-center flex-col gap-5">
          <div className="  capitalize">Find me on social media</div>
          <div className="flex gap-5 items-center max-w-400 justify-evenly">
            <Link href={''}>
              <AiFillLinkedin size={36} className="hover:scale-125 transition-all duration-300"/>
            </Link>
            <Link href={''}>
              <AiFillGithub size={36} className="hover:scale-125 transition-all duration-300"/>
            </Link>
            <Link href={''}>
              <AiOutlineWhatsApp size={36} className="hover:scale-125 transition-all duration-300" />
            </Link>
          </div>
          <div className="text-sm">All Rights Reserved © 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
