"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [["About", "/about"], ["Projects", "/projects"],  ["Skills", "/skills"], ["Contact", "/contact"]];

export default function Nav() {
  const path = usePathname();
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  useEffect(() => setTheme(document.documentElement.dataset.theme || "light"), []);
  useEffect(() => setOpen(false), [path]);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    setTheme(next);
  };
  return (
    <header className="nav">
      <Link href="/" className="brand">minaal · tech</Link>
      <nav className={open ? "links open" : "links"} aria-label="Main">
        {links.map(([t, h]) => (
          <Link key={h} href={h} aria-current={path === h ? "page" : undefined}>{t}</Link>
        ))}
      </nav>
      <button className="icon-btn" onClick={toggle} aria-label="Switch theme">
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <button className="icon-btn menu" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
    </header>
  );
}
