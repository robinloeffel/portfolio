const nav = document.querySelector<HTMLElement>("footer nav");
const sus = navigator.webdriver
  || navigator.userAgent.toLowerCase().includes("headless")
  || navigator.languages.length === 0
  || !window.innerWidth
  || !window.innerHeight;

if (nav && !sus) {
  const anchor = document.createElement("a");

  anchor.href = "#!";
  anchor.dataset.umamiEvent = "email-link";
  anchor.setAttribute("aria-label", "Email");

  anchor.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    globalThis.location.href = globalThis.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
  });

  nav.prepend(anchor);
}
