import Link from 'next/link';
export default function Home(){return (<main>
  <section className="hero"><h1>Faith in Action: Housing. Training. Transformation.</h1>
  <p>Revive Foundation builds faith-based transitional housing and workforce programs that restore lives, empower communities, and create self-sustaining impact.</p>
  <div className="btnrow"><Link href="/get-involved" className="btn">Partner With Us</Link><Link href="/programs" className="btn">Learn More</Link><Link href="/contact" className="btn">Donate Now</Link></div></section>
  <section className="section container"><h2>A Faith-Based Ecosystem for Lasting Change</h2>
  <p>Revive Foundation is a 508(c)(1)(a) faith-based nonprofit dedicated to restoring veterans, returning citizens, and families through housing, training, and community renewal. Our three-tier model — <strong>Homes</strong>, <strong>HQ</strong>, and <strong>Villages</strong> — creates pathways from stability to independence.</p></section>
  <section className="section container"><h2>Our Model</h2><div className="cardgrid">
    <div className="card"><h3>Revive Homes</h3><p>Transitional housing with purpose. Residents receive stable housing and wraparound support through our partners.</p></div>
    <div className="card"><h3>Revive HQ</h3><p>The workforce and training hub. Participants earn trade certifications, develop leadership, and prepare for long-term success.</p></div>
    <div className="card"><h3>Revive Villages</h3><p>Scalable micro-communities built around faith, sustainability, and work — blending housing, permaculture, and small business enterprise.</p></div>
  </div></section>
  <section className="section container"><h2>Impact Snapshot</h2><div className="statgrid">
    <div className="stat"><strong>7</strong><div className="small">Transitional Homes Active</div></div>
    <div className="stat"><strong>56</strong><div className="small">Residents Housed</div></div>
    <div className="stat"><strong>20</strong><div className="small">Jobs Secured</div></div>
    <div className="stat"><strong>3</strong><div className="small">Partner Organizations</div></div>
  </div></section>
  <section className="section container"><h2>Join the Movement</h2><p>Whether you’re a landlord, investor, or community leader — you can be part of a model that creates profit and purpose.</p>
  <div className="btnrow"><Link href="/get-involved" className="btn">Partner With Us</Link><Link href="/get-involved" className="btn">Volunteer</Link><Link href="/get-involved" className="btn">Sponsor a Home</Link></div></section>
</main>)}