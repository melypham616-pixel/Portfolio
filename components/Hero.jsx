import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="sheet" id="top">
      <nav>
        <a href="#top" style={{ fontSize: "14px" }}>Pham Thi My Duyen</a>
        <div className="links">
          <a href="#work">My work</a>
          <a href="#cases">Case study</a>
          <a href="#results">Results</a>
          <a href="#creative">Creative</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="nr">
        <div className="nr-us">
          <div className="ed-eyebrow"><b>MARKETING & CREATIVE</b><span>Portfolio</span></div>
          <p className="ed-quote">“A bridge between what the data says and what people feel.”</p>
        </div>
        <div className="nr-stage">
          <div className="nr-word" aria-hidden="true">MELY</div>
          <div className="nr-phone nr-left">
            <div className="nr-stories"><i><img src={asset("/images/story-1.jpg")} alt="" /></i><i><img src={asset("/images/story-2.jpg")} alt="" /></i><i><img src={asset("/images/story-3.jpg")} alt="" /></i><i><img src={asset("/images/story-4.jpg")} alt="" /></i><i><img src={asset("/images/story-5.jpg")} alt="" /></i></div>
            <div className="nr-ph"><i /><span>Page 01</span></div>
            <figure className="tile nr-main"><img src={asset("/images/singapore-trip-2025-merlion-park.jpg")} alt="Singapore Trip 2025, Merlion Park" /></figure>
            <div className="nr-lines"><b /><b /></div>
          </div>
          <div className="nr-strip">
            <figure className="nr-post tile"><div className="nr-ph"><i /><span>Data × Creative</span></div><img src={asset("/images/best-of-moment.jpg")} alt="Best of moment" /></figure>
            <figure className="nr-post tile"><div className="nr-ph"><i /><span>Meta Ads Consultant (2025–2026)</span></div><img src={asset("/images/vacation-at-ula-resort-glamping.jpg")} alt="Vacation at Ula Resort Glamping" /></figure>
            <figure className="nr-post tile"><div className="nr-ph"><i /><span>Campaigns & Memories</span></div><img src={asset("/images/matcha-and-a-selfie.jpg")} alt="Matcha and a selfie" /></figure>
          </div>
          <div className="nr-phone nr-right">
            <figure className="tile nr-screen"><img src={asset("/images/mely-s-instagram-profile.jpg")} alt="Mely's Instagram profile" /></figure>
          </div>
          <img className="nr-cut" fetchPriority="high" src={asset("/images/pham-thi-my-duyen-mirror-selfie.webp")} alt="Pham Thi My Duyen, mirror selfie" />
          <div className="ed-search nr-search" role="presentation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            <span className="ed-typed">A marketer who reads data and designs, please…</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </div>
        </div>
        <div className="nr-pills">
          <a className="nr-pill" href="#contact"><span className="ic"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l18-8-8 18-2-8z" /></svg></span>Let's connect</a>
          <a className="nr-pill" href="https://www.linkedin.com/in/myduyen1/" target="_blank" rel="noopener"><span className="ic"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" /></svg></span>LinkedIn ↗</a>
          <div className="nr-meta"><span>Ho Chi Minh City, Vietnam</span><span>Vietnamese · English</span><span>Open to Marketing & Creative roles</span></div>
        </div>
        <div className="nr-about">
          <h1 className="ed-name">Pham Thi My Duyen</h1>
          <p className="lede">Meta Ads consultant with a creative edge. I build and test ad creatives that turn spend into measurable growth.</p>
          <dl className="nr-kpi">
            <div><dt>170%</dt><dd>top client vs Q1 goal</dd></div>
            <div><dt>102.9%</dt><dd>revenue target, Mar 2026</dd></div>
            <div><dt>100+</dt><dd>SMEs advised a month</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
