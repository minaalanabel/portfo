import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/data";

export const metadata = { title: "Projects — Minaal" };

export default function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <p className="sub">Pulled from my GitHub. Each one taught me something new.</p>
      <div className="grid">{projects.map((p) => <ProjectCard key={p.id} {...p} />)}</div>
    </section>
  );
}
