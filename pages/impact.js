
import { useEffect, useRef } from 'react'
import { Chart, ArcElement, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
Chart.register(ArcElement, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend)
export default function Impact(){const chartRef=useRef(null);useEffect(()=>{const c=new Chart(chartRef.current.getContext('2d'),{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],datasets:[{label:'Residents Housed (YTD)',data:[2,4,8,12,18,24,30,36,42,48,52,56],borderWidth:3,fill:false}]},options:{responsive:true,plugins:{legend:{position:'bottom'}}}});return()=>c.destroy()},[]);return (<main>
  <section className="hero"><img src="/hero.jpg" className="bg" alt=""/><div className="overlay"><h1>Impact Dashboard</h1><p>Live‑style KPIs and investor‑grade metrics.</p></div></section>
  <section className="section container"><h2 className="reveal">Key Performance Indicators</h2>
    <div className="statgrid">
      <div className="stat reveal"><div className="num counter" data-target="56"></div><div className="small">Residents Housed</div></div>
      <div className="stat reveal"><div className="num counter" data-target="20"></div><div className="small">Jobs Secured</div></div>
      <div className="stat reveal"><div className="num counter" data-target="82"></div><div className="small">Training Hours / Resident</div></div>
      <div className="stat reveal"><div className="num counter" data-target="7"></div><div className="small">Active Homes</div></div>
    </div>
  </section>
  <section className="section container reveal"><h2>YTD Progress</h2><canvas ref={chartRef} height="120"></canvas><p className="small">* Demo data for presentation. Export full Impact Report on request.</p></section>
</main>)}