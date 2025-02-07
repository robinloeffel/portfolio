const emailLink = document.querySelector<HTMLAnchorElement>("[href='#email']");

emailLink?.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  globalThis.location.href = globalThis.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
});

if (import.meta.env.PROD) {
  // eslint-disable-next-line github/no-dynamic-script-tag
  const stats = document.createElement("script");
  stats.src = "/stats/script.js";
  stats.async = true;
  stats.setAttribute("data-website-id", "d1008afe-4b86-4249-9980-fbcb8f500b20");
  stats.setAttribute("data-domains", "robinloeffel.ch");
  document.head.append(stats);
}
