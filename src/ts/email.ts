const emailLink = document.querySelector<HTMLAnchorElement>("[data-umami-event=email-link]");

const openEmail = (event: MouseEvent) => {
  event.preventDefault();
  globalThis.location.href = globalThis.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
};

emailLink?.addEventListener("click", openEmail);
