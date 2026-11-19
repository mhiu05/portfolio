export function SectionHeading({
  title,
  subtitle,
  description,
  id,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  id: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <h2 id={id}>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
