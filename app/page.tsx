import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="head-first-page">
				<h1>My Projects</h1>
				<p>18 YO student in the Technological school "Electronc Systems". Here, you can explore my projects and learn more about my work.</p>
				
				<Button variant={'poligon'}> 
					<Link href="/projects">Projects</Link>
				</Button>

			</div>

			<div className="head-projects-page">
				<div className="project-container">
					<Image src="/project1.jpg" alt="Project 1" width={300} height={300} />
					<div className="project-description">
						<h1>Project 1</h1>
						<p>Project 1 description</p>
					</div>
				</div>
			</div>
		</>
	);
}
