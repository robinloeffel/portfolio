const obfuscated = document.querySelectorAll<HTMLAnchorElement>("[data-obfuscated]");

for (const element of obfuscated) {
	const [ href = "", text = "" ] = element.dataset.obfuscated!.split(",");

	element.textContent = window.atob(text);

	element.addEventListener("click", event => {
		event.preventDefault();
		window.location.href = window.atob(href);
	});
}
