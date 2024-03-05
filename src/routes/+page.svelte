<script lang="ts">
	import "$styles/base.scss";

	import { dev } from "$app/environment";
	import { Footer, Header, Main } from "$components";
</script>

<svelte:head>
	{#if !dev}
		<script
			async
			data-domains="robinloeffel.ch"
			data-website-id="d1008afe-4b86-4249-9980-fbcb8f500b20"
			src="/stats/script.js"
		></script>
	{/if}
</svelte:head>

<Header />
<Main />
<Footer />
