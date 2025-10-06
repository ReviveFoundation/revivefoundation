
export default function Press(){return (<main>
  <section className="hero"><img src="/hero.jpg" className="bg" alt=""/><div className="overlay"><h1>Press & Media</h1><p>Media kit, brand assets, and press releases.</p></div></section>

  <section className="section container">
    <h2 className="reveal">Media Kit</h2>
    <div className="cardgrid">
      <a className="card reveal" href="/logo.png" download><h3>Logo Pack</h3><p>PNG (teal/green). SVG available upon request.</p></a>
      <a className="card reveal" href="/hero.jpg" download><h3>Hero Image</h3><p>Approved hero photo (web resolution).</p></a>
      <a className="card reveal" href="#" onClick={(e)=>e.preventDefault()}><h3>Brand Guide (PDF)</h3><p>Coming soon.</p></a>
    </div>
  </section>

  <section className="section container">
    <h2 className="reveal">Press Releases</h2>
    <div className="cardgrid">
      <div className="card reveal">
        <h3>Revive Foundation Launches Transitional Housing Pilot</h3>
        <p>Homes → HQ → Villages rollout, partnering with Abe Brown Ministries and Operation New Hope.</p>
        <p className="small">Embargo lifted — publish anytime.</p>
      </div>
      <div className="card reveal">
        <h3>Revive HQ Workforce Training Hub Announced</h3>
        <p>Construction & Automotive tracks; OSHA, NCCER, ASE certifications planned.</p>
        <p className="small">Coming soon.</p>
      </div>
    </div>
  </section>

  <section className="section container">
    <h2 className="reveal">Press Contact</h2>
    <p className="reveal"><strong>Email:</strong> revive.foundation.org@gmail.com • <strong>Phone:</strong> (813) 486-8195</p>
  </section>
</main>)}
