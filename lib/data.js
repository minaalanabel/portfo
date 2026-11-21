// Edit everything about your site here.
export const me = {
  name: "Minaal Anabel Rodrigues",
  short: "minaal",
  role: "CSE student & aspiring software engineer",
  college: "Sahyadri College of Engineering and Management",
  email: "minaalrodrigues@gmail.com", // TODO: put your real email – the contact form opens a draft to this address
  github: "https://github.com/minaalanabel",
  linkedin: "https://www.linkedin.com/in/minaal-rodrigues/",
  bio: [
    "I'm Minaal Anabel Rodrigues, a third-semester Computer Science and Engineering student at Sahyadri College of Engineering and Management. I'm a fast learner who adapts quickly to new tools and ideas, pays close attention to detail, and enjoys explaining my thinking clearly to the people I work with.",
    "Outside the classroom I love movies and technology, and I'm most excited by the place where they meet: well-made software that tells a story or makes something feel effortless. As an upcoming engineer, I'm drawn to building clean, useful applications, and I'm using each project to get better at the craft of software development.",
  ],
  goals: "To grow into a software engineer who builds reliable, thoughtful products, and to learn through internships, hackathons and open-source work along the way.",
  interests: ["Movies", "Technology", "Software development"],
  strengths: ["Fast learner", "Adaptability", "Detail oriented", "Communication"],
};

export const projects = [
  { id: "bootcamp", name: "bootcamp-project", tech: ["JavaScript"], repo: "https://github.com/minaalanabel/bootcamp-project",
    desc: "A JavaScript project built during a bootcamp, where I practised turning concepts into a working application." },
  { id: "redwings", name: "redwings-assesment", tech: ["JavaScript"], repo: "https://github.com/minaalanabel/redwings-assesment",
    desc: "A JavaScript assessment project that tested how quickly I could read requirements and deliver working code." },
  { id: "profile", name: "profilecard", tech: ["HTML", "CSS"], repo: "https://github.com/minaalanabel/profilecard",
    desc: "A styled profile card focused on layout, spacing and clean CSS." },
  { id: "smriti", name: "Smriti-NER", tech: ["TypeScript"], repo: "https://github.com/minaalanabel/Smriti-NER",
    desc: "My most technical repository so far, written in TypeScript." },
];

export const experience = [
  { title: "B.E. Computer Science & Engineering", org: me.college, when: "Ongoing · 3rd semester", text: "Coursework in programming and core CS fundamentals, applied through hands-on projects." },
  { title: "Bootcamp & assessment projects", org: "Self-driven learning", when: "Recent", text: "Built and published projects on GitHub to practise JavaScript, CSS and TypeScript." },
  { title: "Add an internship or club role", org: "Your organisation", when: "Date", text: "Replace this card in lib/data.js with real internships, clubs or volunteering." },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["React", "Next.js"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel"],
  "People skills": ["Communication", "Adaptability", "Attention to detail", "Fast learner"],
};

export const achievements = [
  { kind: "Certification", title: "Add your certificate", text: "List course certificates here, with the issuer and year." },
  { kind: "Hackathon", title: "Add a hackathon", text: "Name, your role, what you built and the result." },
  { kind: "Award", title: "Add an award", text: "Academic or extracurricular recognition." },
];

const colors = ["#ffb81f", "#3d9bff", "#8a6bff", "#1fc98f"];
const labels = ["boot", "wings", "card", "NER"];
// The five balloons on the home page.
export const balloons = [
  { id: "about", label: "me", color: "#ff6b57", title: "About Minaal",
    text: "Third-semester CSE student who loves movies and technology. Fast learner, adaptable, detail oriented and a clear communicator.", href: "/about", cta: "Read more" },
  ...projects.map((p, i) => ({ id: p.id, label: labels[i], color: colors[i], title: p.name, text: p.desc, href: p.repo, cta: "View on GitHub", tech: p.tech })),
];
