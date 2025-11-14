interface CardBodyProps {
  description: string;
  skills?: string[];
}

export function CardBody({ description, skills }: CardBodyProps) {
  return (
    <div className="card-body">
      <div className="description">
        <span className="p-tag-open">&lt;p&gt;</span>
        <span className="description-text">{description}</span>
        <span className="p-tag-close">&lt;/p&gt;</span>
      </div>

      {skills && skills.length > 0 && (
        <div className="skills">
          <h3>Habilidades</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
