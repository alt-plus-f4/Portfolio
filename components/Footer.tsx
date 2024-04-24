"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <>
        <div className="head-footer">
            <Link href="https://github.com/alt-plus-f4"><FaGithub /></Link>
            <Link href="https://www.linkedin.com/in/valentin-assenov/"><FaLinkedin /></Link>
            <Link href="https://www.instagram.com/valhalkata/"><GrInstagram /></Link>
        </div>
        </>
    );
}
 
export default Footer;