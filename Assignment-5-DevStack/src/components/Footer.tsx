export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">D</span><span>Dev <strong>Stack</strong></span></a>
          <p>Find your tools. Build your future.<br />Make something extraordinary.</p>
        </div>
        <div className="footer-links">
          <div><h4>Explore</h4><a href="#home">Home</a><a href="#technologies">Technologies</a><a href="#your-stack">Your Stack</a></div>
          <div><h4>Community</h4><a href="#about">About us</a><a href="#projects">Projects</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </div>
        <div className="footer-note" id="about"><span className="footer-sparkle">✦</span><h4>Made for the curious.</h4><p>Keep learning, keep building, and keep shipping.</p><a href="#technologies">Start exploring →</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Dev Stack. Built with curiosity.</span><span>Designed for developers <b>♥</b></span></div>
    </footer>
  );
}