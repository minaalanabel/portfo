import { skills } from "../../lib/data";

export const metadata = { title: "Skills — Minaal" };

export default function Skills() {
  return (
    <section className="page">
      <h1>Skills and tools</h1>
      <div className="grid">
        {Object.entries(skills).map(([group, items]) => (
          <article className="card" key={group}>
            <h3>{group}</h3>
            <ul className="tags">{items.map((s) => <li key={s}>{s}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
