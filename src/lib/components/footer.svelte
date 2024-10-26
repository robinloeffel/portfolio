<script lang="ts">
	const openEmail = (event: MouseEvent) => {
		event.preventDefault();
		globalThis.location.href = globalThis.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
	};
</script>

<footer>
	<a data-umami-event="email-link" href="#email" onclick={openEmail}>Email</a>
	<a data-umami-event="linkedin-link" href="https://linkedin.com/in/robinloeffel">LinkedIn</a>
	<a data-umami-event="github-link" href="https://github.com/robinloeffel">GitHub</a>
</footer>
