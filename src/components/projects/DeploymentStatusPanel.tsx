import React, { useState, useEffect } from 'react';
import { CheckCircle2, CircleDot, Clock, ShieldCheck, Terminal, Play, Pause } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface DeploymentStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  task: string;
  verification: string;
}

const STAGES: DeploymentStage[] = [
  {
    id: 'stage-source',
    number: '01',
    title: 'Source Validation',
    subtitle: 'Code integrity & dependency verification',
    task: 'Validates Git commit tree, lint rules, and dependency lockfiles',
    verification: 'Repository integrity & syntax verified'
  },
  {
    id: 'stage-build',
    number: '02',
    title: 'Build & Compilation',
    subtitle: 'Containerization & bundle compilation',
    task: 'Executes type checking, bundle optimization, and container packaging',
    verification: 'Production container image assembled'
  },
  {
    id: 'stage-deploy',
    number: '03',
    title: 'Deployment',
    subtitle: 'Reverse proxy binding & runtime release',
    task: 'Launches Docker containers and configures Nginx reverse proxy routes',
    verification: 'Ingress routing & SSL/TLS handshake bound'
  },
  {
    id: 'stage-health',
    number: '04',
    title: 'Health Verification',
    subtitle: 'Endpoint probes & system supervision',
    task: 'Runs HTTP probe diagnostics and systemd service heartbeat verification',
    verification: 'Port listener & system daemon responding'
  }
];

interface DeploymentStatusPanelProps {
  className?: string;
  isCompact?: boolean;
}

export const DeploymentStatusPanel: React.FC<DeploymentStatusPanelProps> = ({
  className = '',
  isCompact = false
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || !isPlaying) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPlaying]);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  const currentStage = STAGES[activeStage];

  return (
    <div
      className={`deployment-panel ${isCompact ? 'deployment-panel--compact' : ''} ${className}`}
      role="region"
      aria-label="Vision Cloud Server Deployment Status Workflow"
    >
      {/* Console Top Bar */}
      <div className="deployment-panel__header">
        <div className="deployment-panel__dots" aria-hidden="true">
          <span className="dot dot--terracotta" />
          <span className="dot dot--champagne" />
          <span className="dot dot--graphite" />
        </div>
        <div className="deployment-panel__title-bar">
          <Terminal size={13} className="text-terracotta" />
          <span className="deployment-panel__mono-tag">VC-SERVER // DEPLOYMENT CADENCE</span>
        </div>
        {!prefersReducedMotion && (
          <button
            type="button"
            onClick={togglePlayback}
            className="deployment-panel__control-btn"
            aria-label={isPlaying ? 'Pause workflow demonstration' : 'Resume workflow demonstration'}
            title={isPlaying ? 'Pause auto-cycle' : 'Play auto-cycle'}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlaying ? 'RUNNING' : 'PAUSED'}</span>
          </button>
        )}
      </div>

      {/* Honest Workflow Demonstration Notice */}
      <div className="deployment-panel__notice">
        <span className="deployment-panel__notice-badge">DEMONSTRATION WORKFLOW</span>
        <p className="deployment-panel__notice-text">
          Illustrative 4-stage pipeline standard configured for Vision Cloud Server infrastructure.
        </p>
      </div>

      {/* Vertical Stages Pipeline */}
      <div className="deployment-pipeline">
        {/* Connector Line Background */}
        <div className="deployment-pipeline__track" aria-hidden="true">
          <div
            className="deployment-pipeline__track-fill"
            style={{
              height: `${(activeStage / (STAGES.length - 1)) * 100}%`
            }}
          />
          {!prefersReducedMotion && (
            <div
              className="deployment-pipeline__traveling-dot"
              style={{
                top: `${(activeStage / (STAGES.length - 1)) * 100}%`
              }}
            />
          )}
        </div>

        {/* Stages List */}
        <div className="deployment-pipeline__stages">
          {STAGES.map((stage, index) => {
            const isCompleted = index < activeStage;
            const isActive = index === activeStage;
            const isPending = index > activeStage;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`deployment-stage-card ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-completed' : ''} ${isPending ? 'is-pending' : ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStage(index);
                  }
                }}
                aria-label={`Stage ${stage.number}: ${stage.title} - ${isActive ? 'Currently active' : isCompleted ? 'Completed' : 'Queued'}`}
              >
                {/* Node Indicator */}
                <div className="deployment-stage-card__node" aria-hidden="true">
                  {isCompleted ? (
                    <CheckCircle2 size={16} className="node-icon node-icon--completed" />
                  ) : isActive ? (
                    <CircleDot size={16} className="node-icon node-icon--active" />
                  ) : (
                    <Clock size={14} className="node-icon node-icon--pending" />
                  )}
                </div>

                {/* Stage Info */}
                <div className="deployment-stage-card__content">
                  <div className="deployment-stage-card__header">
                    <span className="deployment-stage-card__number">{stage.number}</span>
                    <span className="deployment-stage-card__title">{stage.title}</span>
                    <span className={`deployment-stage-card__status-pill status-pill--${isCompleted ? 'done' : isActive ? 'active' : 'queued'}`}>
                      {isCompleted ? 'VERIFIED' : isActive ? 'PROCESSING' : 'QUEUED'}
                    </span>
                  </div>

                  <p className="deployment-stage-card__task">{stage.task}</p>

                  {isActive && (
                    <div className="deployment-stage-card__active-meta">
                      <span className="meta-label">CURRENT CHECKPOINT:</span>
                      <span className="meta-value">{stage.verification}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Thin Progress Indicator */}
      <div className="deployment-panel__progress-bar" aria-hidden="true">
        <div
          className="deployment-panel__progress-fill"
          style={{
            width: `${((activeStage + 1) / STAGES.length) * 100}%`
          }}
        />
      </div>

      {/* Footer Console Meta */}
      <div className="deployment-panel__footer">
        <div className="deployment-panel__footer-item">
          <ShieldCheck size={14} className="text-terracotta" />
          <span>SUPERVISED BY SYSTEMD & NGINX</span>
        </div>
        <div className="deployment-panel__footer-stage">
          <span>STEP {activeStage + 1} OF 4:</span>
          <strong>{currentStage.title.toUpperCase()}</strong>
        </div>
      </div>
    </div>
  );
};
