import { experience } from "../../lib/data";

export const metadata = { title: "Experience — Minaal" };

export default function Experience() {
  return (
    <section className="page">
      <h1>Experience</h1>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.title}>
            <time>{e.when}</time>
            <h3>{e.title}</h3>
            <strong>{e.org}</strong>
            <p>{e.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
