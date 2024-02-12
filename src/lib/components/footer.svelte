<script lang="ts">
	const openEmail = () => {
		window.location.href = window.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
	};
</script>

<footer class="footer">
	<p>
		<a class="link" href="#email" on:click|preventDefault={openEmail}>Email</a>
		<a class="link" href="https://linkedin.com/in/robinloeffel">LinkedIn</a>
		<a class="link" href="https://github.com/robinloeffel">GitHub</a>
	</p>
</footer>

<style lang="scss">
	@use "$lib/styles/variables";

	.link {
		font-size: variables.$font-size-h3;
	}
</style>
