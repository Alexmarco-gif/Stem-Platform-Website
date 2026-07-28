const sourceTiles = ["CBN", "NIBSS", "SEC", "Market", "Apps", "Infra"];
const processTiles = ["Normalize", "Resolve", "Classify", "Corroborate", "Score", "Enrich"];

export function IntelligenceStack() {
  return (
    <div
      className="iso-scene"
      role="img"
      aria-label="Exploded diagram showing governed market signals becoming validated, decision-ready intelligence"
    >
      <div className="iso-glow" aria-hidden="true" />
      <svg className="iso-links" viewBox="0 0 620 590" aria-hidden="true">
        <path d="M82 210 H146 L204 265" />
        <path d="M520 128 H474 L418 188" />
        <path d="M520 426 H462 L414 377" />
        <circle cx="82" cy="210" r="4" />
        <circle cx="520" cy="128" r="4" />
        <circle cx="520" cy="426" r="4" />
      </svg>

      <div className="iso-callout callout-source" aria-hidden="true">
        <span>Registered sources</span>
        <b>Governed acquisition</b>
      </div>
      <div className="iso-callout callout-score" aria-hidden="true">
        <span>Confidence</span>
        <b>Deterministic · 92%</b>
      </div>
      <div className="iso-callout callout-action" aria-hidden="true">
        <span>Decision output</span>
        <b>Evidence attached</b>
      </div>

      <div className="iso-stage" aria-hidden="true">
        <div className="iso-layer iso-input-layer">
          <div className="iso-layer-heading">
            <span>01</span><b>Governed signal field</b>
          </div>
          <div className="iso-tile-grid">
            {sourceTiles.map((tile) => <span key={tile}>{tile}</span>)}
          </div>
          <div className="iso-edge-label">REGULATORY · COMPETITIVE · INFRASTRUCTURE</div>
        </div>

        <div className="iso-layer iso-process-layer">
          <div className="iso-layer-heading">
            <span>02</span><b>Validation & context</b>
          </div>
          <div className="iso-tile-grid process-tiles">
            {processTiles.map((tile, index) => (
              <span className={index === 4 ? "active" : ""} key={tile}>{tile}</span>
            ))}
          </div>
          <div className="iso-score-line">
            <span>Source quality</span><i />
            <span>Corroboration</span><i />
            <span>Recency</span>
          </div>
        </div>

        <div className="iso-layer iso-output-layer">
          <div className="iso-output-top">
            <span>03 · Intelligence dossier</span>
            <b>HIGH</b>
          </div>
          <h3>Settlement stability signal</h3>
          <p>Pattern change confirmed across governed sources.</p>
          <div className="iso-output-metric">
            <strong>92</strong><span>/100<br />confidence</span>
          </div>
          <div className="iso-output-action">Recommended action attached <span>→</span></div>
        </div>
      </div>

      <div className="iso-system-node node-rules" aria-hidden="true">
        <span>R</span><small>Rule engine</small>
      </div>
      <div className="iso-system-node node-entity" aria-hidden="true">
        <span>E</span><small>Entity graph</small>
      </div>
    </div>
  );
}
