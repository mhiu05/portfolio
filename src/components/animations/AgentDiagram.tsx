import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  BarChart3,
  Brain,
  Check,
  Cpu,
  Database,
  Layers,
  Search,
  Server,
  Shield,
  Sparkles,
  User,
  Wrench,
  Zap,
} from "lucide-react";
import { gsap, ScrollTrigger } from "../../lib/motion";
import { site } from "../../content/site";

const agentIcons: Record<string, LucideIcon> = {
  research: Search,
  analysis: Brain,
  action: Zap,
};

const resourceIcons: Record<string, LucideIcon> = {
  models: Cpu,
  tools: Server,
  memory: Database,
};

const blockIcons: Record<string, LucideIcon> = {
  agent: Layers,
  tools: Wrench,
  handoffs: ArrowLeftRight,
  guardrails: Shield,
  tracing: BarChart3,
};

export function AgentDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const content = site.diagram;

  useEffect(() => {
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ paused: true });
        tl.fromTo(
          ".flow-in",
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
        )
          .fromTo(
            ".flow-orchestrator",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45 },
            "-=0.15",
          )
          .fromTo(
            ".diagram-branch",
            { opacity: 0 },
            { opacity: 1, duration: 0.4 },
            "-=0.1",
          )
          .fromTo(
            ".agent-node",
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
            "<",
          )
          .fromTo(
            ".flow-out",
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 },
          )
          .fromTo(
            ".flow-resources",
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45 },
          );
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => tl.play(),
          onEnterBack: () => tl.play(),
          onLeave: () => tl.pause(),
          onLeaveBack: () => tl.pause(),
        });
      });
    }, ref);
    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div className="agent-diagram" ref={ref} data-intro>
      <div className="diagram-heading">
        <Sparkles
          className="diagram-symbol"
          size={27}
          strokeWidth={1.4}
          aria-hidden="true"
        />
        <div>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
      </div>
      <div className="diagram-layout">
        <div className="diagram-stage">
          <div className="diagram-pill diagram-request flow-in">
            <User size={13} strokeWidth={1.75} aria-hidden="true" />
            {content.input}
          </div>
          <span className="diagram-stem" aria-hidden="true" />
          <div className="diagram-orchestrator flow-orchestrator">
            <Layers size={18} strokeWidth={1.75} aria-hidden="true" />
            <div>
              <strong>{content.orchestrator}</strong>
              <span>{content.orchestratorDetail}</span>
            </div>
          </div>
          <div className="diagram-branch">
            <svg
              viewBox="0 0 300 54"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path className="diagram-wire" d="M150 0 V18" />
              <path className="diagram-wire" d="M48 18 H104" />
              <path className="diagram-wire" d="M196 18 H252" />
              <path className="diagram-wire" d="M48 18 V54" />
              <path className="diagram-wire" d="M150 28 V54" />
              <path className="diagram-wire" d="M252 18 V54" />
            </svg>
            <div className="diagram-pill diagram-handoff">
              <ArrowLeftRight size={11} strokeWidth={1.75} />
              {content.handoff}
            </div>
          </div>
          <div className="diagram-agents">
            {content.agents.map((agent) => {
              const Icon = agentIcons[agent.id] ?? Layers;
              return (
                <div key={agent.id} className="diagram-agent agent-node">
                  <span className="diagram-icon" aria-hidden="true">
                    <Icon size={14} strokeWidth={1.75} />
                  </span>
                  <strong>{agent.title}</strong>
                  <span>{agent.detail}</span>
                </div>
              );
            })}
          </div>
          <div className="diagram-merge" aria-hidden="true">
            <svg viewBox="0 0 300 22" preserveAspectRatio="none">
              <path className="diagram-wire" d="M48 0 V12 H252 V0" />
              <path className="diagram-wire" d="M150 12 V22" />
            </svg>
          </div>
          <div className="diagram-pill diagram-final flow-out">
            <span className="diagram-check" aria-hidden="true">
              <Check size={10} strokeWidth={2.6} />
            </span>
            {content.output}
          </div>
          <div className="diagram-drops" aria-hidden="true">
            <svg viewBox="0 0 300 16" preserveAspectRatio="none">
              <path className="diagram-wire diagram-wire-dashed" d="M48 0 V16" />
              <path
                className="diagram-wire diagram-wire-dashed"
                d="M252 0 V16"
              />
            </svg>
          </div>
          <div className="diagram-resources flow-resources">
            <p>{content.resourcesLabel}</p>
            <div className="diagram-resource-row">
              {content.resources.map((resource) => {
                const Icon = resourceIcons[resource.id] ?? Database;
                return (
                  <div key={resource.id} className="diagram-resource">
                    <span className="diagram-icon" aria-hidden="true">
                      <Icon size={13} strokeWidth={1.75} />
                    </span>
                    <strong>{resource.title}</strong>
                    <span>{resource.detail}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <aside className="diagram-blocks" aria-label={content.blocksLabel}>
          <div className="diagram-blocks-head">
            <h3>{content.blocksLabel}</h3>
            <p>{content.blocksSource}</p>
          </div>
          {content.blocks.map((block) => {
            const Icon = blockIcons[block.id] ?? Layers;
            return (
              <div key={block.id} className="diagram-block">
                <Icon size={14} strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <strong>{block.title}</strong>
                  <span>{block.detail}</span>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
