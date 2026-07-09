// Footer year
document.querySelectorAll('#yr').forEach(function(el){
  el.textContent = new Date().getFullYear();
});

// Gentle reveal-on-scroll for folios, respecting reduced-motion preference
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.card, .tl-item, .ledger-row');
  if (reduce || !('IntersectionObserver' in window) || !targets.length) return;

  targets.forEach(function(el){
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function(el){ io.observe(el); });
})();
