
import Link from 'next/link'
export default function Home(){return (<main>
  <section className="hero"><img src="/hero.jpg" className="bg" alt="Revive Hero"/>
    <div className="overlay"><h1>Faith. Work. Prosperity.</h1>
    <p className="reveal">A Fortune‑500 grade, faith‑based foundation driving transitional housing, workforce training, and scalable community renewal.</p>
    <div className="btnrow reveal"><Link href="/get-involved" className="btn">Partner With Power</Link><Link href="/programs" className="btn">Explore Programs</Link><Link href="/contact" className="btn">Donate (Coming Soon)</Link></div></div>
  </section>
  <section className="section container"><span className="badge">What Is Revive Foundation?</span>
    <h2 className="reveal">A Presidential‑Level Ecosystem for Lasting Change</h2>
    <p className="reveal">Revive Foundation is a 508(c)(1)(a) faith‑based nonprofit that restores veterans and returning citizens through <strong>Revive Homes</strong>, <strong>Revive HQ</strong>, and <strong>Revive Villages</strong>.</p>
  </section>
  <section className="section container"><h2 className="reveal">Impact Snapshot</h2>
    <div className="statgrid">
      <div className="stat reveal"><div className="num counter" data-target="7"></div><div className="small">Transitional Homes</div></div>
      <div className="stat reveal"><div className="num counter" data-target="56"></div><div className="small">Residents Housed</div></div>
      <div className="stat reveal"><div className="num counter" data-target="20"></div><div className="small">Jobs Secured</div></div>
      <div className="stat reveal"><div className="num counter" data-target="3"></div><div className="small">Core Partners</div></div>
    </div>
  </section>
</main>)}
