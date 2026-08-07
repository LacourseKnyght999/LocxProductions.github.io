const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

$("#year").textContent = new Date().getFullYear();

const menu = $("#mobileMenu");
const nav = $("#nav");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
$$(".nav-link").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });
$$(".reveal").forEach(el => observer.observe(el));

const sections = $$("main section[id]");
const navLinks = $$(".nav-link");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => sectionObserver.observe(section));

$$(".filter").forEach(btn => btn.addEventListener("click", () => {
  const parent = btn.closest(".filter-bar");
  const filter = btn.dataset.filter;
  $$(".filter", parent).forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  $$("#gamesGrid .game-card").forEach(card => {
    const cats = card.dataset.category.split(" ");
    card.classList.toggle("hidden-card", filter !== "all" && !cats.includes(filter));
  });
}));

const content = {
  tripp: {
    kicker: "GAME / ACTIVE DEVELOPMENT",
    title: "Tripp Attack",
    text: "A two-player directional card battler centered on a 3×3 board, five-card hands, tactical captures, readable match presentation, and multiplayer play. The project is being developed as its own LOCX title with custom cards, UI, boards, menus, and competitive game flow.",
    tags:["Card Battle","2 Player","Strategy","Multiplayer"]
  },
  redline: {
    kicker:"GAME / PLAYTESTING",
    title:"REDLine",
    text:"A competitive darts game designed around fast matches and real friend-to-friend multiplayer. Current work emphasizes reliable invitations, loadouts, rejoining, responsive presentation, and end-to-end play across devices.",
    tags:["Darts","Arcade","Online","Competitive"]
  },
  bowlout: {
    kicker:"GAME / ACTIVE DEVELOPMENT",
    title:"BowlOut",
    text:"A stylized bowling project with selectable presentation modes, customizable bowling equipment, strong lane and table visuals, and multiplayer systems intended for direct play with friends.",
    tags:["Bowling","Sports","Customization","Multiplayer"]
  },
  roll: {
    kicker:"GAME / ACTIVE PROJECT",
    title:"Roll To Riches",
    text:"A property and strategy board-game project built around a premium 2.5D table presentation, piece selection, rule configuration, and a multiplayer-first setup flow.",
    tags:["Board Game","2–4 Players","Strategy","Social"]
  },
  site:{
    kicker:"DEVLOG / WEBSITE",
    title:"A New Home for LOCX Games",
    text:"The LOCX Games site is being shaped as a central home for releases, work-in-progress games, software projects, future ideas, and development updates. This first version establishes the visual identity and structure so new projects can be added without redesigning the site every time.",
    tags:["Website","LOCX","Update"]
  },
  multi:{
    kicker:"DEVLOG / MULTIPLAYER",
    title:"Multiplayer That Survives Real Use",
    text:"LOCX multiplayer testing is focused on complete player flows rather than isolated feature checks: invites, joining, separate player states, gameplay, disconnect behavior, results, rejoining, and clean exits across the actual target devices.",
    tags:["Multiplayer","Testing","Release"]
  }
};

content.tripp_news = {
  kicker:"DEVLOG / TRIPP ATTACK",
  title:"Polishing Tripp Attack",
  text:"The current pass focuses on the pieces players see constantly: card selection, side-hand presentation, board framing, readable capture feedback, transitions, and the pause needed to understand why a hand or match was won.",
  tags:["Tripp Attack","UI","Game Feel"]
};

const modal = $("#modal");
function openModal(data){
  $("#modalKicker").textContent = data.kicker;
  $("#modalTitle").textContent = data.title;
  $("#modalText").textContent = data.text;
  $("#modalTags").innerHTML = data.tags.map(t => `<span>${t}</span>`).join("");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}
function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
$$(".project-open").forEach(btn => btn.addEventListener("click",()=>openModal(content[btn.dataset.project])));
$$(".modal-news").forEach(btn => btn.addEventListener("click",()=>{
  const key = btn.dataset.news === "tripp" ? "tripp_news" : btn.dataset.news;
  openModal(content[key]);
}));
$$("[data-close-modal]").forEach(el => el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

$(".copy-domain")?.addEventListener("click", async e => {
  try{
    await navigator.clipboard.writeText(e.currentTarget.dataset.copy);
    const toast=$("#toast"); toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),1800);
  }catch{ alert("locxgames.link"); }
});
