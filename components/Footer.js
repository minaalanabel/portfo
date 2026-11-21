import { Github, Linkedin } from "lucide-react";
import { me } from "../lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {me.name}</span>
      <span className="social">
        <a href={me.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href={me.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
      </span>
    </footer>
  );
}
