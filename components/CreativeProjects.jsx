import { asset } from "@/lib/asset";

export default function CreativeProjects() {
  return (
    <section className="sheet" id="creative">
      <div className="cp-head">
        <div>
          <span className="script" style={{ fontSize: "44px", display: "block", marginBottom: "-10px" }}>Additional</span>
          <h2 className="display sec-title">Creative projects</h2>
        </div>
        <p>Brand, web and visual work where I owned the look as well as the message.</p>
      </div>
      <div className="cp">
        <article className="proj big full">
          <div className="vis v-solme" aria-hidden="true">
            <span className="status">Brand concept · 2026</span>
            <div className="sl-tote"><span className="sl-handle" /><span className="sl-label">solme</span><span className="sl-name">Linh</span></div>
            <div className="sl-side">
              <span className="sl-word">solme</span>
              <span className="sl-tag">handmade with soul</span>
              <div className="sl-sw"><i style={{ background: "#6B2D4A" }} /><i style={{ background: "#E7A4B6" }} /><i style={{ background: "#F8DDE4" }} /><i style={{ background: "#E3963A" }} /><i style={{ background: "#2E1822" }} /></div>
            </div>
          </div>
          <div className="txt">
            <span className="kind">Brand identity · Packaging · Social</span>
            <h3 style={{ textTransform: "none" }}>solme handmade bags</h3>
            <p>A brand for handmade fabric bags, built from scratch. The name joins <i>soul</i> and <i>Mely</i>. I wrote the brand book: positioning and target customer, logo and monogram, a 6-colour palette, type system, woven labels, hang tags, a mailer-box unboxing flow and an Instagram/TikTok content grid, benchmarked against Spain's Fearless Bags.</p>
            <div className="roles"><span>Brand book</span><span>Logo & palette</span><span>Labels & box</span><span>Social grid</span></div>
            <a className="more" href="https://claude.ai/artifact/U6dt6nFT6P7aJxoGKpwJft" target="_blank" rel="noopener">View brand book ↗</a>
          </div>
        </article>
        <article className="proj big">
          <div className="vis v-web">
            <div className="win">
              <div className="bar"><i /><i /><i /><span className="url">blogs.mely.io.vn</span></div>
              <div className="pg"><span className="t">Mely đi đây đó</span><span className="sub">Travel stories</span><img loading="lazy" decoding="async" src={asset("/images/mely-sunny-day-selfie.jpg")} alt="Mely, sunny day selfie" /></div>
            </div>
          </div>
          <div className="txt">
            <span className="kind">Web design · Content</span>
            <h3>Mely đi đây đó</h3>
            <p>Personal travel website about places I've visited in Vietnam and Malaysia. I designed the layout, wrote the stories and shot the photos.</p>
            <div className="roles"><span>Web layout</span><span>Writing</span><span>Photography</span></div>
            <a className="more" href="https://blogs.mely.io.vn/" target="_blank" rel="noopener">Visit blogs.mely.io.vn ↗</a>
          </div>
        </article>
        <article className="proj">
          <div className="vis v-film"><img loading="lazy" decoding="async" src={asset("/images/petronas-towers.jpg")} alt="Petronas Towers" /><img loading="lazy" decoding="async" src={asset("/images/sultan-abdul-samad.jpg")} alt="Sultan Abdul Samad" /><img loading="lazy" decoding="async" src={asset("/images/thean-hou-temple.jpg")} alt="Thean Hou Temple" /><img loading="lazy" decoding="async" src={asset("/images/temple-of-literature.jpg")} alt="Temple of Literature" /></div>
          <div className="txt">
            <span className="kind">Photography · Social</span>
            <h3>Photography</h3>
            <p>A curated set of landmark and architecture photos from Kuala Lumpur, Singapore and Hà Nội, framed for clean lines, strong colour and a sense of place.</p>
            <button className="more more-btn" type="button" id="open-set">View photo set (7) ↗</button>
          </div>
        </article>
        <article className="proj full">
          <div className="vis v-care" aria-hidden="true"><span>noinghe.com</span></div>
          <div className="txt">
            <span className="kind">Non-profit website · 2023–2024</span>
            <h3>Nói Nghe</h3>
            <p>Wrote website content and worked with the IT team to build a platform sharing mental health resources with the community.</p>
            <a className="more" href="https://noinghe.com" target="_blank" rel="noopener">Visit noinghe.com ↗</a>
          </div>
        </article>
      </div>
    </section>
  );
}
