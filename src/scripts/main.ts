document.querySelector<HTMLAnchorElement>("[href='#email']")
  ?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    window.open(window.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA=="), "_self");
  });

if (import.meta.env.PROD) {
  const stats = document.createElement("script");
  stats.src = "/stats.js";
  stats.async = true;
  stats.setAttribute("data-website-id", "d1008afe-4b86-4249-9980-fbcb8f500b20");
  stats.setAttribute("data-domains", "robinloeffel.ch");
  document.head.append(stats);
}
