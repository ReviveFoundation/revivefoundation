
(function(){
  const KEY='revive-theme';
  const root = document.documentElement;
  function apply(t){ root.setAttribute('data-theme', t); }
  function init(){
    const saved = localStorage.getItem(KEY);
    const pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(saved || pref || 'light');
    const btn = document.getElementById('theme-toggle');
    if(btn){
      btn.addEventListener('click', ()=>{
        const next = (root.getAttribute('data-theme')==='dark') ? 'light':'dark';
        apply(next); localStorage.setItem(KEY,next);
      });
    }
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)} else {init()}
})();
