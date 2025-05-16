document.querySelector<HTMLAnchorElement>("[href='#email']")
  ?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    window.open(window.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA=="), "_self");
  });
