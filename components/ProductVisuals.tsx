export function DecisionBriefVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`decision-ui ${compact ? "compact" : ""}`}>
    <div className="ui-window-bar"><span>STEM COGENT / MY BRIEFING</span><i /><i /><i /></div>
    <div className="ui-greeting"><div><span>Good morning, Tunde</span><strong>3 decisions require your attention</strong></div><time>Friday · 14 August</time></div>
    <article className="ui-brief">
      <header><span className="status critical">REGULATORY · HIGH PRIORITY</span><span className="confidence"><i /> HIGH CONFIDENCE</span></header>
      <h3>CBN issues new requirement affecting wallet onboarding</h3>
      <section><b>Why this matters to you</b><p>Your company operates a wallet product in Nigeria and has product onboarding configured as a current focus area.</p></section>
      <div className="ui-tags"><span>Wallet</span><span>Onboarding</span><span>Nigeria</span></div>
      <div className="ui-two"><section><b>What&apos;s at stake</b><p>Regulatory · Customer · Execution</p></section><section><b>Decision window</b><p>Before planned release</p></section></div>
      <section className="decision-required"><b>Decision required</b><p>Determine whether the planned onboarding release requires modification before implementation.</p></section>
      <footer><span><i>✓</i> Evidence: CBN · Official source</span><span>Decision remains human-owned</span></footer>
      <div className="ui-actions"><button>Open Decision Brief</button><button>Investigate</button></div>
    </article>
  </div>;
}

export function BriefingWorkspace() {
  return <div className="workspace-ui"><aside><b>Stem Cogent</b>{["My Briefing","Company Lens","Focus Areas","Wider Intelligence"].map((item,i)=><span className={i===0?"active":""} key={item}>{item}</span>)}</aside><main><div className="workspace-head"><div><span>MY DECISION BRIEFING</span><h3>Good morning, Tunde.</h3></div><b>Friday · 08:30</b></div><div className="workspace-tabs"><b>Requires Your Attention <i>3</i></b><span>Watching 8</span><span>Recently Resolved 12</span></div>{[["REGULATORY","HIGH","Wallet onboarding requirement","Product + Compliance · Before release"],["INFRASTRUCTURE","MEDIUM","Payment reliability degradation","Operations · Monitor threshold"],["COMPETITIVE","MEDIUM","Merchant pricing move detected","Strategy + Finance · 7 days"]].map(([type,level,title,meta])=><article key={title}><span>{type}</span><i className={level.toLowerCase()}>{level}</i><h4>{title}</h4><p>{meta}</p><b>→</b></article>)}</main></div>;
}

export function RoleLensVisual() {
  const roles=[["CFO Lens","Financial exposure","Transaction economics and failed-payment volume."],["COO Lens","Operational exposure","Payment reliability and routing continuity."],["Product Lens","Experience exposure","Checkout performance and merchant experience."],["CEO Lens","Executive exposure","Revenue continuity and customer trust."]];
  return <div className="role-visual"><header><span>ONE VERIFIED EVENT</span><h3>Payment infrastructure degradation detected</h3><small>Source corroborated · Confidence high</small></header><div>{roles.map(([role,exposure,text])=><article key={role}><span>{role}</span><h4>{exposure}</h4><p>{text}</p></article>)}</div><footer>One event. Different relevance for different responsibilities.</footer></div>;
}

export function CogentVisual() {
  return <div className="cogent-ui"><header><div><i>C</i><span>Cogent Intelligence</span></div><b>Evidence-grounded</b></header><div className="cogent-context"><span>CONTEXT ATTACHED</span><p>CBN wallet onboarding requirement · Decision Brief #SC-241</p></div><div className="cogent-question">Why was this marked relevant to me?</div><div className="cogent-answer"><span>COGENT</span><p>This was marked relevant because your company operates a wallet product in Nigeria, onboarding is an active Focus Area, and the requirement&apos;s implementation window overlaps with a planned release.</p><div>3 evidence links · High confidence · 1 uncertainty</div></div><footer>Ask about evidence, precedent, affected competitors or uncertainty… <button>↑</button></footer></div>;
}
