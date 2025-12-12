const link = document.querySelector<HTMLAnchorElement>("[data-email]");

link?.addEventListener("click", (event) => {
  event.preventDefault();
  const email = globalThis.atob("aGlAcm9iaW5sb2VmZmVsLmNo");
  link.href = `mailto:${email}`;
  link.textContent = email;
}, { once: true });
