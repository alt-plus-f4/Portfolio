"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className="head-nav">
            <div className="mx-10">
                <h1>Logo</h1>
            </div>
            
            <button onClick={toggleMenu} className={`burger-menu ${isOpen ? 'active' : ''}`}>
                <FaBars />
            </button>

            <div className={`center-nav ${isOpen ? 'active' : ''}`}>
                <Link href="/">Home</Link>
                <Link href="/projects">Personal Projects</Link>
                <Link href="/accomplishments">Accomplishments</Link>
            </div>
            
            <div className="right-nav mx-10">
                <Link href="https://github.com/alt-plus-f4"><FaGithub /></Link>
                <Link href="https://www.linkedin.com/in/valentin-assenov/"><FaLinkedin /></Link>
                <Link href="https://www.instagram.com/valhalkata/"><GrInstagram /></Link>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;