import type { Architecture, CaseStudyBlock } from "../../types/portfolio";
import { ArrowRight } from "lucide-react";
export function CaseStudySection({ block }: { block: CaseStudyBlock }) {
  return (
    <section
      id={block.id}
      className="study-section"
      aria-labelledby={`study-${block.id}`}
      data-reveal
    >
      <div className="study-section-title">
        <h2 id={`study-${block.id}`}>{block.title}</h2>
        {block.placeholder && (
          <span className="sample-tag">Content to add</span>
        )}
      </div>
      <div className="study-prose">
        {block.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {block.bullets && (
          <ul>
            {block.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {block.code && (
          <figure className="study-code">
            <figcaption>{block.code.language}</figcaption>
            <pre>
              <code>{block.code.text}</code>
            </pre>
          </figure>
        )}
        {block.table && (
          <div
            className="study-table-wrap"
            role="region"
            aria-label={`${block.title} table`}
            tabIndex={0}
          >
            <table>
              <thead>
                <tr>
                  {block.table.headers.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
export function ArchitectureDiagram({
  architecture,
}: {
  architecture: Architecture;
}) {
  return (
    <section
      className="study-architecture"
      id="architecture"
      aria-labelledby="architecture-heading"
      data-reveal
    >
      <div className="architecture-header">
        <h2 id="architecture-heading">System Architecture</h2>
        <span>{architecture.label}</span>
      </div>
      <ol className="architecture-nodes">
        {architecture.nodes.map((node, i) => (
          <li key={node.id}>
            <div>
              <span className="architecture-node-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{node.title}</h3>
              <p>{node.detail}</p>
            </div>
            {i !== architecture.nodes.length - 1 && (
              <ArrowRight aria-hidden="true" size={18} />
            )}
          </li>
        ))}
      </ol>
      <p className="architecture-note">{architecture.description}</p>
    </section>
  );
}
