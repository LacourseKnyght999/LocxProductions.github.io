
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.primary-nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.primary-nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const value = btn.dataset.copy;
    try{
      await navigator.clipboard.writeText(value);
      const old = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(()=>btn.textContent = old, 1400);
    }catch{
      window.prompt('Copy this:', value);
    }
  });
});
