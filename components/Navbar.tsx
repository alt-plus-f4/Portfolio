import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
    return (
        <>
        <div className="head-nav">
            <div className="mx-10">
                <h1>Logo</h1>
            </div>
            
            <div className="center-nav">
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