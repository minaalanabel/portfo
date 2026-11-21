import { Github, ExternalLink } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ name, desc, tech, repo, demo }) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{desc}</p>
      <ul className="tags">{tech.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="row">
        <Button href={repo} external variant="ghost"><Github size={16} /> Code</Button>
        {demo && <Button href={demo} external variant="ghost"><ExternalLink size={16} /> Live demo</Button>}
      </div>
    </article>
  );
}
