
import '../styles/globals.css';
import Link from 'next/link';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="nav">
        <div><strong>Revive Foundation</strong></div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/partners">Partnerships</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className="footer">
        <div className="container">
          <div className="small">© Revive Foundation, Inc. All Rights Reserved.</div>
          <div className="small">Registered Faith-Based Nonprofit | 508(c)(1)(a)</div>
          <div className="small">revive.foundation.org@gmail.com • (813) 486-8195</div>
        </div>
      </footer>
    </>
  );
}
