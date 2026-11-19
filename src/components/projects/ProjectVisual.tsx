import {
  ArrowRight,
  AudioLines,
  Activity,
  Camera,
  HeartPulse,
  GitBranch,
  Layers3,
  BrainCircuit,
  Database,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Project } from "../../types/portfolio";
import { site } from "../../content/site";
import { ContentImage } from "../ui/ContentImage";
export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const visual = project.visual;
  return (
    <div
      className={`project-visual visual-${visual} ${large ? "visual-large" : ""}`}
    >
      <ContentImage
        key={project.cover}
        src={project.cover}
        alt={project.coverAlt}
        className="project-cover"
      >
        {visual === "mood" ? (
          <div
            className="mood-concept"
            aria-label={`Illustrative ${project.name} interface, not an actual product screenshot`}
          >
            <div className="concept-sidebar">
              <AudioLines size={24} />
              <div />
              <div />
              <div />
              <Sparkles size={18} />
            </div>
            <div className="concept-content">
              <div className="concept-top">
                <span>
                  {project.name}
                  <span className="mini-dot" />
                </span>
                <span>Interface concept</span>
              </div>
              <div className="mood-orb">
                <AudioLines strokeWidth={1} size={47} />
              </div>
              <h3>{site.visuals.mood.title}</h3>
              <p>{site.visuals.mood.reply}</p>
              <div className="concept-chips">
                {site.visuals.mood.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <div className="concept-input">
                <span>{site.visuals.mood.prompt}</span>
                <span className="concept-send">
                  <ArrowRight size={17} />
                </span>
              </div>
            </div>
          </div>
        ) : visual === "analytics" ? (
          <div className="analytics-concept">
            <div className="visual-topline">
              <BrainCircuit size={20} />
              <span>Agent collaboration</span>
            </div>
            <div className="agent-cluster">
              <div className="mini-agent">
                <Database />
                <span>Data</span>
              </div>
              <div className="mini-agent main-mini-agent">
                <Workflow />
                <span>Analyze</span>
              </div>
              <div className="mini-agent">
                <GitBranch />
                <span>Report</span>
              </div>
            </div>
            <div className="concept-process">
              {site.visuals.analytics.steps.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ) : visual === "vitals" ? (
          <div className="vitals-concept">
            <div className="visual-topline">
              <Activity size={20} />
              <span>From video to signal</span>
            </div>
            <div className="vitals-nodes">
              {site.visuals.vitals.steps.map((s, i) => (
                <div key={s}>
                  <span className="vital-node">
                    {i === 0 ? (
                      <Camera />
                    ) : i === 3 ? (
                      <HeartPulse />
                    ) : (
                      <Activity />
                    )}
                  </span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <div className="vitals-code">
              <span>Video</span>
              <ArrowRight size={14} />
              <span>BVP</span>
              <ArrowRight size={14} />
              <span>HR / HRV</span>
            </div>
          </div>
        ) : (
          <div className="cache-concept">
            <div className="visual-topline">
              <Layers3 size={20} />
              <span>Less context. More intent.</span>
            </div>
            <div className="cache-grid" aria-hidden="true">
              {Array.from({ length: 48 }, (_, i) => (
                <span
                  key={i}
                  className={
                    i % 7 === 0 || i % 5 === 0
                      ? "token-recovered"
                      : i % 3 === 0
                        ? "token-kept"
                        : ""
                  }
                />
              ))}
            </div>
            <div className="cache-legend">
              <span>
                <i />
                Retained
              </span>
              <span>
                <i />
                Recovery concept
              </span>
            </div>
          </div>
        )}
        <div className="visual-caption">
          <span>{site.visuals[visual].label}</span>
          <span>Illustrative</span>
        </div>
      </ContentImage>
    </div>
  );
}
