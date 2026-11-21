import Objects from "../components/Objects";
import { me, projects } from "../lib/data";

export default function Home() {
  return (
    <section className="home">
      <h1 className="stage" aria-label="Minaal tech">
        <span className="word">minaal</span>
        <Objects />
        <span className="word">tech</span>
      </h1>
      <div className="foot">
        <p>I'm a CSE student who loves movies and tech. Along the way I've built these {projects.length} projects. Click one to take a look.</p>
        <nav aria-label="Social">
          <a href={`mailto:${me.email}`}>EMAIL</a>
          <a href={me.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href={me.github} target="_blank" rel="noreferrer">GITHUB</a>
        </nav>
      </div>
    </section>
  );
}
