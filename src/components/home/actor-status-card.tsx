/** Looping demo of one likeness-review case for the AI actor project row. Pure CSS animation. */
export function ActorStatusCard() {
  return (
    <div className="yc-status" aria-label="Demo: a celebrity-ad request is blocked because consent cannot be verified">
      <div className="yc-status-head">
        <span>
          <span className="yc-status-dot" aria-hidden="true" />
          Likeness review · SYN-0428
        </span>
        <span>rules v2026-11</span>
      </div>
      <div className="yc-status-steps">
        <div className="yc-status-step">Intake: commercial ad using a real person&apos;s face</div>
        <div className="yc-status-step">Checking consent evidence and scope</div>
        <div className="yc-status-step is-alert">R-01 · No verified authorization (Civil Code Art. 1019)</div>
      </div>
      <div className="yc-status-bar" aria-hidden="true">
        <span />
      </div>
      <div className="yc-status-result">Blocked before generation</div>
    </div>
  );
}
