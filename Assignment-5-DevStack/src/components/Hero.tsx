export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> YOUR JOURNEY STARTS HERE</span>
          <h1>Build your next big idea with <span className="gradient-text">the right stack.</span></h1>
          <p className="hero-description">
            Discover the tools, frameworks, and technologies that help turn your ideas into
            extraordinary digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-gradient" href="#technologies">Explore Technologies <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href="#about">Learn More <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars"><span>👩🏻‍💻</span><span>👨🏽‍💻</span><span>👩🏾‍💻</span></div>
            <p><strong>15+ technologies</strong><br />One place to build your stack</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Illustration of a developer technology workspace">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="code-window">
            <div className="window-top"><span /><span /><span /><small>your-stack.ts</small></div>
            <div className="code-lines">
              <p><i>01</i> <b>const</b> stack = [</p>
              <p><i>02</i> &nbsp; <em>"React"</em>,</p>
              <p><i>03</i> &nbsp; <em>"TypeScript"</em>,</p>
              <p><i>04</i> &nbsp; <em>"Your next idea"</em></p>
              <p><i>05</i> ];</p>
              <p><i>06</i> <b>build</b>(stack); <span className="cursor">▍</span></p>
            </div>
            <div className="code-status"><span>● All systems ready</span><span>⌘ + ↵</span></div>
          </div>
          <div className="floating-tech floating-react">⚛️ <span>React</span></div>
          <div className="floating-tech floating-ts">TS <span>TypeScript</span></div>
          <div className="floating-tech floating-vite">⚡ <span>Vite</span></div>
          <div className="art-caption"><span className="caption-check">✓</span><span><strong>Made for makers</strong><small>Ideas into impact</small></span></div>
        </div>
      </div>
      <div className="hero-bottom-glow" />
    </section>
  );
}