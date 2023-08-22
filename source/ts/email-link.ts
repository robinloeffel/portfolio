const spanToReplace = document.querySelector("[data-replace-with-link]")!;
const dialog = document.querySelector("dialog")!;
const select = dialog.querySelector("select")!;

const anchor = document.createElement("a");
anchor.text = "E-Mail";
anchor.href = "#";

spanToReplace.replaceWith(anchor);

anchor.addEventListener("click", event => {
  event.preventDefault();
  dialog.showModal();
});

select.addEventListener("change", event => {
  const changed = event.target as HTMLSelectElement;

  if (changed.value === "potatoes") {
    window.location.href = [ ..."hc.leffeolnibor@ih:otliam" ].reverse().join("");
    changed.value = "";
  }

  dialog.close();
});
