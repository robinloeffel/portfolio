const nav = document.querySelector<HTMLElement>("footer nav");
const isSus = Object.values({
  hasWebDriver: navigator.webdriver,
  hasHeadlessInUserAgent: navigator.userAgent.toLowerCase().includes("headless"),
  hasNoUserLanguages: navigator.languages.length === 0,
  hasNoWindowDimensions: !window.innerWidth || !window.innerHeight,
  hasDisallowedAttributes: new Set(["selenium", "webdriver", "driver", "playwright"])
    .intersection(new Set(document.documentElement.getAttributeNames()))
    .size > 0
}).some(Boolean);
const handleClick = (event: MouseEvent) => {
  event.preventDefault();
  window.location.href = window.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
};

if (nav && !isSus) {
  const anchor = document.createElement("a");
  anchor.href = "#!";
  anchor.dataset.umamiEvent = "email-link";
  anchor.setAttribute("aria-label", "Email");
  anchor.addEventListener("click", handleClick);
  nav.prepend(anchor);
}
