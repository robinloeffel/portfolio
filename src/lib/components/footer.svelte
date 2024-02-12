<script lang="ts">
	const openEmail = () => {
		window.location.href = window.atob("bWFpbHRvOmhpQHJvYmlubG9lZmZlbC5jaA==");
	};
</script>

<footer class="footer">
	<p>
		<a class="link" href="#email" on:click|preventDefault={openEmail}>email</a>
		<a class="link" href="https://linkedin.com/in/robinloeffel">linkedin</a>
		<a class="link" href="https://github.com/robinloeffel">github</a>
	</p>
</footer>

<style lang="scss">
	@use "$lib/styles/variables";

	.link {
		font-size: variables.$font-size-h3;
	}
</style>
