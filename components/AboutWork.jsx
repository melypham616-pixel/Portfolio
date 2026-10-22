import { asset } from "@/lib/asset";

export default function AboutWork() {
  return (
    <div className="split" id="work">
      <section className="sheet about about2">
        <div className="ab-photo">
          <span className="tape" aria-hidden="true" />
          <figure className="tile ab-pola"><img loading="lazy" decoding="async" src={asset("/images/mely-in-front-of-the-sultan-abdul-samad-.jpg")} alt="Mely in front of the Sultan Abdul Samad Building, Kuala Lumpur" /></figure>
        </div>
        <div className="ab-text">
          <span className="label ab-eyebrow">About me</span>
          <h2 className="script">Hi, I'm Mely!</h2>
          <p>I started on the front line at Concentrix, answering Meta advertisers' questions every day. Within a year I was promoted to <strong>Advertising Consultant</strong>, helping business owners grow revenue and optimize their ads. With <strong>3+ years in digital marketing</strong>, I give advice that is practical and gets results.</p>
          <p>I work best where <strong><mark className="hl hl-b">data</mark>, <mark className="hl hl-p">creative</mark> and <mark className="hl hl-g">people</mark></strong> meet: reading ROAS, CTR and CPA, testing creatives, and explaining results so clients know exactly what to do next.</p>
          <aside className="niche">
            <span className="niche-tag">My niche</span>
            <h3>Performance creative</h3>
            <p>Most ads lose on the creative, not the budget. I read the data to find which hook, visual or line of copy is losing people, then rebuild it and test until the numbers move.</p>
            <ul>
              <li><b>Harappa</b><span>New creatives and copy after account recovery → <strong>170%</strong> of Q1 goal</span></li>
              <li><b>Kha Kim</b><span>Data-led creative refresh → <strong>2×</strong> online revenue</span></li>
              <li><b>Toolkit</b><span>Canva · Photoshop · CapCut · A/B testing</span></li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="sheet">
        <h2 className="display sec-title">My work includes</h2>
        <div className="svc">
          <article><div className="ico c-blue"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l14-6v14L3 13z" /><path d="M7 13v5h3" /></svg></div><h3>Meta Ads</h3><p>Campaign structure, audiences and budget plans built around each client's goal.</p></article>
          <article><div className="ico c-pink"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg></div><h3>Performance analysis</h3><p>ROAS, CTR, CPC, CPM and conversion rate turned into optimization actions.</p></article>
          <article><div className="ico c-orange"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="6" /><path d="M20 20l-4-4" /></svg></div><h3>SEO & content</h3><p>Keyword research and website content that grows organic traffic.</p></article>
          <article><div className="ico c-green"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" /><path d="M3 7l9 6 9-6" /></svg></div><h3>Email automation</h3><p>Klaviyo flows and A/B tests on subject lines and creatives.</p></article>
          <article><div className="ico c-paper"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" /></svg></div><h3>AI-assisted research</h3><p>Market research, copy drafts and data analysis sped up with Claude and ChatGPT.</p></article>
          <article><div className="ico c-blue"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8l8-5 8 5v10l-8 4-8-4z" /><path d="M4 8l8 4 8-4M12 12v10" /></svg></div><h3>Brand & packaging</h3><p>Product launch support from supplier checks to packaging design.</p></article>
        </div>
      </section>
    </div>
  );
}
