import { achievements } from "../../lib/data";

export const metadata = { title: "Achievements — Minaal" };

export default function Achievements() {
  return (
    <section className="page">
      <h1>Achievements</h1>
      <div className="grid">
        {achievements.map((a) => (
          <article className="card" key={a.title}>
            <ul className="tags"><li>{a.kind}</li></ul>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
