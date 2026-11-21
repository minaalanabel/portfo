"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { projects } from "../lib/data";

// One glossy shape per project. `p` is spread onto each SVG element, so the same shape
// is drawn twice: once with the colour gradient, once with a white gloss on top.
const shapes = [
  { name: "heart", colors: ["#ffb347", "#ff7a00", "#c24a00"], draw: (p) => <path {...p} d="M50 90C8 60 4 30 27 19c13-6 23 3 23 12 0-9 10-18 23-12 23 11 19 41-23 71z" /> },
  { name: "flower", colors: ["#ffe36b", "#f2b705", "#a87400"], draw: (p) => (
    <g {...p}>{[0, 72, 144, 216, 288].map((a) => <circle key={a} cx={50 + 27 * Math.sin((a * Math.PI) / 180)} cy={50 - 27 * Math.cos((a * Math.PI) / 180)} r="18" />)}<circle cx="50" cy="50" r="17" /></g>) },
  { name: "squiggle", colors: ["#58c4ff", "#0b7fc1", "#07456b"], stroke: true, draw: (p) => <path {...p} d="M28 18 72 30 28 50 72 68 36 84" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" /> },
  { name: "clover", colors: ["#4be08f", "#0e9a4f", "#08592d"], draw: (p) => (
    <g {...p}>{[[34, 34], [66, 34], [34, 66], [66, 66]].map(([x, y]) => <circle key={x + "" + y} cx={x} cy={y} r="22" />)}</g>) },
];

function Shape({ s, id }) {
  const base = s.stroke ? { fill: "none", stroke: `url(#c-${id})` } : { fill: `url(#c-${id})` };
  const gloss = s.stroke ? { fill: "none", stroke: `url(#g-${id})` } : { fill: `url(#g-${id})` };
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={`c-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={s.colors[0]} /><stop offset=".55" stopColor={s.colors[1]} /><stop offset="1" stopColor={s.colors[2]} />
        </linearGradient>
        <radialGradient id={`g-${id}`} cx=".3" cy=".22" r=".6">
          <stop offset="0" stopColor="#fff" stopOpacity=".85" /><stop offset=".45" stopColor="#fff" stopOpacity=".12" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {s.draw(base)}
      {s.draw(gloss)}
    </svg>
  );
}

export default function Objects() {
  const [active, setActive] = useState(null);
  const p = projects.find((x) => x.id === active);
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);
  return (
    <>
      {projects.map((proj, i) => (
        <button key={proj.id} className="gummy" style={{ "--i": i }} onClick={() => setActive(proj.id)}
          aria-label={`Open project: ${proj.name}`} aria-haspopup="dialog">
          <Shape s={shapes[i % shapes.length]} id={proj.id} />
        </button>
      ))}
      {p && (
        <div className="scrim" onClick={() => setActive(null)}>
          <section className="sheet" role="dialog" aria-modal="true" aria-label={p.name} onClick={(e) => e.stopPropagation()}
            style={{ "--c": shapes[projects.indexOf(p) % shapes.length].colors[1] }}>
            <button className="icon-btn close" onClick={() => setActive(null)} aria-label="Close"><X size={18} /></button>
            <h2>{p.name}</h2>
            <p>{p.desc}</p>
            <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            <a className="btn solid" href={p.repo} target="_blank" rel="noreferrer">View on GitHub</a>
          </section>
        </div>
      )}
    </>
  );
}
