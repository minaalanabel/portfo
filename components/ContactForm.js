"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { me } from "../lib/data";

const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address, like name@example.com.";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
};

export default function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const found = validate(v);
    setErr(found);
    if (Object.keys(found).length) return;
    const body = encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`);
    window.location.href = `mailto:${me.email}?subject=${encodeURIComponent("Portfolio message from " + v.name)}&body=${body}`;
    setSent(true);
  };
  const field = (k, label, props = {}) => (
    <label className="field">{label}
      {k === "message" ? <textarea rows={5} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} /> :
        <input value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} {...props} />}
      {err[k] && <small role="alert">{err[k]}</small>}
    </label>
  );
  return (
    <form onSubmit={submit} noValidate className="form">
      {field("name", "Your name")}
      {field("email", "Your email", { type: "email" })}
      {field("message", "Message")}
      <button className="btn solid" type="submit"><Send size={16} /> Send message</button>
      {sent && <p className="ok" role="status">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
