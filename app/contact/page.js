import { Github, Linkedin } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import Button from "../../components/Button";
import { me } from "../../lib/data";

export const metadata = { title: "Contact — Minaal" };

export default function Contact() {
  return (
    <section className="page narrow">
      <h1>Say hello</h1>
      <p className="sub">Recruiters, mentors and hackathon teams are all welcome.</p>
      <ContactForm />
      <div className="row">
        <Button href={me.github} external variant="ghost"><Github size={16} /> GitHub</Button>
        <Button href={me.linkedin} external variant="ghost"><Linkedin size={16} /> LinkedIn</Button>
      </div>
    </section>
  );
}
