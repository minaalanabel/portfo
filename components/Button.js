import Link from "next/link";

export default function Button({ href, children, variant = "solid", external }) {
  const cls = `btn ${variant}`;
  return external
    ? <a className={cls} href={href} target="_blank" rel="noreferrer">{children}</a>
    : <Link className={cls} href={href}>{children}</Link>;
}
