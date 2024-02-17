<script lang="ts">
	const openEmail = () => {
		window.location.href = window.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
	};
</script>

<footer class="footer">
	<p>
		<a data-umami-event="email-link" href="#email" on:click|preventDefault={openEmail}>Email</a>
		<a data-umami-event="linkedin-link" href="https://linkedin.com/in/robinloeffel">LinkedIn</a>
		<a data-umami-event="github-link" href="https://github.com/robinloeffel">GitHub</a>
	</p>
</footer>

<style lang="scss">
	@use "$lib/styles/variables";

	.footer {
		font-size: variables.$font-size-h3;
	}
</style>
