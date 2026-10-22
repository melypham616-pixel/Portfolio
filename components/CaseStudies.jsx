export default function CaseStudies() {
  return (
    <section className="sheet cases" id="cases">
      <h2 className="display sec-title" style={{ marginBottom: "0" }}>Case studies</h2>
      <article className="case">
        <div>
          <span className="pill">Case study 01</span>
          <div className="case-head">
            <span className="script">Performance</span>
            <h3 className="display">Meta Ads Consulting</h3>
            <div className="client">Concentrix × Meta</div>
            <div className="tags">Advertising Consultant · Jun 2025 – Jun 2026</div>
          </div>
          <div className="board" aria-hidden="true">
            <div className="c-blue">ROAS</div>
            <div className="c-paper">CTR</div>
            <div className="c-pink">CPA</div>
            <div className="c-paper">CPM</div>
            <div className="c-orange">CVR</div>
            <div className="c-paper">CPC</div>
          </div>
        </div>
        <div className="cbody">
          <div><h4>The challenge</h4><p>Vietnamese SMEs running Meta Ads with unclear goals, uneven spend and little reading of their own data.</p></div>
          <div>
            <h4>The approach</h4>
            <ul>
              <li>Consulted 100+ businesses every month, matching campaign strategy to each business goal.</li>
              <li>Audited ROAS, CTR, CPC, CPM and conversion rate to find the biggest optimization gaps.</li>
              <li>Recommended tailored changes to audiences, budgets and creatives, then followed up on results.</li>
            </ul>
          </div>
          <div className="steps"><div>Diagnose</div><div>Plan</div><div>Optimize</div><div>Review</div></div>
          <div>
            <h4>Result</h4>
            <div className="result">
              <div><b>100+</b><small>SMEs / month</small></div>
              <div><b>+100–130%</b><small>Conversions & revenue</small></div>
              <div><b>Top</b><small>Outbound sales Q1 2026</small></div>
            </div>
          </div>
        </div>
      </article>
      <article className="case">
        <div>
          <span className="pill">Case study 02</span>
          <div className="case-head">
            <span className="script">E-commerce</span>
            <h3 className="display">2× Online Revenue</h3>
            <div className="client">Kha Kim</div>
            <div className="tags">Digital Marketing Executive · Oct 2021 – May 2022</div>
          </div>
          <div className="board" aria-hidden="true">
            <div className="c-pink">2×</div>
            <div className="c-paper">A / B</div>
            <div className="c-green">Email</div>
            <div className="c-paper">Ads</div>
            <div className="c-blue">+25%</div>
            <div className="c-paper">+15%</div>
          </div>
        </div>
        <div className="cbody">
          <div><h4>The challenge</h4><p>Grow online revenue with paid social and email while keeping ad spend efficient.</p></div>
          <div>
            <h4>The approach</h4>
            <ul>
              <li>Optimized Meta Ads audiences and campaign setup based on ROAS, CPC and CPM.</li>
              <li>Refreshed ad creatives using performance data.</li>
              <li>Built Klaviyo email automations and A/B tested subject lines and content.</li>
            </ul>
          </div>
          <div className="steps"><div>Audience</div><div>Creative</div><div>Email</div><div>Test</div></div>
          <div>
            <h4>Result</h4>
            <div className="result">
              <div><b>2×</b><small>Online revenue</small></div>
              <div><b>+25%</b><small>Email open rate</small></div>
              <div><b>+15%</b><small>Email CTR</small></div>
            </div>
          </div>
        </div>
      </article>
      <article className="case">
        <div>
          <span className="pill">Case study 03</span>
          <div className="case-head">
            <span className="script">Brand launch</span>
            <h3 className="display">NutCircle Cashew</h3>
            <div className="client">Thế Dương</div>
            <div className="tags">Digital Marketing Executive · Feb – Apr 2024</div>
          </div>
          <div className="board" aria-hidden="true">
            <div className="c-orange">Research</div>
            <div className="c-paper">SEO</div>
            <div className="c-green">Pack</div>
            <div className="c-paper">Web</div>
            <div className="c-blue">Launch</div>
            <div className="c-paper">Bình Phước</div>
          </div>
        </div>
        <div className="cbody">
          <div><h4>The challenge</h4><p>Position a new cashew brand and get its first product to market with an online presence from day one.</p></div>
          <div>
            <h4>The approach</h4>
            <ul>
              <li>Ran market research to shape brand positioning and market-entry strategy.</li>
              <li>Built the company website with SEO-driven content.</li>
              <li>Supported the first launch through supplier evaluation, factory visits and packaging development.</li>
            </ul>
          </div>
          <div className="steps"><div>Research</div><div>Position</div><div>Build</div><div>Launch</div></div>
          <div>
            <h4>Result</h4>
            <div className="result">
              <div><b>+25%</b><small>Traffic, South VN</small></div>
              <div><b>+10%</b><small>Traffic, nationwide</small></div>
              <div><b>1st</b><small>Product launched</small></div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
