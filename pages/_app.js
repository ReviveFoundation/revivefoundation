
import '../styles/globals.css'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect } from 'react'

export default function App({ Component, pageProps }){
  useEffect(()=>{
    // ensure theme applies immediately on hydration
    if(typeof window!=='undefined'){
      const t = localStorage.getItem('revive-theme');
      if(t){ document.documentElement.setAttribute('data-theme', t); }
    }
  },[]);

  return (<>
    <div className="topbar">Faith. Work. Prosperity.</div>
    <nav className="nav">
      <div className="brand"><img src="/logo.png" alt="Revive Foundation"/><strong>Revive Foundation</strong></div>
      <div style={{display:'flex',gap:'14px',flexWrap:'wrap',alignItems:'center'}}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/partners">Partnerships</Link>
        <Link href="/press">Press / Media</Link>
        <Link href="/get-involved">Get Involved</Link>
        <Link href="/contact">Contact</Link>
        <button id="theme-toggle" className="toggle" type="button">🌓 Theme</button>
      </div>
    </nav>
    <Component {...pageProps} />
    <footer className="footer">
      <div className="container">
        <div className="small">© Revive Foundation, Inc. All Rights Reserved.</div>
        <div className="small">Registered Faith-Based Nonprofit | 508(c)(1)(a)</div>
        <div className="small">revive.foundation.org@gmail.com • (813) 486-8195 • revive.foundation.org</div>
      </div>
    </footer>
    <Script src="/counters.js" strategy="lazyOnload" />
    <Script src="/theme.js" strategy="afterInteractive" />
  </>)
}
