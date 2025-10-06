
(function(){
  const ease = t => 1 - Math.pow(1 - t, 4);
  function animateCount(el){
    const end = parseInt(el.dataset.target || '0', 10);
    const dur = parseInt(el.dataset.duration || '1200', 10);
    const t0 = performance.now();
    function step(now){
      const p = Math.min(1, (now - t0)/dur);
      el.textContent = Math.floor(ease(p) * end).toLocaleString();
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        if(e.target.classList.contains('counter')) animateCount(e.target);
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.25});
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.reveal, .counter').forEach(el=>io.observe(el));
  });
})();
