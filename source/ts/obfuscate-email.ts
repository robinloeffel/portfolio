const linkElements = document.querySelectorAll<HTMLAnchorElement>("[data-obfuscate-email]");

const openEmail = (event: MouseEvent) => {
  event.preventDefault();
  window.location.href = window.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
};

for (const linkElement of linkElements) {
  linkElement.addEventListener("click", openEmail);
}
