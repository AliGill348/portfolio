const groups = [
  { category: 'Backend', icon: '⌘', level: 'Expert', skills: ['PHP 8.x', 'Laravel', 'OOP / SOLID', 'Service Architecture', 'Auth & Validation'] },
  { category: 'Database', icon: '▤', level: 'Advanced', skills: ['MySQL', 'Eloquent ORM', 'Migrations', 'Indexing', 'Query Optimization'] },
  { category: 'APIs & Integrations', icon: '⇄', level: 'Expert', skills: ['REST APIs', 'Webhooks', 'Postman', 'Payment Providers', 'KYC Services'] },
  { category: 'Frontend', icon: '◇', level: 'Proficient', skills: ['React', 'Blade', 'JavaScript / jQuery', 'AJAX', 'Vite'] },
  { category: 'DevOps & Cloud', icon: '☁', level: 'Proficient', skills: ['Docker', 'Docker Compose', 'Nginx / Reverse Proxy', 'AWS EC2', 'GitHub Actions / CI/CD', 'Linux / Ubuntu', 'SSH', "Let's Encrypt / SSL"] },
  { category: 'Tools', icon: '⚙', level: 'Advanced', skills: ['Git / GitHub', 'PHPUnit', 'WSL'] },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-heading light"><span className="section-number">04</span><p>Technical capabilities</p></div>
      <div className="skills-intro"><h2>Tools for the full<br /><em>backend lifecycle.</em></h2><p>From application architecture and third-party APIs to tested, containerized deployment.</p></div>
      <div className="skill-card-grid">
        {groups.map((group, index) => <article className="skill-card" key={group.category} style={{ '--skill-index': index }}><div className="skill-card-head"><span className="skill-icon" aria-hidden="true">{group.icon}</span><span className="skill-level">{group.level}</span></div><h3>{group.category}</h3><div className="proficiency-track" aria-hidden="true"><span /></div><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
      </div>
    </section>
  )
}
