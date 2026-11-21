import Image from "next/image";
import { me } from "../../lib/data";

export const metadata = { title: "About — Minaal" };

export default function About() {
  return (
    <section className="page about">
      <Image src="/profile.jpg" alt="Portrait of Minaal Anabel Rodrigues" width={420} height={520} className="portrait" priority />
      <div>
        <h1>About me</h1>
        {me.bio.map((p, i) => <p key={i}>{p}</p>)}
        <h2>Career goals</h2>
        <p>{me.goals}</p>
        <h2>Interests</h2>
        <ul className="tags">{me.interests.map((t) => <li key={t}>{t}</li>)}</ul>
        <h2>Strengths</h2>
        <ul className="tags">{me.strengths.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </section>
  );
}
